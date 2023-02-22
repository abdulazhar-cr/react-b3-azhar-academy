const numbers = [2, 4, 5, 7];
// Rest Operator (...)
const [first, ...restItems] = numbers;

console.log("First:", first);
console.log("newArray:", restItems);
const obj1 = {
  temp1: "34",
  fName: "Azhar",
  lName: "Shaikh",
  height: 5.9,
  temp2: "546",
};

const { temp1, temp2, ...person } = obj1;

console.log(person);
// Spread Operator----   creates a new copy
const obj2 = { ...obj1 };
obj2.color = "Fair";

console.log("obj2", obj2);
console.log("Obj1", obj1);

const newArray = [...numbers];
newArray.push(8);
console.log("newArray", newArray);
