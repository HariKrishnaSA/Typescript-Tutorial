interface UserProfile {
  readonly id: number;                             
  name: string;
  bio?: string;                                    
  [metadata: string]: string | number | undefined; 
}


const user: UserProfile = {
  id: 60,
  name: "Hari",
  bio: "Software Engineer",
  department: "Engineering",
  level: 3,
};


const displayName = user.name.toUpperCase();      
const defaultScore = 50;                           
function getUserSummary(profile: UserProfile) {
  return `${profile.name} (ID: ${profile.id})`;    
}


console.log("User Object:", user);
console.log("Summary:", getUserSummary(user));
console.log("Inferred displayName:", displayName);
console.log("Inferred defaultScore:", defaultScore);
console.log("Department:", user["department"]);