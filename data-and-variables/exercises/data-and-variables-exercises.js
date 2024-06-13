let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400; 
const milesPerKilometer = 0.621;
console.log(typeof shuttleName); // string
console.log(typeof shuttleSpeedMph); // number
console.log(typeof distanceToMarsKm); // number
console.log(typeof distanceToMoonKm); // number
console.log(typeof milesPerKilometer); // number
let milesToMars = distanceToMarsKm * milesPerKilometer;
console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(shuttleName + " will take " + daysToMars + " days to reach the Mars. ");
let milesToMoon = distanceToMoonKm *milesPerKilometer;
console.log(milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon);
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon. ");