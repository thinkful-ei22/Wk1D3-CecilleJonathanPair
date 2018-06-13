'use strict';
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

// const workers = [
//   {name: 'Jon', jobTitle: "superhero"},
//   {name: 'Bob', jobTitle: 'builder', boss: 'Jon'},
//   {name: 'Jane', jobTitle: 'Chef', boss: 'Jon'},
// ];

// for (let i = 0; i < workers.length; i++) {
//   const person = workers[i];
//   if (!person.boss) {
//     console.log(`${person.name} ${person.jobTitle} doesn't report to anybody`)
//   }
//   if (person.boss) {
//     console.log(`${person.name} ${person.jobTitle} reports to ${person.boss}.`);
//   }
// }

//Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, create a
//decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

// let cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5,
// };
//
// function decode (word) {
//   let strArray = word.split(' ');
//   let returnStr = '';
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i][0] === 'a') {
//       returnStr += strArray[i][cipher.a - 1];
//     }
//     else if (strArray[i][0] === 'b') {
//       returnStr += strArray[i][cipher.b - 1];
//     }
//     else if (strArray[i][0] === 'c') {
//       returnStr += strArray[i][cipher.c - 1];
//     }
//     else if (strArray[i][0] === 'd') {
//       returnStr += strArray[i][cipher.d - 1];
//     }
//     else {
//       returnStr += ' ';
//     }
//   }
//   return returnStr;
// }
//
// console.log(decode('craft block argon meter bells brown croon droop'));
// function decode (word) {
//   let keys = Object.keys(cipher);
//   let returnString = "";
//   let strArray = word.split(" ");
//   switch(word[0]) {
//   case keys[0]:
//     returnString += word[cipher.a - 1];
//   case keys[1]:
//     returnString += word[cipher.b - 1];
//   case keys[2]:
//     returnString += word[cipher.c - 1];
//   case keys[3]:
//     returnString += word[cipher.d - 1];
//   default:
//     return ' ';
//   }
//   return returnString;
// };

//  console.log(decode('craft block argon meter bells brown croon droop'));

function LOTR (name, nickname, race, origin, attack, defense) {
  return {
    name, nickname, race, origin, attack, defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(character) {
      if (this.attack - this.defense > 0) {
        let x = this.attack - this.defense;
      } else if (this.defense > this.attack) {
        let y = 0;
      } else if (this.defense < this.attack) {
        y = this.attack - this.defense;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  }
};

const characters = [];

const Gandalf = LOTR('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const Bilbo = LOTR('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const Frodo = LOTR('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const Aragorn = LOTR('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const Legolas = LOTR('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const Gimli = LOTR('Gimli', 'gimli', 'Dwarf', 'Mines', 7, 5);

characters.push(Gandalf, Bilbo, Frodo, Aragorn, Legolas, Gimli);
//console.log(characters);

//characters.find(character => character.nickname === 'aragorn').describe();

//console.log(characters.filter(character => character.race === 'Hobbit'));

console.log(characters.filter(character => character.attack > 5));
