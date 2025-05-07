console.log("05-Object-Methods Module");

// an object called person with name, age, favourite colour, and a method called sayhello to greet the console.

// included a passing argument to add behaviour to the object, sayHello that logs a greeting

const person = {
  name: "Ross",
  age: 26,
  favouriteColour: "Yellow",
  getAge: function () {
    return this.age;
  },
  sayHello: function (name) {
    console.log("Hello! Welcome to this module " + name + "!");
  },
};

person.sayHello("Ross");

// returning values

// added a returning value through method 'getAge' that returns age

const age = person.getAge();

console.log(age);

// an object myCat with name, size, and colour, include method 'advert' that returns the string detailing the cats name, size, and colour and log the result to the console.

// const myCat = {
//   name: "malley",
//   size: "large",
//   colour: "orange",
//   getMyCat: function (name, size, colour) {
//     return this.myCat;
//   },
// };

// const malley = getMyCat();

// console.log(malley);

const myCat = {
  name: "malley",
  size: "large",
  colour: "orange",
  about: function () {
    console.log(this.name, this.size, this.colour);
    return this.name;
  },
};

myCat.about();

// do the same for an object callled book later

const book = {
  title: "malley the cat!",
  author: "Malley",
  pages: 10000,
  advert: function () {
    console.log(
      "best selling author " +
        this.author +
        " stuns with new biography titled " +
        this.title +
        " it is rumoured to have " +
        this.pages +
        " pages! what a busy boy #bestcat #TescoExclusive"
    );
  },
};

book.advert();
