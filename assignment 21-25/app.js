//  1-Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name. 
// answer

//   let firstName =prompt("whats your first name?")

// let lastName =prompt("whats your last name?")

// let names = [firstName,lastName];


// let fullName = names.join(" ");
//     document.write(fullName)


// 2-Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// answer

// document.write(" <h4> My favourite phone is :</h4>")

// let userMobile =prompt("whats your favourite mobile phone model?")

// let length = userMobile.length;

// document.write(`My favourite phone is  ${userMobile}`)
// document.write("<br/>")
// document.write(`Length of sting: ${length}`)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// answer

// let word = "pakistan"


// let index = word.indexOf("n");

// document.write(`String: ${ word} <br>`);
// document.write(`Index of 'n':  ${index}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// answer

// let word = "Hello world";
// let index = word.lastIndexOf("l");

// document.write(`string : ${word} <br/>`)
// document.write(`Last index of 'l': ${index}`)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// answer

// let character = "pakistani";
// let index = character.charAt(3);
// document.write(`String : ${character} <br/>`)
// document.write(`Character at index 3 : ${index}`)



// 6. Repeat Q1 using string concat() method.
// answer

// let firstName = prompt("whats your first name?")

// let lastName = prompt("whats your last name?")

// let fullName = (` ${firstName}  ${lastName}`)

// alert(`Hello, ${fullName}   Welcome!`);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// answer

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write(`City : ${city} <br/>`)
// document.write(` After Replacement : ${newCity}`)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// answer

// let massage  = "Ali and Sami are best friends. They play cricket and football together.";

// let newMassage = massage.replace(/and/g ,"&");

// document.write(`NEW MASSAGE : ${massage} <br/>`)
// document.write(`${newMassage}`)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// answer


// let string  = "472"

// document.write(` Value: ${string} <br/>`)
// document.write("Type: "+ typeof(string) )

// document.write("<br/>")

// let  num = 472;

// document.write(` Value: ${string} <br/>`)
// document.write("Type: "+ typeof(num) )


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// answer

// let userInput = prompt("what you want?")
// user = userInput;
// let upperCase = user.toUpperCase();

// document.write(`User input :${userInput} <br/>`)
// document.write(`Upper case :${upperCase} `)



// 11. Write a program that takes user input. Convert and
// show the input in title case.
// answer


// let userInput = prompt('Please enter any word');

// let firstWord = userInput.slice(0, 1);

// firstWord = firstWord.toUpperCase();

// let otherWords = userInput.slice(1);

// otherWords = otherWords.toLowerCase();

// let titleCase = firstWord + otherWords;
// document.write(' User Input :' + userInput + "<br>" + 'Title case :' + titleCase );







// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// let num = 35.36;

// let str = num.toString();

// let dotIndex = str.indexOf(".");

// let result = str.slice(0, dotIndex) + str.slice(dotIndex + 1);

// document.write('Number :' + str + '<br>' + 'Result ' + result);



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@
// answer

// let userInput = Number(prompt("Enter your name?"));
// let charCode;
// for(let i = 0; i < userInput.length; i++){
//     charCode = userInput.charCodeAt(i);
// }
// if(charCode === 33 ||charCode === 44||charCode === 46 ||charCode === 64){
// alert("please enter a valid user name")
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// answer

// let arr = ["cake", "apple pie", "cookies", "chips", "patties"];

// let userInput = prompt("what you want to order ?")
//  userInput =userInput.toLowerCase();
//  let check = false;
// for ( let i = 0; i < arr.length; i++) {
// if(userInput === arr[i] )
//     document.write(arr[i] + " is available at index " + i + " in our bakery");
//        check = true;   }

// if (check === false) {
//     document.write("We are sorry. " + userInput + " is not available in our bakery"); }
 