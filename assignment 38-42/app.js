// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// answer


// function power(a, b) {
//   let result = 1;
//   for (let i = 1; i <= b; i++) {
//     result *= a; 
//   }
//   return result;
// }
// let a = Number(prompt('Enter number(a) '));
// let b = Number(prompt('Enter power (b)'));

// let answer = power(a,b);
// document.write(`${a} raised to the power ${b} is ${answer}`);


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...\
// answer

// let userYear = prompt('Enter the year.')
// switch (userYear) {
//     case '2012':
//         alert('leap year');
//         break;

//          case '2016':
//         alert('leap year');
//         break;

//          case '2020':
//         alert('leap year');
//         break;


//     default:
//         alert('Not a leap year')

// }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// answer

// function area(s1, s2, s3) {
//     let S = findS(s1, s2, s3);
//     let area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }
// function findS(a, b, c) {
//     let find = (a + b + c) / 2
//     return find
// }
// let a = Number(prompt('length a'));
// let b =  Number(prompt('length b'));
// let c =  Number(prompt('length c'));
// let result = area(a, b, c)
// document.write(`The area of triangle is ${result}`)


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// answer





// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.







// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// let str =prompt("Enter sentences to delete vowels in them");


// function removeVowels(sentence) {

//     let removed = ''
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'A' || sentence[i] === 'e' || sentence[i] === 'E' || sentence[i] === 'i' || sentence[i] === 'I' || sentence[i] === 'o' || sentence[i] === 'O' || sentence[i] === 'u' || sentence[i] === 'U') {
//             continue
//         }
//         else {
//             removed += sentence[i]
//         }
//     }
//     return removed
// }
// let result = removeVowels(str);

// document.write(`Before : ${str} <br>`);
// document.write(`After  : ${result} <br>`);



















// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence




// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// answer

// let distance = Number(prompt("Enter distance from city A to City B in KM: "));

// meter(distance)
// feet(distance)
// inches(distance)
// centimeters(distance)

// function meter(dis){
//   let meterDistance = dis * 
  
//   document.write("Distance between city A to city B is"  + meterDistance + " meters." + "<br>");

// }
// function feet(dis){
// let feetDistance = dis * 3281
//   document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>")
// }

// function inches(dis){
// let inchDistance = dis * 39370
//   document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>")
// }

// function centimeters(dis){
//   var centimeterDistance = dis * 100000
//   document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>")
// }



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
// answer


// let workingHours = Number(prompt("Enter your working hours: "));
// let overTime, overTimePay;
// let overTimeHourPay = 12;

// if(workingHours > 40){
//   overTime = workingHours - 40;
//   overTimePay = overTime * overTimeHourPay;

//   alert(`Your overtime pay cost is: ${overTimePay} rupees`);
// }

// else{
//   alert("You need to work more to get overtime")
// }


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the withdrawer.
// answer

// let amount = Number(prompt("Enter amount of widraw"))
// let hundred = parseInt(amount / 100)
// let fifty = parseInt((amount % 100) / 50)
// let  ten = parseInt((((amount % 100) % 50) / 10))

// document.write(`Entered amount: ${amount} <br>`);
// document.write(`You will have  ${hundred}   hundred notes  ${fifty }  fifty notes ${ten}  ten notes.`)

