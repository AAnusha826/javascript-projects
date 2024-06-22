// Initialize Variables
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
const preparedForLiftOff = true;

// Conditional Statements
let launchReady = true;

if (astronautCount > 7) {
    launchReady = false;
    console.log("Abort: Astronaut count exceeds 7.");
}

if (astronautStatus !== "ready") {
    launchReady = false;
    console.log("Abort: Astronaut status is not ready.");
}

if (totalMassKg >= maximumMassLimit) {
    launchReady = false;
    console.log("Abort: Total mass exceeds maximum mass limit.");
}

if (!(minimumFuelTemp <= fuelTempCelsius && fuelTempCelsius <= maximumFuelTemp)) {
    launchReady = false;
    console.log("Abort: Fuel temperature is out of acceptable range.");
}

if (fuelLevel !== "100%") {
    launchReady = false;
    console.log("Abort: Fuel level is not at 100%.");
}

if (weatherStatus !== "clear") {
    launchReady = false;
    console.log("Abort: Weather status is not clear.");
}

// Verify the Shuttle is Cleared for LiftOff
if (launchReady && preparedForLiftOff) {
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Astronaut Count: ${astronautCount}`);
    console.log(`Crew Mass (kg): ${crewMassKg}`);
    console.log(`Fuel Mass (kg): ${fuelMassKg}`);
    console.log(`Shuttle Mass (kg): ${shuttleMassKg}`);
    console.log(`Total Mass (kg): ${totalMassKg}`);
    console.log(`Fuel Temperature (Celsius): ${fuelTempCelsius}`);
    console.log(`Weather Status: ${weatherStatus}`);
    console.log("Wish your astronauts a safe flight!");
} else {
    console.log("Launch Aborted: Conditions not met.");
}
