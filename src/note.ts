import express, { type Request, type Response } from "express";
import Database from "better-sqlite3";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Initialize SQLite Database
const db = new Database(path.join(__dirname, "..", "profiles.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    role TEXT NOT NULL,
    verification INTEGER NOT NULL
  )
`);

interface Hari {
  id: string;
  name: string;
  age: number;
  role: string;
  verification: boolean;
}

// Helper: Save or update profile in SQLite
function saveProfile(profile: Hari, originalId?: string) {
  if (originalId && originalId.trim().length > 0) {
    // Update existing record (supports changing the ID/primary key)
    const updateStmt = db.prepare(`
      UPDATE profiles
      SET id = ?, name = ?, age = ?, role = ?, verification = ?
      WHERE id = ?
    `);

    updateStmt.run(
      profile.id,
      profile.name,
      profile.age,
      profile.role,
      profile.verification ? 1 : 0,
      originalId.trim()
    );
  } else {
    // Standard insert / upsert for new records
    const insertStmt = db.prepare(`
      INSERT INTO profiles (id, name, age, role, verification)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        age = excluded.age,
        role = excluded.role,
        verification = excluded.verification
    `);

    insertStmt.run(
      profile.id,
      profile.name,
      profile.age,
      profile.role,
      profile.verification ? 1 : 0
    );
  }
}

// 2. Start Express Web Server
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the server.html file from project root
app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "server.html"));
});

// JSON API endpoint for frontend table
app.get("/api/profiles", (_req: Request, res: Response) => {
  const rows = db.prepare("SELECT * FROM profiles").all();
  res.json(rows);
});

// Form submit endpoint
app.post("/submit", (req: Request, res: Response) => {
  const body = req.body as Record<string, string | undefined>;

  const id = (body["id"] ?? "").trim();
  const originalId = (body["originalId"] ?? "").trim();
  const name = (body["name"] ?? "").trim();
  const age = Number(body["age"] ?? 0);
  const role = (body["role"] ?? "").trim();
  const verification = body["verification"] === "true";

  if (id && name) {
    saveProfile({ id, name, age, role, verification }, originalId);
  }

  res.redirect("/");
});

// Delete endpoint
app.post("/delete", (req: Request, res: Response) => {
  const body = req.body as Record<string, string | undefined>;
  const id = (body["id"] ?? "").trim();

  if (id) {
    db.prepare("DELETE FROM profiles WHERE id = ?").run(id);
  }

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Web server active at: http://localhost:${PORT}`);
  console.log("Terminal CLI prompt active below:\n");
});

// 3. Terminal CLI Prompt
async function startPrompt() {
  const rl = readline.createInterface({ input, output });

  try {
    const name = await rl.question("Enter your name: ");
    const ageInput = await rl.question("Enter your age: ");
    const role = await rl.question("Enter your role: ");
    const verificationInput = await rl.question("Are you verified? (true/false or yes/no): ");
    const id = await rl.question("Enter your ID: ");

    const cleanV = verificationInput.trim().toLowerCase();
    const isVerified = cleanV === "true" || cleanV === "yes" || cleanV === "y";

    const user: Hari = {
      id: id.trim(),
      name: name.trim(),
      age: Number(ageInput),
      role: role.trim(),
      verification: isVerified,
    };

    saveProfile(user);

    console.log("\nProfile saved to profiles.db successfully via CLI:");
    console.log(user);
    console.log(`\nView it live in the browser at: http://localhost:${PORT}`);
  } finally {
    rl.close();
  }
}

startPrompt();