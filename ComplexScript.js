/*
File Name: ComplexScript.js
Description: This complex script demonstrates advanced concepts in JavaScript including object-oriented programming, closures, higher order functions, and asynchronous programming.
*/

// Utility function to simulate asynchronous operations
function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a collection of people
class PeopleCollection {
  constructor() {
    this.people = [];
  }

  // Method to add a person to the collection
  addPerson(person) {
    this.people.push(person);
  }

  // Method to list all people in the collection
  listPeople() {
    console.log("People in the collection:");
    this.people.forEach(person => person.greet());
  }
}

// Function illustrating closures and higher order functions
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Current count: ${count}`);
  }

  return {
    increment,
    decrement
  };
}

// Asynchronous function using async/await
async function executeAsyncOperations() {
  console.log("Starting async operations...");

  await simulateAsyncOperation();
  console.log("Async operation 1 completed.");

  await simulateAsyncOperation();
  console.log("Async operation 2 completed.");

  await simulateAsyncOperation();
  console.log("Async operation 3 completed.");

  console.log("All async operations completed.");
}

// Usage of the code
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

person1.greet();
person2.greet();

const collection = new PeopleCollection();
collection.addPerson(person1);
collection.addPerson(person2);
collection.listPeople();

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

executeAsyncOperations();