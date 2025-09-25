// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// answer


// let a = 10;
// document.write(`Result:`)
// document.write(`<br/>`)
// document.write(`The value of a is: ${a}`)
// document.write(`<br/>`)
// document.write(`<br/>`)
// document.write(`The value of ++a is :${++a}`)
// document.write(`<br/>`)
// document.write(`Now the value of a is: ${a}`)
// document.write(`<br/>`)
// document.write(`<br/>`)
// document.write(`The value of ++a is :${a}`)
// document.write(`<br/>`)
// document.write(`Now the value of a is: ${++a}`)
// document.write(`<br/>`)
// document.write(`<br/>`)
// document.write(`The value of --a is : ${--a}`)
// document.write(`<br/>`)
// document.write(`Now the value of a is: ${a}`)
// document.write(`<br/>`)
// document.write(`<br/>`)
// document.write(`The value of --a is : ${a}`)
// document.write(`<br/>`)
// document.write(`Now the value of a is: ${--a}`)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// answer

// let a = 2;
// let b = 1;
// document.write(`a is ${a}`)
// document.write(`<br/>`)
// document.write(`b is ${b}`)
// document.write(`<br/>`)
// result = --a - --b + ++b + b--;
//           1 - 0 + 1 + 1
//  let result = 3;
// document.write(`result is ${result}`

// 3. Write a program that takes input a name from user &
// greet the user.
// answer

// let user = prompt(`write your name`);
// if(user = "ghazala")
//     {alert("welcome")

// }



// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let number = +prompt("Enter a number to show its multiplication table:", "5");
// if (number === 0 || number 0"") {
//       number = 5;
//     } else {
//       number = Number(number);
//     }

//     document.write("<h3>Multiplication Table of " + number + "</h3>");





// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.



// document.write('<h3>' + 'Marksheet' + '</h3>')

// let sub1 = + prompt(`Enter first subject name`);
// let sub2 =  + prompt('Enter second subject name');
// let sub3 = + prompt('Enter third subject name');

// let subMarks1 = 100;
// let subMarks2 = 100;
// let subMarks3 = 100;



// let obtaineMarks1 = prompt('whats your  marks in first subject')
// let obtainedMarks2 = prompt('whats your  marks in second subject ')
// let obtainedMarks3 = prompt('whats your  marks in third subject ')


// let sub1percent =(`obtaineMarks1 /subMarks1`)*100
// let sub2Percent =(`obtaineMarks2 /subMarks2`)*100;
// let sub3Percent =(`obtaineMarks3 /subMarks3`)*100;

// let subject = "Subject";
// let Total = "Total Marks";
// let ObtainedMarks = "Obtained Marks";
// let Percentage = "Percentage";

// document.write("<table border='1'>");

// document.write(`<tr>
//       <th>${subject}</th>
//       <th>${Total}</th>
//       <th>${ObtainedMarks}</th>
//       <th>${Percentage}</th>
//        </tr>`);

//         document.write(`
//     <tr>
//       <td>${sub1}</td>
//       <td>${subMarks1}</td>
//       <td>${obtaineMarks1 }</td>
//       <td>${sub1Percent}%</td>
//     </tr>
//   `);
//   document.write(`
//     <tr>
//       <td>${sub2}</td>
//       <td>${subMarks2}</td>
//       <td>${obtainedMarks2}</td>
//       <td>${sub2Percent}%</td>
//     </tr>
//   `);
//    document.write(`
//     <tr>
//       <td>${sub3}</td>
//       <td>${subMarks3}</td>
//       <td>${obtainedMarks3}</td>
//       <td>${sub3Percent}%</td>
//     </tr>
//   `);

// document.write("</table>")



