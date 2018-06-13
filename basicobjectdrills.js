// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     ollyolly: 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     }
//   };
// }
//
//
// console.log(createMyObject());
//
//
// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }
//
// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
//   return person;
// }
//
//
// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };
//
// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }
//
// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];
//
// function enrollInSummerSchool(students) {
//   return students.map(student => {
//     return {
//       name: student.name,
//       status: 'In Summer school',
//       course: student.course,
//     };
//   });
// }

'use strict'

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for (let i = 0; i< expectedKeys.length; i++) {
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }
  return true;
}