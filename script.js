let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  console.log(index);
  if (
    friends[index].toString().startsWith("A") ||
    typeof friends[index] === "number"
  ) {
    index++;
    continue;
  }
  console.log(friends[index]);
  index++;
}
