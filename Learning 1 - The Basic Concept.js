// Chapter 1 - Variables & Data Types
const me = {
  // It is an object (me is an object). Objects are made up of key-value pairs.
  FullName: "Upantor Paul", // Key is FullName, and value is "Upantor Paul"
  age: 14,
  hobbies: "web dev",
  favFood: "pizza",
  class: 8,
};

//We can update the values of keys even if the object is declared using "const".
//But we can't reassign the whole object (e.g., me = { ... }) if it's declared with const.
//However, if we declare the object with "let", we can reassign the entire object.

me["age"] = me["age"] + 1;
me["FullName"] = "Upantor";

console.log(me.age); // Outputs: 15

// Chapter 2 - Operators and Conditional Statements
// Arithmetic Operators
let ko = 10;
let ku = 5;
console.log("ku =", ku, "and ko =", ko); // Outputs: ku = 5 and ko = 10
console.log("ko + ku = ", ko + ku); // Output: 15
console.log("ko - ku = ", ko - ku); // Output: 5
console.log("ko * ku = ", ko * ku); // Output: 50
console.log("ko / ku = ", ko / ku); // Output: 2
console.log("ko % ku = ", ko % ku); // Output: 0
console.log("ko ** ku = ", ko ** ku); // Output: 100000
// Increment and Decrement Operators

ko++; // Increment ko by 1 Then when ko is printed, one will be added. we can also do this with --
ku = ku + 5; // Increment ku by 5;
console.log("We have incremented ko by 1 and ku by 5. Now,");
console.log("ko = ", ko, " and ku = ", ku);

// we can change value by --a or ++a what it does is that it will first print the value of a and then change the value of a. We can also do this with a+=4 or a-=4 or a*=4 or a/=4 or a%=4 or a**=4

// Assignment Operators
// Assignment Operators are =, +=, -=, *=, /=, %=, **=
let p = 10;
let q = 5;
console.log("q = ", q, " and p = ", p);
p += 5; // Same as a = a + 5
--q;
q **= 4;

console.log(
  "We Have Chenged the value of q and p using Assignment Operators Now ",
  "q = ",
  q,
  " and p = ",
  p,
);
// Comparison Operators
// Comparison Operators: == (equal), != (not equal), === (equal value and type), !== (not equal value or type), >, <
let l = 10;
let m = 5;
console.log("l = ", l, " and m = ", m);
console.log("l == m is ", l == m); // Output: false
console.log("l != m is ", l != m); // Output: true
console.log("l === m is ", l === m); // Output: false
console.log("l !== m is ", l !== m); // Output: true
console.log("l > m is ", l > m); // Output: true
console.log("l < m is ", l < m); // Output: false

// Logical Operators
// Logical Operators are &&, ||, !
// Logical Operators: && (AND), || (OR), ! (NOT)
let x = 10;
let y = 5;
let condition1 = x > y;
let condition2 = x === y;
console.log("con1 && con2 = ", condition1 && condition2); // Output: false. && returns true only if both conditions are true.
// use of || logical or
console.log("con1 || con2 = ", condition1 || condition2); // Output: true. || returns true if at least one of the conditions is true.
// use of ! logical not
console.log("!con1 = ", !condition1); // Output: !true = false. ! is used to reverse the condition.
console.log("!(10>5) = ", !(10 > 5)); // Output: !(10>5) = false. ! is used to reverse the condition.

// Conditonal Statements
// Conditional Statements are if, if-else, if-else-if-else
// use of if
// We write a condition after the if statement. If the condition inside the brackets is true, then all the code after the second bracket will be executed. If the condition is false, that code will never be executed.

let o = 23;
let j = 34;

if (j < o) {
  console.log(`${p} is less than ${o}`);
} else {
  console.log(`${p} is equal to ${o}`);
}

// We are using Statements on dark and light mode example

// We are using Statements on age example
let age = 22;

if (age < 0 || age > 120) {
  console.log("Please enter a valid age");
} else if (age < 18) {
  console.log(
    "You are a minor. You cannot vote. You can vote after you are an adult.",
  );
} else {
  console.log("You are an adult. You can vote.");
}
let number = 132;

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else if (mode === "normal") {
  color = "greay";
} else {
  color = "white";
}
console.log(color);

// Switch Statement
let marks = {
  english: 90,
  math: 80,
  science: 70,
};

let totalPoints = 0;
let subjectCount = 0;

for (let subject in marks) {
  let score = marks[subject];
  let grade;
  let point;

  if (score >= 80) {
    grade = "A+";
    point = 5;
  } else if (score >= 70) {
    grade = "A";
    point = 4;
  } else if (score >= 60) {
    grade = "B";
    point = 3;
  } else if (score >= 50) {
    grade = "C";
    point = 2;
  } else {
    grade = "F";
    point = 0;
  }

  console.log(`${subject}: ${grade} (${point} points)`);

  totalPoints += point;
  subjectCount++;
}

let overallScore = totalPoints / subjectCount;
console.log(`\nOverall Point Score: ${overallScore.toFixed(2)} out of 5`);

// Ternary Operators
let age3 = 33;
let result = age3 >= 18 ? "adult" : "not adult";
console.log(result);

// Chapter 3 - Loops and Strings
// loops are used to repeat a block of code
// Loop are used when we need to execute a thing several time. it can be some lins of code or a number or name Suppose we want to print "Upantor Paul" 5 times We Can do this using for console.log but it will be a long process. So we use for loop
// for loop

// ===============================
// 💡 What is a loop?
// ===============================
// A loop is used to repeat a block of code multiple times.
// For example, if you want to print "Hello" 100 times, instead of writing console.log("Hello") 100 times,
// you can use a loop to do that for you.

// ===============================
// ✅ FOR LOOP
// ===============================
// Syntax: for (initialization; condition; increment/decrement) { ... }
// It runs as long as the condition is true.

for (let mes = 1; mes <= 5; mes++) {
  console.log("Upantor Paul"); // This will print "Upantor Paul" 5 times
}

// Another example: Summing numbers from 1 to 321
let all1 = 321;
for (let i = 1; i <= 321; i++) {
  all1 = all1 + i;
}
console.log("Sum is ", all1); // Will print the sum of 321 + (1 + 2 + 3 + ... + 321)

// This loop won't run because the condition is false at the start (0 is not >= 2)
for (let i = 0; i >= 2; i++) {
  console.log(i); // This won't print anything
}

// ===============================
// ✅ WHILE LOOP
// ===============================
// Syntax: while (condition) { ... }
// The loop keeps running as long as the condition is true.

let wi = 1;
while (wi <= 5) {
  console.log(wi); // This will print 1 to 5
  wi++; // Increment wi by 1
}

// ===============================
// ✅ DO WHILE LOOP
// ===============================
// Syntax: do { ... } while (condition);
// The main difference: it runs the code block **at least once**, even if the condition is false.

let di = 10;
do {
  console.log(di); // This will print 10 once, even though 10 > 5
  di++;
} while (di <= 5); // Condition is false, so it won't run again

// for of loop, for of loop is used to iterate over the elements of an array or a string but not for an object.
let java = "javascript"; // This is a string
let size = 0; // This is a variable that will store the size of the string
for (let i of java) {
  // This is a for of loop that will iterate over the elements of the string
  console.log(i); // This will print each element of the string
  size++; // This will increment the size by 1 for each element of the string
}
console.log(size); // This will print the size of the string

// For in loop, for in loop is used to iterate over the keys of an object or an array but not for a string.

let me23 = {
  name: "Upantor Paul",
  age: 14,
  hobbies: "web dev",
  favFood: "pizza",
  class: 8,
};
for (let key in me23) {
  console.log("key = ", key, " value = ", me23[key]);
}

// practice question
// Q1: Print all even numbers from 0 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    i + i;
    console.log(i);
  }
}

// Strings
// Strings are used to store text. They are enclosed in quotes. single quotes, double quotes, backticks are used to enclose strings. single quotes and double quotes are same but backticks are used to enclose strings that contain variables.

let str = "Upantor Paul";

console.log(str.length);
console.log(str[(0, 2, 4, 5)]);

// template literals
let specialString = `This is a template literal`;

let Iphone = {
  model: "12",
  color: "black",
  price: 999,
};

console.log(
  `The price of the iphone`,
  Iphone.model,
  `is`,
  Iphone.price,
  `dollars`,
  `and it is`,
  Iphone.color,
);
// This is not the best way to do it. It is better to use template literals. Template literals are enclosed in backticks and they allow us to use variables inside the string.
console.log(
  `The price of the iphone ${Iphone.model} is ${Iphone.price} dollars and it is ${Iphone.color}`,
);
// We can also use template literals to variables

// Strings Methods

//We are going to use The str.slice mathod to slice the string. Suppose we want to slice the string from index 0 to 4. We can do this by using the slice method. The slice method takes two arguments. The first argument is the starting index and the second argument is the ending index. The ending
let str23 = "Upantor Paul";
let str2 = "is a boy";
console.log(str23.slice(2, 4)); // This will print "an" Beause it dont print the last index
console.log(str23.slice(2)); // This will print "antor Paul" Beause it print the last index

// We are going to use The str.concat mathod to concat the string. Suppose we want to concat the string with another string. We can do this by using the concat method. The concat method takes one argument. The argument is the string that we want to concat with the original string
console.log(str23.concat(str2)); // This will print "Upantor Paul is a boy" Beacause it is margin those two string in one string

// We are going to use The replace mathod to replace the string. Suppose we want to replace the string with another string. We can do this by using the replace method. The replace method takes two arguments. The first argument is the string that we want to replace and the
console.log(str23.replace("Paul", "is a boy")); // This will print "Upantor is a boy" Beacause it is replacing the string "Paul" with "is a boy"
//there is anoter mathod called replaceAll it is used to replace all the string with another string

//We are going to use The str.chartAt mathod to chartAt the string. Suppose we want to chartAt the string with another string. We can do this by using the chartAt method. The chartAt method takes one argument. The argument is the index of the string that we
console.log(str23.charAt(2)); // This will print "a" Beacause it is the 2nd index of the string

// Chapter 4 - Arrays
// Arrays are used to store multiple values in a single variable. They are enclosed in square brackets. Arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on.
let marks2 = [97, 82, 75, 66, 55, 42, 33, 24, 15, 6];
console.log(marks2[0], marks2[1], marks2[2]);

let gow = ["Kratos", "Atreus", "thor", "Odin", "faye", "freya"];
console.log(
  `The name of the god is ${gow[0]} his wife is ${gow[4]}. Their son is ${gow[1]}. ${gow[0]} defeated ${gow[2]} and ${gow[3]} While Ragnarok.`,
);

// loops with Arrays
//Using For loop
console.log("loops with Arrays \nUsing For loop\n");
for (let i = 0; i < gow.length; i++) {
  console.log(gow[i]);
}

console.log("Using For of loop");
for (let i of gow) {
  console.log(i);
}

// let's Practice
// Q1: Create an array to store 5 numbers, Make a avg of them
let AllMarks = [85, 97, 33.3, 37, 76, 60];
let sum = 0;
for (let TotalMarks of AllMarks) {
  sum += TotalMarks;
}
let MarksAvg = sum / AllMarks.length;
console.log(MarksAvg);

// Q2:
let prices2 = [250, 645, 300, 900, 50];
for (let i = 0; i < prices2.length; i++) {
  console.log(`before discount = ${prices2[i]}`);
  let offer = prices2[i] / 10;
  let DiscountOffer = prices2[i] - offer;
  console.log(`after discount = ${DiscountOffer}`);
}

// Array Mathods
// Using push mathod to add a new element at the end of the array
let FoodItems = ["Burger", "Pizza", "Fries", "Coke", "Pepsi"];
let OtherFood = ["Pasta", "Sandwich", "Salad", "Soup"];
FoodItems.push("Noodles");
console.log(FoodItems);
// Using pop mathod to remove the last element of the array, Can be used to add now by deleting the last elements
FoodItems.pop(); // in this case it will remove "Noodles"
FoodItems.pop("Milk Sake"); // in this case it will add Milk Sake by removing the last Coke
console.log(FoodItems);
// Using .concat mathod to merge two arrays
let AllFoodItems = FoodItems.concat(OtherFood); // in this case it will merge FoodItems and OtherFood
console.log(AllFoodItems); // It will print the merged array

let CleverMethod = FoodItems.pop(FoodItems.concat(OtherFood));
console.log(CleverMethod);

// Using unshift mathod to add a new element at the beginning of the array Something like Push
let SetUp = ["CPU", "GPU", "RAM", "Motherboard", "Power Supply"];
SetUp.unshift("Keyboard", "Mouse"); // It is adding Keyboard and Mouse at the beginning of the array
console.log(SetUp);
// Using shift mathod to remove the first element of the array, Can be used to add now by deleting the first elements
let NewSetUp = SetUp.shift("mouse pad"); // It is removing Keyboard from the beginning of the array
console.log("Now Deleted", NewSetUp);
console.log("Now New Array is", SetUp);
//Using .slice mathod to slice the array from the starting index to the ending index
console.log(SetUp.slice(1, 3));

//Using .splice mathod to add or remove or replace elements from the array
//Splice is kind of forgiveing But it is understandable. After the "(" We say which index to start working from, maybe 2. Then, using a comma, the number that we give is the index after which the element will be deleted. Then using commas we can say what to put in the deleted elements.
let MyFovoriteGames = [
  "God of War 18",
  "Red Dead Redemtion 2",
  "The Last of Us",
  "Spider-Man",
  "Ratchet & Clank",
];
MyFovoriteGames.splice(0, 1, "God Of War Ragnarok");
console.log(MyFovoriteGames);

// Chapter 5 - Functions & Methods
// Using function to create a function. There are manny function that are inbuilt in javascript. But we can also create our own function. We can create a function using the function keyword. Then we give the function a name. Then we give the function a set of parentheses. Then we give the function a set of curly
let pi = 3.14;
function MyFastFunctionS2(radius) {
  Area = `the radius ${radius} and the Area is ` + pi * Math.pow(radius, 2);
  return Area; // After return the function will stop executing.
}
console.log(MyFastFunctionS2(4));

console.tulu = function(...args) {
  console.log(...args);
};
console.tulu(
  "We are using console.tulu to print this message. This is a fun way! This is how we can manipulate JavaScript functions into our own custom functions. In the same way, we can create server-side or even machine learning functions, which JavaScript doesn’t provide by default.",
);

// We can also create function using arrow function. Arrow function is a shorthand for creating a function. We can create a function using the arrow function keyword. Then we give the function a name. Then we give the function a set of parentheses.
const plusFunt = (a, b) => {
  return a + b;
};

console.log(plusFunt(2, 3));

// Let's Practice
//Qustion 1: Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function CoutVal(str23) {
  let count = 0;
  for (const cher of str23) {
    if (
      cher === "a" ||
      cher === "e" ||
      cher === "i" ||
      cher === "o" ||
      cher === "u" ||
      cher === "A" ||
      cher === "E" ||
      cher === "I" ||
      cher === "O" ||
      cher === "U"
    ) {
      count++;
    }
  }
  return count;
}
console.log(CoutVal("Upantor Paul"));

// Using forEach loop to iterate over the elements of an array
let ForEach_Arr = ["Upantor", "Paul", "is", "a", "boy"];
ForEach_Arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//let's Practice
// Q1: Create a forEach loop in a arr and caulculate the square of each element
let SquareArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
SquareArr.forEach((val) => {
  console.log(val * val);
});

// Using map method to create a new array by performing a function on each element of the array
let MapArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

MapArr.map((val) => {
  console.log(val);
});
// We can alse use map to create a new array

// Now we will use filter method to filter out the elements that we dont want. We wll create a array and filter only the even numbers
let FilterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let FiltedrArr = FilterArr.filter((val) => {
  return val % 2 === 0; //If we want to filter out the odd numbers we can use val % 2 !== 0
});
console.log(FiltedrArr);

// Now we will use reduce method to reduce the array to a single value. We will use reduce to find the sum of all the elements in the array
let ReduceArr = [1, 2, 3, 4, 5, 6, 7, 8, 29, 10];
let ReducedArr = ReduceArr.reduce((res, curr) => {
  return res + curr;
});
console.log(ReducedArr);
//We Can use to to find out largest number in a array
let MaxArra = ReduceArr.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(MaxArra);

//Lets Practice
//Q1: Create a Array of marks of students. Filter out the marks of students that scored 90+
let MarksArr = [97, 64, 32, 55, 67, 85, 90, 92, 77, 35];
let ninteplusMarks = MarksArr.filter((val) => {
  return val > 89;
});
console.log(ninteplusMarks)

//I have not made it is code this is generated by chat GPT
const codeBox = document.querySelector(".code-show");
const allRows = Array.from(document.querySelectorAll(".codetable .row"));
const tableBody = allRows[0]?.parentElement;

let currentIndex = 0;
const rowsPerLoad = 20;

// Hide all rows initially
allRows.forEach(row => row.style.display = "none");

// Show initial rows
loadMoreRows();

function loadMoreRows() {
  for (let i = currentIndex; i < currentIndex + rowsPerLoad && i < allRows.length; i++) {
    allRows[i].style.display = "";
  }
  currentIndex += rowsPerLoad;
}

// Detect scroll inside code box
codeBox.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = codeBox;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadMoreRows();
  }
});
