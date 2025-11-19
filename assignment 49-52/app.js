
// function info() {
//     let userName = document.getElementById('name').value;
//     let fatherName = document.getElementById('fatherName').value;
//     let email = document.getElementById('email').value;
//     let number = document.getElementById('no').value;
//     document.write(`Name :${userName}  <br>`)
//     document.write(`Fathername: ${fatherName}  <br>`)
//     document.write(`Email:   ${email} <br>`)
//     document.write(`Number : ${number} <br>`)
// }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
// answer

// function toggleText(btn) {
//     let fullText = btn.previousElementSibling;
//     let moreText = fullText.previousElementSibling;

//     if (fullText.style.display === "none") {
//         fullText.style.display = "block";
//         moreText.style.display = "none";
//         btn.textContent = "Read less";
//     } else {
//         fullText.style.display = "none";
//         moreText.style.display = "block";
//         btn.textContent = "Read more";
//     }
// }


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
// answer

// let table = document.getElementById("studentTable");
// let editForm = document.getElementById("editForm");

// let currentRow = null;



// document.getElementById("studentForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let grade = document.getElementById("grade").value;

//     let row = table.insertRow();

//     row.insertCell(0).innerText = name;
//     row.insertCell(1).innerText = age;
//     row.insertCell(2).innerText = grade;

//     let actions = row.insertCell(3);
//     actions.innerHTML = `
//         <button onclick="editStudent(this)">Edit</button>
//         <button onclick="deleteStudent(this)">Delete</button>
//     `;

//     document.getElementById("studentForm").reset();
// });




// function deleteStudent(button) {
//     button.parentNode.parentNode.remove();
// }




// function editStudent(button) {
//     currentRow = button.parentNode.parentNode;

//     let name = currentRow.cells[0].innerText;
//     let age = currentRow.cells[1].innerText;
//     let grade = currentRow.cells[2].innerText;

//     document.getElementById("editName").value = name;
//     document.getElementById("editAge").value = age;
//     document.getElementById("editGrade").value = grade;

//     editForm.style.display = "block";
// }

