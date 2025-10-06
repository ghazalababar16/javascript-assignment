// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// answer
// let array =[[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// answer

// const numbers = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// for (let i = 0; i < numbers.length; i++) {

// for(let j = 0; j< numbers[i].length ; j++){

//  document.write(numbers[i][j])
// }
//     document.write("<br/>");
// }



// 3. Write a program to print numeric counting from 1 to 10.
// answer



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i < numbers.length; i++) {

// document.write(numbers[i]);
// document.write("<br/>")
// }






// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// answer

// let tableNumber = +prompt("enter a number you multiplication table")
// let numberLenght = +prompt("enter lenght multiplication table")

// document.write(`<h3>Multiplication Table of ${tableNumber}</h3>`);

// for (let i = 1; i <= tableNumber.length; i++) {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br/>`);
// }



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// answer

// let fruits = ["apple","banana","strawberry","mango","orange"];
// document.write("<h3>Fruits List:</h3>");

// for (let i = 0; i < fruits.length ; i++){
//     document.write(fruits[i] + "<br/>")
// }



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("<h4> Counting :</h4>")

// for (let i = 0; i < counting.length; i++) {

//     document.write(counting[i] + "<br/>")
// }


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 

// let counting = [10, 9, 8, 7, 6, 5, 4, 3, 2,1];

// document.write("<h4>  Reverse Counting :</h4>");
// for(let i = 10; i >= 1 ; i--){
//     document.write([i] + "<br/>")
// }


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// document.write("<h4> Even Numbers :</h4>")

// for(let i = 0; i <= 20 ; i =i +2 ){
// document.write([i]);
// }




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let  a =["cake","apple pie","cookies","chips","patties"]

// let userInput = prompt("welcome to my bakery . what do you want to sir/mam?")

// let itemFound = false;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === userInput) {
//     document.write(`${userInput} is available at index ${i} in our bakery.`);
//     itemFound = true;
//     break;
//   }
// }

// if (!itemFound) {
//   document.write(`We are sorry. ${userInput} is not available in our bakery.`);
// }





// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// let numbers =[24, 53, 78, 91, 12];

// let largest = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// document.write("Array items: " + numbers + "<br>");
// document.write("The largest number is " + largest);




// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// answer

// let numbers = [24,45,67,12,5];

// let smallest = numbers [0]
// for(let i = 1; i < numbers.length; i++){
//     if(numbers[i] < smallest ){
//         smallest =numbers[i]
//     }
// }

//  document.write("Array items: " + numbers + "<br>");
//  document.write("The largest number is " + smallest);







// 10. Write a program to print multiples of 5 ranging 1 to 100?
// answer


// document.write("<h3>Multiples of 5 (1 to 100):</h3>");

// for (let i = 5; i <= 100; i += 5) {
//   document.write(i + "<br/>")
// }