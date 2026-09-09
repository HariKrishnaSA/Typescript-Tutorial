//Promise.any
//The car tries to connect to 4G Cellular, Satellite, and Offline Cache.


function satelliteGPS(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Satellite link blocked (tunnel)"), 80); 
  });
}

function cellular4G(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Cellular 6G Navigation Server connected"), 150); 
  });
}

function offlineMapStorage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Offline Map Cache loaded"), 300);
  });
}

async function connectNavigation(): Promise<void> {
  console.log("Establishing GPS navigation feed...\n");

  try {
    
    const activeRoute = await Promise.any([
      satelliteGPS(),
      cellular4G(),
      offlineMapStorage(),
    ]);

    console.log(`[ROUTE READY] Source: ${activeRoute}`);
  } catch (error) {
    console.error("All navigation systems failed:", error);
  }
}

connectNavigation();