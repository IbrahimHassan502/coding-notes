"use strict";
let matchHouses = (houseNum) => (houseNum > 0 ? houseNum * 6 - --houseNum : 0);

console.log(matchHouses(0));
console.log(matchHouses(4));
console.log(matchHouses(87));
