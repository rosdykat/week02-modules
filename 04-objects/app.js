console.log("04 JavaScript Objects Module");

const person = {
  name: "rosdy",
  age: 26,
  favouriteColour: "Yellow",
};

console.log(person);

// log as a table:
console.table(person);

// add properties to an object by assigning a value to a new property

person.favouriteFood = "Cake";

console.log(person.favouriteFood); // output: cake

// create and object for a car and book with properties on each

const car = {
  make: "fast car",
  model: 1,
  colour: "yellow",
};

const book = {
  title: "kitties",
  author: "rosdy",
  pages: 100,
};

console.log(car);
console.log(book);

// an object with an array inside it, i.e a complex object

const blogPost = {
  title: "My first blog post! yay",
  author: {
    name: "rosdy",
    age: 26,
    favouriteColour: "Yellow",
  },
  tags: ["coding", "Javascript", "objects", "arrays", "cute kitties"],
  content:
    "This is my blog post about coding, javascript, objects, and also cats!!",
};

console.log(blogPost);

// access properties inside complex objects

// this is accessing a property in a secnond layer (name)

console.log(blogPost.author.name); //output rosdy

// accessing a property inside a ray using the index value

console.log(blogPost.tags[0]); //output coding

// print out number of tags by checking the length of the array

console.log(blogPost.tags.length); //output: 5

// combining this with a traditional loop

console.log(
  `there are ${blogPost.tags.length} tags for this post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

//  loop if you don't need the index

console.log(`Tags for post "${blogPost.title}":`);
for (let tag of blogPost.tags) {
  console.log(tag);
}
