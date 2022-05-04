let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
for (let i = 0; i < 2; i++) {
  my.pop();
}
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(
  `${my[zero].slice(--zero, --counter)}${my[counter].slice(counter)}`
); // "Elzero"
console.log(
  `${my[counter++][++counter]}${my[++zero + true][++counter].toUpperCase()}`
); // "rO"
console.log(zero, counter);
