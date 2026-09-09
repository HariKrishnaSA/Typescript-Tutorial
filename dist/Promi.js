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
//Promise.allSettled
//Waits for all checks to complete without crashing
function fullCheck() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Engine: OK (Temp 90°C)"), 300);
    });
}
function checkTirePressure() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Tire Pressure: LOW in rear right tire!"), 400);
    });
}
function check_Battery() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Battery: OK (12.6V)"), 200);
    });
}
async function runFullInspection() {
    console.log("Running comprehensive car diagnostics...\n");
    const results = await Promise.allSettled([
        fullCheck(),
        checkTirePressure(),
        check_Battery(),
    ]);
    results.forEach((report) => {
        if (report.status === "fulfilled") {
            console.log(`[PASS] ${report.value}`);
        }
        else {
            console.log(`[WARN] Check Failed: ${report.reason}`);
        }
    });
}
runFullInspection();
export {};
