{
  {
    {
      {
      }
    }
  }
}

function sum(a, b) {
  //fuction scope
  var result = a + b;
}

sum(4, 5);
//this will throw reference error
// console.log(result);

{
  // Block Scope
}
if (true) {
  // Block Scope
}
for (var i = 1; i <= 10; i++) {
  var z = 9;
  // Block Scope
}
console.log("VALUE OF I", i);
console.log("z::", z);
function doSomething() {
  // Function Scope
  var k = 9;
}

doSomething();
// console.log("k", k);
const person = {
  fname: "Azhar",
};
person.fname = "John";
console.log(person);
