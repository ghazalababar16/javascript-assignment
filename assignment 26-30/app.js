

// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// answer

// let num = Number(prompt("Enter number: "));
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);
// document.write('Number :' + num + '<br>')
// document.write('Round off value :' + round + '<br>')
// document.write('Floor value :' + floor + '<br>')
// document.write('ceil value :' + ceil + '<br>')


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// answer


// let num = Number(prompt("enter number"));
// let round = Math.round(-num);
// let floor = Math.floor(-num);
// let ceil = Math.ceil(-num);
// document.write(`Number : ${num} <br/>`)
// document.write(`Round off value : ${round} <br/>`)
// document.write(` Floor value: ${floor} <br/>`)
// document.write(`ceil value: ${ceil} <br/>`)



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// answer

// let num =Number(prompt(`enter number`));

// let abs = Math.abs(num);

// console.log(abs);

// document.write(`The absolute value ${num}  is  ${abs} <br/>`);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// answer



// let randomNum = Math.random()*6;

// let floor = Math.floor(randomNum)

// document.write(` ye number aya ha ${floor}`)


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// 

// let coinValue = Math.random() * 3;
// let floor = Math.floor(coinValue);

// if (coinValue < 2) {
//     document.write(` ${floor} <br/> random coin value : Tails `)
// }
// else {
//     document.write(`${floor} <br/>  random coin value : Heads`)
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// answer

// let randomNum = Math.random()*100
// let ceil = Math.ceil(randomNum);
// document.write(`Random number between 1 to 100 ${ceil}`)





// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let weight =Number(prompt(`enter your weight in killograms`));

//  let parse = parseFloat(weight);

// document.write(`The weight of user is ${parse} kilograms`)




// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// let randomNum = Math.ceil(Math.random() * 10);

// document.write(randomNum)
// let userInput = Number(prompt('Enter a number in between 1 and 10'));
// if (userInput === randomNum) {
//     alert('Congratulations  you entered the same number')
// }
// else {
//     alert('Try Again')
// }
