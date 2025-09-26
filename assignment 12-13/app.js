// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// let character = prompt("The given input is a number, uppercase letter or lower case letter")
// let value = character 
// if(value >= 48 && value <= 57){
//     alert(character + " is number")
// }

// else if (value >= 65 && value <= 90) {
//      alert(character + " is Uppercase Letter");
//     }
//  else if (value >= 97 && value <= 122) {
//     alert(character + " is Lowercase Letter");
// }

// else {
//     alert("Given input is not a number or letter");
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// answer

// let num1 = parseInt (prompt("Enter the first integer:"));
// let num2 = parseInt (prompt("Enter the second integer:"));
// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } else {
//     alert("Both numbers are equal: " + num1);
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// let number = prompt("Enter a  number")
// if (number > 0) {
//     alert(number + "is a positive number ")
// }
// else if(number < 0){
//     (number + " is a Negative number.");}

// else {
//     alert("The number is Zero.");
// }

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// let char = prompt("enter character to check vowel or not")
//  char = char.toLowerCase();

// if(char ==='a'||char ==='e'||char ==='i'||char ==='o'||char ==='u'){
//     alert(char+ ' is vowel')
//  }
//  else{
//      alert(char+' is not vowel')
// }



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// answer

// let correctPassword = 7745
//  let userPassword = prompt("store the correct password");



// if (userPassword) {
//     alert("please enter your password")
// }
// else if (correctPassword === userPassword) {
//     alert("correct! the password you entered matches the orignail password")
// }
// else {
//     alert("Incorrect password")
// }



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// answer


// let greeting = prompt("greeting")
// let hour = 13;
// if (hour < 18) { alert("Good day") }
// else { alert("Good evening") }


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// let time = +prompt("please enter time  in 24 hours clock format like: 1900 = 7pm.")

// if (time >=1000 && time < 1200) {
//     alert("Good morning ")
// }
// else if (time >= 1200 && time < 1700) {
//     alert('Good Afternoon')
// }
// else if (time >= 1700 && time < 2100) {
//     alert('Good Evening')
// }
// else if (time >= 2100 && time <= 2359) {
//     alert('Good Night')
// }
// else {
//     alert('Invalid Input')
// }
