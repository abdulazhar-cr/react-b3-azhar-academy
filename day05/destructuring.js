// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const obj = {
  fName: "Azhar",
  lName: "Shaikh",
  fullName: "",
  color: "",
  height: "",
};

// const fName = obj.fName;
// const lName = obj.lName;

const { fName, lName } = obj;
const { PI, E, SQRT2 } = Math;

function circleArea({ radius, draw: { diameter } }) {
  const { PI } = Math;

  return PI * radius * radius;
}

const x = {
  radius: 4,
  title: "C1",
  width: "2px",
  draw: { diameter: 8 },
};
console.log(circleArea(x));
console.log(PI);
console.log(E);
console.log(SQRT2);
console.log(fName);
console.log(lName);
function sum({ a, b }) {
  return a + b;
}

// const z=9;
// const y=98;

const sumValue = sum({
  a: 5,
  b: 6,
});

const numbers = [2, 4, 5, 7];
console.log(numbers[2]);
const [a, b, c, d] = numbers;
console.log(a, b);

// Rest Operator and Spread Operator----(...)
const [first, ...newArray] = numbers;

console.log("First:", first);
console.log("newArray:", newArray);
const obj1 = {
  temp1: "34",
  fName: "Azhar",
  lName: "Shaikh",
  height: 5.9,
  temp2: "546",
};

const { temp1, temp2, ...person } = obj1;

console.log(person);

const obj2 = obj1;
obj2.color = "Fair";

console.log(obj2, obj1);
