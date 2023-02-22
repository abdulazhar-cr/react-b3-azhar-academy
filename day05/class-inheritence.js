class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}
const o1 = new Person("Azhar");
const o2 = new Student("Musharuf", "BCA Final Year");
const o3 = new Student("XYZ", "Grade 10");
o3.greet = () => {
  console.log("This is special student");
};
o1.greet();
o2.greet();
o3.greet();
