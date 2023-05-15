class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  const person1 = new Person("muthu", 25);
  person1.greet(); // Output: Hello, my name is muthu and I am 25 years old.
  
  const person2 = new Person("Aswin", 30);
  person2.greet(); // Output: Hello, my name is Aswin and I am 30 years old.
    