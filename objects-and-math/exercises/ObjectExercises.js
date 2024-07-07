let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
       return Math.floor(Math.random() * 11); // random number from 0 to 10
   }
};
  
  let salamander = {
      name: "Lacey",
      species: "Axolotl Salamander",
      mass: 0.1,
      age: 5,
      astronautID: 2,
   
   move: function () {return Math.floor(Math.random()*11)}

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}
// Function to conduct fitness test (race)
function fitnessTest(candidates) {
   let results = [];

   candidates.forEach(animal => {
       let numSteps = 0;
       let turns = 0;

       while (numSteps < 20) {
           numSteps += animal.move(); // accumulate steps
           turns++; // count turns
       }

       results.push(`${animal.name} took ${turns} turns to take 20 steps.`);
   });

   return results;
}
// Test crewReports function
crew.forEach(animal => {
   console.log(crewReports(animal));
});

// Test fitnessTest function
let raceResults = fitnessTest(crew);
raceResults.forEach(result => {
   console.log(result);
});




// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
