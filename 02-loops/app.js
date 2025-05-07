console.log("02 loops module");

// for loops

for (let i = 0; i < 5; i++) {
  console.log("Number", i);
}

// while loops
// ++ -> increment

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// a loop that runs until Math.random() returns a value lower than 0.1, if lower than 0.1, set keepLooping to true which will stop the loop

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("what", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value beetween 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

// Side note - Math.random() is a function inbuilt to JavaScript that returns a random floating point (similar to demcimal) value between 0 and 1.

// create an array of your favourite foods - loop over the array and log each item to the console.

const animals = ["cats", "dogs", "ducks", "mice"];
for (let animal of animals) {
  console.log(animal);
}

const favouriteColours = ["Yellow", "Green", "Brown"];
for (let i = 0; i < favouriteColours.length; i++) {
  console.log(favouriteColours[i]);
}

const favouriteNumbers = [5, 10, 15, 20, 25];
for (let i = 0; i > favouriteNumbers.length; i++) {
  console.log(favouriteNumbers);
}
