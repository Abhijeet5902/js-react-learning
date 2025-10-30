// Object Practice
const student = {
  name: "Abhijeet",
  age: 23,
  course: "JavaScript",
  displayInfo() {
    console.log(`${this.name} is learning ${this.course}`);
  }
};

student.displayInfo();
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
