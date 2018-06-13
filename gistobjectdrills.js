'use strict'
// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour)  * 100;
//   }
// }

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());

/*
Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value.
*/

// let obj = {
//   foo: 'foo',
//   bar: 'bar',
//   fum: 'fum',
//   quux: 'quux',
//   spam: 'spam'
// };
//
// for (let key in obj) {
//   console.log(obj[key]);
// }

// let meals = {
//   meal: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }

// console.log(meals.meal[3]);

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const owner = {
  name: 'Jon',
  jobTitle: 'Superhero'
};

const emp1 = {
  name: 'Bob',
  jobTitle: 'builder',
  boss: 'Jon'
};

const emp2 = {
  name: 'Jane',
  jobTitle: 'chef',
  boss: 'Jon'
};

const myArray = [owner, emp1, emp2];

for (const prop in myArray) {
  console.log(`${[key].name}`);
}
