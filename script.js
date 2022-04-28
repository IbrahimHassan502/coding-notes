let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    break;
  case 1:
  case 2:
    money = 3000;
    break;
  case 3:
    money = 2000;
    break;
  case 4:
    money = 1000;
    break;
  case 5:
    money = 0;
    break;
}
console.log(`My Money is ${money}`);
