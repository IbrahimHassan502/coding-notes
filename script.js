"use strict";
let divs = document.querySelectorAll(".test div");
divs[0].title = divs[1].title;
divs[0].innerText = divs[1].innerText;
console.log(divs);
