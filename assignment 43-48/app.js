
// 1. Show an alert box on click on a link.
// answer


// document.getElementById("onclick").addEventListener("click", function(){
//     alert("Link par click kiya gaya!");
// });

//  2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// answer


    // let mobiles = document.querySelectorAll(".mobile");

    // mobiles.forEach(function(img){
    //     img.addEventListener("click", function(){
    //         alert(img.alt + " image clicked!");
    //     });
    // });


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// answer

// function deleteRow(button) {
        
//         let row = button.parentNode.parentNode;
//         row.remove();
//     }



// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


//   function changePic() {
//         document.getElementsByClassName("img").src =
//         "images/360_F_611246666_UuaYs1qQuJllipq03mHE8o3Szd8D8uCV.jpg";
//     }

//     function setOriginal() {
//         document.getElementsByClassName("img").src =
//         "images/1000_F_1613886709_RwRVIeywd2h3HjssYqvsMbku6bKvQJUP.jpg";
//     }




//     5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
// answer

// function increase() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     console.log(value)
//     value = value + 1
//     document.getElementById("counter").innerHTML = value
// }
//  function decrease() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     value = value - 1
//     document.getElementById("counter").innerHTML = value
// }