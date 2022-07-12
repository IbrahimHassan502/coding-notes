"use strict";
let myInput = document.forms[0][0];
let res = document.querySelector(".result");
function changeCurrency() {
  res.innerText = `{${myInput.value} USD Dollar = {${(
    myInput.value * 5.16
  ).toFixed(2)}} Egyptian Pound`;
}
myInput.onchange = changeCurrency();
