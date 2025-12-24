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
//////////////Completed

// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const sumResult = document.querySelector("#sumResult");
const sumNum = document.querySelector("#sum-btn");

sumNum.addEventListener("click", () => {
  sumResult.innerHTML = Number(first.value) + Number(second.value);
});
//////////////Completed

// const body = document.querySelector("body");

// function ColorChange(color) {
//   console.log(color);
//   body.style.backgroundColor = color;
// }

// ColorChange(prompt("Enter Your color to change it"));
//////////////Completed

// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

const para = document.querySelector(".description");

para.innerHTML = "updated successfully";
//////////////Completed

// 9. Select a div with id "box" and set its width to 200px and background color to green.
const box = document.querySelector("#boxing");

box.style.backgroundColor = "green";
box.style.width = "200px";
box.style.color = "wheat";
//////////////Completed

// 10. Get the email entered in an input with id "email" and print it in the console.

const email = document.querySelector("#email");
const print = document.querySelector("#print");

print.addEventListener("click", () => {
  console.log(email.value);
  email.value = "";
});
//////////////Completed

// 11. Select a paragraph and update its font size to 24px.

const para3 = document.querySelector("p");
para3.style.fontSize = "24px";
//////////////Completed

// 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting".
const fullName = document.querySelector("#fullName");
const greeting = document.querySelector("#greeting");
const greetRestult = document.querySelector("#greetRestult");

greetRestult.addEventListener("click", () => {
  greeting.innerHTML = `Hello ${fullName.value}`;
  fullName.value = "";
});

// function greetResult() {
//   greeting.innerHTML = `Hello ${fullName.value}`;

//   fullName.value = ""
// }
//////////////Completed

// 13. Select an image with id "profilePic" and change its src to another image URL
const img = document.querySelector("#profilePic");
const changeImg = document.querySelector("#changeImg");
changeImg.addEventListener("click", () => {
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFafMUDS6sdS5uTCxtarRM78d1PExPz5F-Q91pzWAc1Gld9NA2xMfDWo&s";
});
//////////////Completed

// 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll need querySelectorAll for multiple)
const high1 = document.querySelectorAll(".highlight");
console.log(high1);

for (let i = 0; i < high1.length; i++) {
  high1[i].style.backgroundColor = "lightblue";
  high1[i].style.color = "orange";
  high1[i].style.width = "40%";
  high1[i].style.borderRadius = "30px";
  high1[i].style.display = "flex";
  high1[i].style.justifyContent = "center";
  high1[i].style.margin = "0 auto";
}
//////////////Completed

// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display
// "Agreed" or "Not Agreed" in a paragraph.
const agree = document.querySelector("#agree");
const para1 = document.querySelector("#para1");
agree.addEventListener("change", () => {
  if (agree.checked !== true) {
    para1.innerHTML = " Not Agreed";
  } else {
    para1.innerHTML = "Agreed";
  }
});
//////////////Completed

//16 Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.

const options = document.querySelector("#options");
const valueResult = document.querySelector("#selectedValue");

valueResult.innerHTML = options.value;

// options.addEventListener("change", () =>{
//   valueResult.innerHTML = options.value;
// })
//////////////Completed

//   17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".

const dateBtn = document.querySelector("#btn-date");
const dateTime = document.querySelector("#dateTime");

dateBtn.addEventListener("click", () => {
  let now = new Date();
  const date = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`;
  console.log(date);

  dateTime.innerHTML = date;
});

// console.log(dateBtn);
//////////////Completed

// 18. Select a paragraph with id "togglePara" and hide it (set display: none).

const hide = document.querySelector("#togglePara");
hide.style.display = "none";
//////////////Completed

// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.

const age = document.querySelector("#age");
const display = document.querySelector("#display");

age.addEventListener("change", () => {
  if (Number(age.value) >= 18) {
    display.innerHTML = "Eligible";
  } else {
    display.innerHTML = "Not Eligible";
  }
});
//////////////Completed

// 20. When a button is clicked, clear the value of an input with id "searchBox".
const searchBox = document.querySelector("#searchBox");
const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", () => {
  searchBox.value = "";
});

//////////////Completed

