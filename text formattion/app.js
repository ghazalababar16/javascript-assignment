



function upperCase() {
    let userText = document.getElementById("userText").Value.toUpperCase();
    let result = document.getElementById("output")
    result.innerHTML = `<strong> ${userText}</strong>`
}



function lowerCase() {
    let userText = document.getElementById("userText").Value.toLowerCase();
    let result = document.getElementById("output")
    result.innerHTML = `<strong> ${userText}</strong>`
}

function capiatlize() {

    let userText = document.getElementById("userText").Value;

    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    let final = resultArr.join(" ");

    let result = document.getElementById("output");

    result.innerHTML = `<strong>${final}</strong>`;
}

function bold() {
    let userText = document.getElementById("userText").value;
    let result = document.getElementById("output");

    result.innerHTML = `<strong>${userText}</strong>`;
}




function italic() {
    let userText = document.getElementById("userText").value;
    let result = document.getElementById("output");

    result.innerHTML = `<em>${userText}</em>`;
}