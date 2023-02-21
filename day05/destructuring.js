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

const numbers = [2, 4, 5, 7];
console.log(numbers[2]);
const [a, , , b] = numbers;
console.log(a, b);

function sum({ a, b }) {
  return a + b;
}

// const z=9;
// const y=98;

const sumValue = sum({
  a: 5,
  b: 6,
});
