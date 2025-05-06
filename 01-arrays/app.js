console.log("Welcome to 01-arrays :)");
const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);
console.log(blogPosts[0]); //output: my first blog post
console.log(blogPosts[1]); //output: my second blog post
console.log(blogPosts[2]); //output: my third blog post

// add item to array by assigning a new index

blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]); //output; my fourth blog post

console.log(blogPosts); //Fourth blog post added to array

// array with multiple data types (including more arrays)

const randomList = ["hello", 5, [blogPosts], true];
console.log(randomList);

const favouriteFood = ["bread", "pizza", "pasta", "cake"];

console.log(favouriteFood);

const favouriteColours = ["yellow", "green", "brown"];

const favouriteNumbers = [5, "10", 15]; //no "" to add as a number instead of a string

console.log(favouriteNumbers);
