const user = {
    id: 60,
    name: "Hari",
    bio: "Software Engineer",
    department: "Engineering",
    level: 3,
};
const displayName = user.name.toUpperCase();
const defaultScore = 50;
function getUserSummary(profile) {
    return `${profile.name} (ID: ${profile.id})`;
}
console.log("User Object:", user);
console.log("Summary:", getUserSummary(user));
console.log("Inferred displayName:", displayName);
console.log("Inferred defaultScore:", defaultScore);
console.log("Department:", user["department"]);
export {};
