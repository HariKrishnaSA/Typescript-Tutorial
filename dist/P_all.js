//Promies.all(All must succeed)
//Runs all promises in parallel.
//Resolves when all succeed.
//Fails fast: Rejects immediately if any single promise fails.
console.log("\n--- Promise.all ---");
function checkEngine() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Engine Status: Optimal (Temp 90°C)"), 300);
    });
}
function checkBrakes() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Brake Pressure: Normal (Hydraulics OK)"), 500);
    });
}
function checkBattery() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Battery Health: 98% (Voltage 12.6V)"), 200);
    });
}
async function startCarDiagnostics() {
    console.log("Initiating vehicle pre-drive check...");
    try {
        const [engineStatus, brakeStatus, batteryStatus] = await Promise.all([
            checkEngine(),
            checkBrakes(),
            checkBattery(),
        ]);
        console.log(engineStatus);
        console.log(brakeStatus);
        console.log(batteryStatus);
        console.log("\nAll systems green. Ready to drive!");
    }
    catch (error) {
        console.error("Diagnostic failure! Ignition locked:", error);
    }
}
startCarDiagnostics();
export {};
