// 1. Declare an empty array using JS literal notation to store
// student names in future.
// answer

// let studentName = [ ];

// studentName.push ("ali");
// studentName.push ("sara");
// studentName.push ("zain");

// document.write(studentName);



// 2. Declare an empty array using JS object notation to store
// student names in future.
// answer

//  let studentName = new Array();

//  studentName.push("sara");
//   studentName.push("hussan");
//    studentName.push("waniya");

//    document.write(studentName)



// 3. Declare and initialize a strings array.
// answer

// let fruits = ["apple","mango","banana","kiwi","pech"]
 
// document.write(fruits)

// for(let i = 0; i <fruits.length; i++ ){
//     document.write(fruits[i] + "<br/>")
// }




// 4. Declare and initialize a numbers array.
// answer
//  let numbers =[23,45,13,76,89,27]

// // document.write(numbers)

// for(let i = 0 ; i <numbers.length; i++ ){
//     document.write(numbers[i] + "<br/>")
// }



// 5. Declare and initialize a boolean array.
// answer
 let flags =[true,false,true,true,false];
 document.write(flags + "<br/> ")
 document.write("<br/>")

 for(let i = 0; i<flags.length; i++){
    document.write(flags[i] +"<br/>")
 }


// 6. Declare and initialize a mixed array.
// answer





// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// answer











// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// // answer

// let students =["ali","hussan","zain"]

// let scores =[ 320,230,480]

// let totalMarks = [500]

// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write("Student: " + students[i] + "<br>");
//     document.write("Score: " + scores[i] + " out of " + totalMarks + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");
// }











// 9. Initialize an array with color names. Display the array
// elements in your browser.
// answer

// let colors = ["red","green"," blue","orange","pink"]

// document.write("<h3> Color list</h3>")
// for( let i = 0; i < colors.length; i++){
//     document.write(colors[i] +"<br>")
// }

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// document.write("<h3>Original Colors:</h3>");
// document.write(colors.join(", ") + "<br><br>");


// let newColor = prompt("what color you want?")

// colors.unshift( newColor);

//  document.write("<h3>Updated Colors:</h3>");
// document.write(colors.join(", "));


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.





// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// // answer










// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.



















//  12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// answer

// let array = ["This", "is", "my", "cat"];
// document.write(["This", "is", "my", "cat"])