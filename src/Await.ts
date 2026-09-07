// 1. Define the data interface
interface UserData {
  id: number;
  name: string;
  email: string;
}

// 2. Simulated asynchronous fetch function returning a typed Promise
function fetchUserFromDatabase(userId: number): Promise<UserData> {
  return new Promise<UserData>((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: "Hari",
          email: "hksa.025@gmail.com",
        });
      } else {
        reject(new Error("Invalid user ID. Must be greater than 0."));
      }
    }, 800);
  });
}

// 3. Consuming the Promise using async / await
async function getUserProfile(id: number): Promise<void> {
  console.log(`Starting fetch for User ID: ${id}...`);

  try {
    // await pauses execution until the promise resolves
    const user: UserData = await fetchUserFromDatabase(id);

    console.log("User successfully retrieved:");
    console.log(`- Name: ${user.name}`);
    console.log(`- Email: ${user.email}`);
  } catch (error: unknown) {
    // Error handling with TypeScript type guard
    if (error instanceof Error) {
      console.error(`Request failed: ${error.message}`);
    } else {
      console.error("An unknown error occurred.");
    }
  } finally {
    console.log("Fetch operation complete.\n");
  }
}

// 4. Invoking the async function
async function main() {
  await getUserProfile(101); // Successful call
  await getUserProfile(-5);  // Triggers error catch
}

main();