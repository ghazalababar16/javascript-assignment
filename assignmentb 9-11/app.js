// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt(`where do you live`)
// if (city = "karachi") {
//     alert("welcome the city of lights")
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let userGender = prompt("what is you gender")
// if (userGender === "male") { alert("Good moarning Sir") }
// else if (userGender == "female")
//     alert("Good morning Ma'am")

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

//     let signalColor = prompt("color's of road trafic signal?");

// if (signalColor === "red") {
//     alert("Must stop")
// }
// else if (signalColor == "yellow") {
//     alert("Ready to move")
// }
// else if (signalColor == "green") {
//     alert("move now")
// }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”



// let carFuel = prompt("remaining fuel in car");
// if (carFuel >= 0.25 ) {
//     alert("please refill the fuel in your car ")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a
// let a = 4;
// if (++a == 5) {
//     alert("given condition for a variable is true")
// } true


// b.

// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true")
// }
//  false


// c.
//  let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } false
// if (c === 13){
// alert("condition 2 is true");
// } true
// if (++c < 14){
// alert("condition 3 is true");
// } false
// if(c === 14){
// alert("condition 4 is true");
// } true

// d.
//  let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. 
// if("car" < "cat"){
// alert("car is smaller than cat");
// } true

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// answer
//  document.write("<h1>Marks Sheet</h1>")
//  let totalMarks = 300;
//  let  marksObtained = 219;
// //  percentage = marksObtained*100/totalMarks
//  document.write(`<br/>`)
//   document.write("<h3> Total marks : 300</h3>")
//  document.write("<h3> Marks  obtained: 219</h3>")
//  document.write("<h3>Percentage : 73%</h3>")
//    document.write(`<h3>Grade : B</h3>`)
//    document.write(`<h3>Remarks : You need to improve</h3>`)


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// answer

// 

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// answer
// let number = +prompt("Enter a number to check divisibility by 3:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// answer

//  let number1 = 6  +prompt("checks whether the given input")
//  let number2 = 21;
//  if ( number1 == 6){
//     alert("even number")
//  }
//  else { (number2 !== 21)
//     alert("odd number")
//  }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// answer

// let temp1 = 40 + prompt("write temperature")
// let temp2 = 30;
// let temp3 = 20;
// let temp4 = 10;

// if (temp1 >40) {
//     alert("It is too hot outside")
// }
// else if (temp2 >30) {
//     alert("the weather today is normal")
// }
// else if (temp3 > 20) {
//     alert("Today’s Weather is cool.");
// } 
// else if (temp4 > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } 
// else {
//     alert("It is very cold outside.");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// answer

// let firstNum = +prompt("Enter first number:");
// let secondNum = +prompt("Enter second number:");
// let operation = prompt("Enter operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = firstNum + secondNum;
// } 
// else if (operation === "-") {
//     result = firstNum - secondNum;
// } 
// else if (operation === "*") {
//     result = firstNum * secondNum;
// } 
// else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNum / secondNum;
//     } else {
//         result = "Error! Division by zero.";
//     }
// } 
// else if (operation === "%") {
//     if (secondNum!== 0) {
//         result = firstNum % secondNum;
//     } else {
//         result = "Error! Modulo by zero.";
//     }
// } 
// else {
//     result = "Invalid operation!";
// }

// // Show result to user
// alert("Result: " + result);