// Chapter 6 - Classes & Objects
// Objects
const UpantorPaul = {
  fullName: "Upantor Paul",
  age: 14,
  marks: 80,
  isActive: true,
  sayHello: function () {
    console.log("Marks =", this.marks); // 'this' is used to access the properties of the current object (like UpantorPaul.marks)
  },
};


UpantorPaul.sayHello();
console.log(UpantorPaul.toString); // Built-in function that returns a string representation of the object (currently not invoked)
console.log(typeof UpantorPaul); // 'typeof' is used to check the data type of the variable

// Inheritance using __proto__
const Freelancer = {
  calculateTax() {
    return "Tax rate is 10%";
  },
};

const Krim = {
  salary: 50000,
};

Krim.__proto__ = Freelancer; // Inheriting properties/methods from Freelancer object
console.log(Krim.calculateTax());

// Classes
// A class in JavaScript is a blueprint for creating objects with shared properties and methods.
// It uses the `class` keyword and supports inheritance, encapsulation, and polymorphism.

class ToyotaCar {
  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

let fortuner = new ToyotaCar();
fortuner.stop(); // Object of ToyotaCar class; methods imported from the class like a template

// Constructor
// The constructor is a special method in a class that runs when a new object is created.
// It is used to initialize the properties of the object.

class Upantor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class NewToyotaCar {
  constructor(brand, mileage) {
    console.log("Creating a new car");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("Start the car");
  }

  stop() {
    console.log("Stop the car");
  }
}

let car1 = new NewToyotaCar("Toyota", 10);

// Inheritance using `extends`
// The `extends` keyword is used to create a class that inherits from another class.

class Person {
  constructor(name) {
    this.species = "Homo Sapiens";
    this.name = name;
  }

  canSay() {
    console.log("Hello");
  }

  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }

  work() {
    console.log("Do nothing");
  }
}

class Coder extends Person {
  constructor(branch, name) {
    super(name); // Calls the constructor of the parent class
    this.branch = branch;
  }

  work() {
    console.log("Work involves coding, debugging, testing, and solving problems");
  }
}

let OBJUpantor = new Coder("WordPress, CMS", "Upantor");
console.log(OBJUpantor);

// Chapter 7 - Callbacks, Promises & Async Await

// Synchronous code can block the flow of execution, causing delays in the UI.
// Asynchronous code allows execution to continue without waiting.

const getData = (dataID, getNextData) => {
  setTimeout(() => {
    console.log("Data", dataID);
    if (getNextData) getNextData();
  }, 2000);
};

// Example of callback hell (also called Pyramid of Doom)
const havingData = () => {
  console.log("Having Data 1");
  getData(1, () => {
    console.log("Having Data 2");
    getData(2, () => {
      console.log("Having Data 3");
      getData(3);
    });
  });
};
havingData();

// To avoid callback hell, we use Promises
// A Promise has 3 states: pending, fulfilled, rejected

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("I am accepted"); // We can use reject as well, which would trigger .catch
});
console.log(promise);

// Promise with setTimeout and chaining
const getData10 = (dataID, getNextData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataID);
      resolve("Success");
      if (getNextData) getNextData(); // Optional callback fallback
    }, 5000);
  });
};

let result = getData10(123);

// Using .then() and .catch()

const getPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am promise2");
      resolve("I am accepted");
    }, 2000);
  });
};

let promise2 = getPromise2();
promise2.then(() => {
  console.log("I am .then");
});
promise2.catch(() => {
  console.log("I am .catch");
});

// Promise chaining to avoid nested callbacks
const asyncFunction1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am asyncFunction1");
      resolve("I am accepted");
    }, 2000);
  });
};

const asyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am asyncFunction2");
      resolve("I am accepted");
    }, 2000);
  });
};

console.log("Fetching data1");
asyncFunction1().then((res) => {
  console.log(res);
  console.log("Fetching data2");
  asyncFunction2().then((res) => {
    console.log(res);
  });
});

// Promise chaining with return to flatten structure
const getData2 = (dataID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data", dataID);
      resolve("Success");
    }, 500);
  });
};

getData2(1)
  .then(() => getData2(2))
  .then(() => getData2(3))
  .then(() => getData2(4))
  .then((res) => {
    console.log(res);
  });

// Async/Await - syntactic sugar over Promises
const getData4 = (dataID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataID);
      resolve("Success");
    }, 1000);
  });
};

const getAllData = async () => {
  console.log("Getting Data 1...");
  await getData4(1);
  console.log("Getting Data 2...");
  await getData4(2);
  console.log("Getting Data 3...");
  await getData4(3);
  console.log("Getting Data 4...");
  await getData4(4);
  console.log("Successfully fetched all data");
  //This is looking very polished and clean compared to call back hell and promise chain
};

const getAllData2 = async () => {
  console.log("Getting Data 1...");
  await getData4(1);
  console.log("Getting Data 2...");
  await getData4(2);
  console.log("Getting Data 3...");
  await getData4(3);
  console.log("Getting Data 4...");
  await getData(4);
  console.log4("Successfully fetched all data");
};

// Normally, we need to call a function after defining it.
// But there's a concept called IIFE (Immediately Invoked Function Expression).
// It allows us to define and execute a function immediately without explicitly calling it.
(async () => {
  await getAllData();   // Wait for this to finish
  await getAllData2();  // Then run the second one
})();
//This is called IIFE Function
// Chapter 8 the last chapter - API
