function multiply(...nums) {
  let resault = 1;
  for (let i = 0; i < nums.length; i++) {
    resault *= typeof nums[i] === "number" ? parseInt(nums[i]) : 1;
  }
  return resault;
}

console.log(multiply(100.5, 10, "B"));
