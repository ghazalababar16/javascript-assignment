
// 1. Write a function that displays current date & time in your
// browser.

// let  day = new Date();
// document.write(day);

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// answer

// let  firstName = prompt(`enter your first name`);
// let LastName = prompt(`enter your lastt name`);
//  document.write(`Hello! ${firstName} ${LastName}`);


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// answer

// let num1 = Number(prompt(`enter first number.`));
// let num2 = Number(prompt(`enter second number.`));
// let result = num1 + num2
//  document.write(`The sum of ${num1} and ${num2} is : ${result}` )

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// answer

// function calculator(num1, num2, operator) {
//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     }
//     else if (operator === '-') {
//         result = num1 - num2;
//     }
//     else if (operator === '*') {
//         result = num1 * num2;
//     }
//     else if (operator === '/') {
//         result = num1 / num2;
//     }
//     else if (operator === '%') {
//         result = num1 % num2;
//     }
//     else {
//         result = "Invalid operator!";
//     }

//     return result;
// }
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let operator = prompt("Enter operator (+, -, *, /, %):");


// let answer = calculator(num1, num2, operator);
// document.write(`<h5>Result: ${num1} ${operator} ${num2} = ${answer}</h5>`);


// 5. Write a function that squares its argument.
// answer

// let number = +prompt('Enter number to be square')
// square (number);
// function square(num) {
//     let square = num ** 2;
//    document.write(`its square argument ${square}`)
// }


// 6. Write a function that computes factorial of a number.
// answer
// function factorial() {
//     let num = Number(prompt('enter number'));
//     fact = 1;
//     if (num === 1 || num === 0) {
//     }
//     else {
//         for (let i = num; i >= 1; i--) {
//             fact = fact * i
//         }
//     }
//     document.write(fact)
// }
// factorial()




// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// answer


// function counting(start, end) {
//     document.write(`<h5>Counting</h5>`)
//     for (let i = startNum; i <= endNum; i++) {
//         document.write(i + '<br>');
//     }
// }
// let startNum = Number(prompt(`enter start num`));
// let endNum = Number(prompt(`enter end num`));
// counting(startNum, endNum);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// answer

// function calculateHypotenuse(base, perpendicular) {
// function square(num) {
//         return num * num;
//     }


//     let hypotenuse = Math.sqrt(square(base) + square(perpendicular));

//     return hypotenuse;
// }


// let base = Number(prompt("Enter base of triangle:"));
// let perpendicular = Number(prompt("Enter perpendicular of triangle:"));

// let result = calculateHypotenuse(base, perpendicular);
// document.write("The hypotenuse of the triangle is: " + result);



// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables
// answer

// function areaCalculate(width, height) {
//     let A = width * height;
//     return A;
// }
// let width = Number(prompt('Enter width of triangle'));
// let height = Number(prompt('Enter height of triangle'));
// let result = areaCalculate(width, height);
// document.write(`the result is: ${result}`)



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// // answer

// function palindrome(string) {
//     let check = " ";
//     for (let i = string.length - 1; i >= 0; i--) {
//         check += string[i]
//     }
//     if (string === check) {
//         alert( ` ${string}is a plindrome word`)
//     }

//     else {
//         alert(` ${string}is  not a plindrome word`)

//     }
// }
// let str = prompt('Write any word')
// palindrome(str);


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'










// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'









// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'















// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2