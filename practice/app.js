
// Today task

let today = new Date()
let ramadanDate = new Date("17 feb 2026")

let diff = ramadanDate - today

let sec = Math.floor(diff / 1000);
let min = Math.floor(sec / 60);
let hours = Math.floor(min / 60);
let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
let week = Math.floor(diffDays / 7)



document.write(`<h1> Remaining weeks in Ramadan : ${week}  <br/>
   Remaining days in Ramadan : ${diffDays}  <br/>
   Remaining hours in Ramadan : ${hours}  <br/>
   Remaining minutes in Ramadan : ${min}  <br/>
   Remaining seconds in Ramadan : ${sec}  <br/>
   </h1>`)

