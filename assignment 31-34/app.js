// 1-Write a program that displays current date and time in
// your browser.
// answer

// let todayDate = new Date();
// document.write(todayDate);


// 2-Write a program that alerts the current month in words.
// For example December.
// answer

// let date = new Date();

// let month = date.getMonth();
// monthList = [ "January", "Febmliruary", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December" ];
// // 
// document.write(`<h4>Current month:</h4> ${monthList[month]}`);

// 3-Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// answer

// let days = new Date();

// let todayIndex = days.getDay();

// daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// let todayName = daysList[todayIndex]

// let shortDay = todayName.slice(0, 3);


// document.write(`Today is ${shortDay}`);


// 4-Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// answer

// let date = new Date();

// let day = date.getDay();

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// let today = days[day]; 

// if(day === 'saturday' ||day === 'sunday'){
//     alert(`It is fun day`)

// }else{
//      alert(`Its not fun day`)}

//5- Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// answer

// let daysnow = new Date();
// let date =daysnow.getDate();

// if(date<16){
//     document.write("First fifteen days of the month")
// }

// else{
//     document.write("Last days of the month")
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// answer


// let date = new Date();

// let millisec = date.getTime();

// document.write('Current Date :' + date + '<br>')
// document.write('ELasped milliseconds since January 1,1970 :' + millisec + '<br>')
// document.write("Elapsed minutes since January 1, 1970: " + (millisec / (999 * 60)) + "<br>");


//7- Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let time = new Date();
//  let hours = time.getHours();

//  if(hours<12){
//     alert("Its AM")
//  }
//  else{
//     alert("Its PM")
//  }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// answer

// let todayDate = new Date();
// let laterDate  = new Date(`31 dec 2020`);

// document.write(`later date: ${laterDate}`)


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// answer


// let lastRamadan = new Date('1 march 2024');

// let dateToday = new Date();

// let diffMilliSec = dateToday - lastRamadan
// let days = Math.floor(diffMilliSec / (1000 * 60 * 60 * 24));

// document.write(days + ' days have passed since Ist Ramadan,2024')



//10- Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// answer


// let dateNow = new Date();
// let todayMilli = dateNow.getTime();
// let year2015 = new Date('1 Jan,2015');
// let milli2015 = year2015.getTime();
// let  diffMilliSec=todayMilli-year2015
// let seconds = Math.floor(diffMilliSec / (1000));

// document.write(`On reference date :${dateNow} ${seconds} seconds had passed since beginning of 2015`)


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// answer

// let today = new Date();
// let hours = today.getHours();
// hours = hours - 1;
// document.write(`current date:  ${today} <br/>`);
// today.setHours(hours);
// document.write(`1 hour ago, it was  ${today}    `)


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// 

// let today= new Date();

// let backYears = today.getFullYear();

// backYears = backYears -100;

// alert(`Current date : ${today}`)
//  today.setFullYear(backYears);
//  alert(`100 years back, it was`

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// // answer

// let age = Number(prompt(`Enter your age.`));
// let today = new Date();

// yearNow = today.getFullYear();
// birthYear = yearNow - age;
// document.write(`Your age is : ${age } <br/> Your birth year is ${birthYear}`)


// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// answer

let customerName = "Ghazala Babar";
let today = new Date();
let month = today.getMonth();

monthList = ["January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let noUnits = 410;
let chargePerunit = 16;
let netAmount = noUnits * chargePerunit;
let lastCharge = 350;
let afterDueDate = lastCharge;
document.write(`<h1> K-Electric Bill </h1>`)
 document.write(`Customer Name :${customerName} <br>`);
 document.write(`Month : ${monthList[month]} <br>`);
document.write(`Number of units :${noUnits}<br>`);
document.write(`Charges per unit :${chargePerunit}<br>`);
document.write('<br>')
document.write(`Net Amount Payabale (Within Due Date) :${netAmount} <br>`);
 document.write(`Late payment surcharge : {$lastCharge}<br>`);
 document.write(`Gross payment Payable(after Due Date) : ${afterDueDat} <br>`);