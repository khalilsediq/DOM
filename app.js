/*
3. When a button is clicked, change the background color of a section with id"container" to light blue.

4. Select a heading (h1) with id "mainTitle" and change its color to red.
5. Get the number from an input with id "num1" and show it inside a paragraph with id
"output".
6. Select a button with class "submit-btn" and log "Button Clicked" to the console
when it's clicked.
7. Get values from two inputs with ids "first" and "second", add them (as numbers),
and show the result in a span with id "sum".
8. Change the text of a paragraph with class "description" to "Updated
successfully".

9. Select a div with id "box" and set its width to 200px and background color to green.
10. Get the email entered in an input with id "email" and print it in the console.
11. Select a paragraph and update its font size to 24px.
12. On button click, get a name from input "fullName" and set the text "Hello,
[name]" inside a div "greeting".
13. Select an image with id "profilePic" and change its src to another image URL.
14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll
need querySelectorAll for multiple)
15. Select a checkbox with id "agree" and check whether it is checked or not, then display
"Agreed" or "Not Agreed" in a paragraph.
16. Get the selected value from a dropdown (select element) with id "options" and display
it in "selectedValue" span.
17. When a button is clicked, show the current date and time inside a paragraph with id
"dateTime".
18. Select a paragraph with id "togglePara" and hide it (set display: none).
19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
else "Not Eligible" in a span.
20. When a button is clicked, clear the value of an input with id "searchBox". 
*/

// const head = document.getElementById("message")
// head.textContent = "Welcome!"
// head.innerHTML = "khalil!"
// head.innerText = "jani!"
// console.dir(head.textContent);
// console.log(head.innerHTML);
// console.log(head.innerText);
///////////////////////////////////////////////////

// 1. Select a paragraph with id "message" and change its text to "Welcome!".
const message = document.querySelector("#message");
message.innerHTML = "Welcome!! DOM";
//////////////Completed

// 2. Get the value from an input with id "nameInput" and display it inside a div with id"result".
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");
const nameInput = document.getElementById("nameInput");

btn.addEventListener("click", () => {
  result.innerHTML = `Hello ${nameInput.value}`;

  nameInput.value = "";
});

//////////////Completed

// When a button is clicked, change the background color of a section with id
// "container" to light blue.
const changeColor = document.querySelector("#changeColor");
const container = document.querySelector("#container");

changeColor.addEventListener("click", () => {
  container.style.backgroundColor = "lightblue";
});
//////////////Completed

// 4. Select a heading (h1) with id "mainTitle" and change its color to red.
const heading = document.querySelector("#mainTitle");

changeColor.addEventListener("click", () => {
  heading.style.color = "red";
});
//////////////Completed

// 5. Get the number from an input with id "num1" and show it inside a paragraph with id"output".
const num1 = document.querySelector("#num1");
const output = document.querySelector("#output");

num1.addEventListener("input", () => {
  output.innerHTML = `Output => ${num1.value}`;
});
//////////////Completed

// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.

const btnClicked = document.querySelector(".submit-btn");

btnClicked.addEventListener("click", () => {
  console.log("Button Clicked");
});

// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const sumResult = document.querySelector("#sumResult");
const sumNum = document.querySelector("#sum-btn");

sumNum.addEventListener("click", () => {
  sumResult.innerHTML = Number(first.value) + Number(second.value);
});

// const body = document.querySelector("body");

// function ColorChange(color) {
//   console.log(color);
//   body.style.backgroundColor = color;
// }

// ColorChange(prompt("Enter Your color to change it"));

// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

const para = document.querySelector(".description");

para.innerHTML = "updated successfully";

// 9. Select a div with id "box" and set its width to 200px and background color to green.
const box = document.querySelector("#boxing");

box.style.backgroundColor = "green";
box.style.width = "200px";


// 10. Get the email entered in an input with id "email" and print it in the console.

const email = document.querySelector("#email")
const print = document.querySelector("#print")

print.addEventListener('click', () =>{
  console.log(email.value);

})
