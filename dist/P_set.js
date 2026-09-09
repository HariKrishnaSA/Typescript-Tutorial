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
