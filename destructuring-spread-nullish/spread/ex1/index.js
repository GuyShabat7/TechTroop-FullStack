let meatArr = ["beef","chicken"];
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"];

const correctMeatArr = [...meatArr, vegetableArr[0]];
const correctvegetableArr = [vegetableArr.slice(1)];

console.log(correctMeatArr);
console.log(correctvegetableArr);
