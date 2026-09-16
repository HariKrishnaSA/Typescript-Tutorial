import express, { Request, Response } from "express";
import Database from "better-sqlite3";

const db = new Database("profiles.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    role TEXT NOT NULL,
    verification INTEGER NOT NULL
  )
`);

interface UserProfile {
  name: string;
  age: number;
  role: string;
  verification: boolean;
  id: string;
}

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  const rows = db.prepare("SELECT * FROM profiles").all() as {
    id: string;
    name: string;
    age: number;
    role: string;
    verification: number;
  }[];

  const profileRowsHtml = rows
    .map(
      (p) => `
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">${p.id}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${p.name}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${p.age}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${p.role}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${p.verification ? "Yes" : "No"}</td>
      </tr>
    `
    )
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Profile Manager</title>
        <style>
          body { font-family: sans-serif; max-width: 650px; margin: 40px auto; padding: 0 20px; }
          form { display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; }
          input, button { padding: 8px; font-size: 14px; }
          button { background: #0070f3; color: white; border: none; cursor: pointer; border-radius: 4px; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        </style>
      </head>
      <body>
        <h2>Create Profile</h2>
        <form method="POST" action="/submit">
          <input type="text" name="name" placeholder="Name" required />
          <input type="number" name="age" placeholder="Age" required />
          <input type="text" name="role" placeholder="Role (e.g. TESTING)" required />
          <input type="text" name="id" placeholder="ID (e.g. 23BAM060)" required />
          <label>
            <input type="checkbox" name="verification" value="true" /> Verified?
          </label>
          <button type="submit">Save to Database</button>
        </form>

        <h2>Profiles in Database</h2>
        <table>
          <thead>
            <tr style="background: #f4f4f4;">
              <th style="border: 1px solid #ccc; padding: 8px;">ID</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Name</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Age</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Role</th>
              <th style="border: 1px solid #ccc; padding: 8px;">Verified</th>
            </tr>
          </thead>
          <tbody>
            ${profileRowsHtml || '<tr><td colspan="5" style="text-align:center; padding: 10px;">No profiles yet</td></tr>'}
          </tbody>
        </table>
      </body>
    </html>
  `);
});

app.post("/submit", (req: Request, res: Response) => {
  const profile: UserProfile = {
    id: req.body.id.trim(),
    name: req.body.name.trim(),
    age: Number(req.body.age),
    role: req.body.role.trim(),
    verification: req.body.verification === "true",
  };

  const stmt = db.prepare(`
    INSERT INTO profiles (id, name, age, role, verification)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      age = excluded.age,
      role = excluded.role,
      verification = excluded.verification
  `);

  stmt.run(
    profile.id,
    profile.name,
    profile.age,
    profile.role,
    profile.verification ? 1 : 0
  );

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});