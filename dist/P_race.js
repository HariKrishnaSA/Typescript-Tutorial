//Promise.race
//Emergency braking triggers as soon as the very first obstacle sensor detects something
function frontRadar() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Front Radar detected vehicle at 15m!"), 120);
    });
}
function frontCamera() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Front Camera detected pedestrian at 10m!"), 50); // Fastest
    });
}
function lidarSensor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("LiDAR point cloud detected wall at 20m!"), 200);
    });
}
async function triggerEmergencyBrake() {
    console.log("Scanning roadway for obstacles...\n");
    const fastestAlert = await Promise.race([
        frontRadar(),
        frontCamera(),
        lidarSensor(),
    ]);
    console.log(`[BRAKE ENGAGED] Triggered by: ${fastestAlert}`);
}
triggerEmergencyBrake();
export {};
