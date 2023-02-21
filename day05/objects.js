const mystery = "answer";
const institute = "Azhar Academy";
const a = 7;
const obj = {
  a,
  b: 4,
  foo() {},
  xyz: () => {},
  ["first name"]: "Azhar",
  ["lname"]: "Shaikh",
  [mystery]: 65,
  institute,
};
console.log(obj["first name"]);
console.log(obj.mystery);
console.log(obj.answer);
console.log(obj.lname);
console.log(obj.a);
console.log(obj.institute);
