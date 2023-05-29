/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
// for(var i = 1; i <= 5; i++) {
//  //console.log(i);
// }

// for(var i = 5; i >= 1; i--) {
//     console.log(i);
// }

// var myVar;
// myVar = 5;
// var myNum;
// myNum = myVar;


// var ourName;
// ourName = 'hello';

// console.log(myNum);
// console.log(myVar); 
// console.log(ourName);

// const FAV_PET = "none";
// console.log(FAV_PET);
// const myVar = 5 + 10;
// const myVar = 12 - 6;
// const myVar = 13 * 13;
// const myVar = 16 / 2;
// let myVar = 1;
// myVar += 5;
// myVar -= 5;
// myVar *= 5;
// myVar /= 5;
// console.log(myVar);
// const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// const doubleQuoteStr = "This is a string"; 
// const singleQuoteStr = 'This is also a string';
// const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// //const badStr = 'Finn responds, "Let's go!"';
// const ourStr = "I come first. " + "I come second.";
// let ourStr1 = "I come first. ";
// ourStr1 += "I come second.";

// const ourName = "Metacrafters";
// const ourStr2 = "Hello, our name is " + ourName + ", how are you?";
// const anAdjective = "awesome!";
// let ourStr3 = "Metacrafters is ";
// ourStr3 += anAdjective;
// console.log("Alan Peter".length);


// let myStr = "Bob";
// myStr[0] = "J";
// myStr = "Job";

// function test (myCondition) {
//     if (myCondition) {
//       return "It was true";
//     }
//     return "It was false";
//   }
  
//   test(true);
//   test(false);
//   console.log(test('It was true'));
// function equalityTest(myVal) {
//     if (myVal == 10) {
//       return "Equal";
//     }
//     return "Not Equal";
//   }
// console.log(equalityTest(4));

// if (num > 5) {
//     if (num < 10) {
//         return "Yes";
//     }
// }
// return "No";

// if (num > 5 && num < 10) {
//     return "Yes";
// }
// return "No";

// if (num > 10) {
//     return "No";
//   }
//   if (num < 5) {
//     return "No";
//   }
//   return "Yes";

//   if (num > 10 || num < 5) {
//     return "No";
//   }
//   return "Yes";
//   if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }
//   if (num > 15) {
//     return "Bigger than 15";
//   } else if (num < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 15";
//   }
//   function foo(x) {
//     if (x < 1) {
//       return "Less than one";
//     } else if (x < 2) {
//       return "Less than two";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
//   function bar(x) {
//     if (x < 2) {
//       return "Less than two";
//     } else if (x < 1) {
//       return "Less than one";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
//   switch (lowercaseLetter) {
//     case "a":
//       console.log("A");
//       break;
//     case "b":
//       console.log("B");
//       break;
//   }
  // let result = "";
  // switch (val) {
  //   case 1:
  //   case 2:
  //   case 3:
  //     result = "1, 2, or 3";
  //     break;
  //   case 4:
  //     result = "4 alone";
  // }
  // function findGreater(a, b) {
  //   if(a > b) {
  //     return "a is greater";
  //   }
  //   else {
  //     return "b is greater or equal";
  //   }
  // }
  // function findGreater(a, b) {
  //   return a > b ? "a is greater" : "b is greater or equal";
  // }
  // function findGreaterOrEqual(a, b) {
  //   if (a === b) {
  //     return "a and b are equal";
  //   }
  //   else if (a > b) {
  //     return "a is greater";
  //   }
  //   else {
  //     return "b is greater";
  //   }
  // }
  // function findGreaterOrEqual(a, b) {
  //   return (a === b) ? "a and b are equal" 
  //     : (a > b) ? "a is greater" 
  //     : "b is greater";
  // }
  // function findGreaterOrEqual(a, b) {
  //   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  // }
  // const sandwich = ["peanut butter", "jelly", "bread"];
  // const teams = [["Bulls", 23], ["White Sox", 45]];
  // const array = [50, 60, 70];
  // console.log(array[0]);
  // const data = array[1];
  // console.log(data);
//   const ourArray = [50, 40, 30];
// ourArray[0] = 15;
// console.log(ourArray);
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// const subarray = arr[3];
// const nestedSubarray = arr[3][0];
// const element = arr[3][0][1];
// console.log(nestedSubarray);
// console.log(element);
// console.log(subarray);
// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// console.log(arr1);
// console.log(arr2);
// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// const cat = {
//   "name": "Whiskers",
//   "legs": 4,
//   "tails": 1,
//   "enemies": ["Water", "Dogs"]
// };
// const myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// const myObj = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };

// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";

// ourDog["bark"] = "bow-wow";

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;
// function plusThree(num) {
//   return num + 3;
// }

// const answer = plusThree(5);
// console.log(answer);

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// console.log(myFun());
// console.log(someVar);

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEqual(a, b) {
//   return a === b;
// }

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }

// console.log(i);

// const ourArray = [];

// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }

// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }

// console.log(ourArray);

// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// const ourArray = []; 
// let i = 5;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }

// const ourArray = []; 
// let i = 5;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// console.log(ourArray);

// const a = parseInt("007");
// console.log(a);
// function tryIt(numberAsString) {

//   if (parseInt(numberAsString) == 123) {
//     return console.log("Yay!");
//   }

//   console.log("Boo!");
// }

// tryIt("123");
