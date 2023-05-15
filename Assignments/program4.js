function greetPerson(person) {
    const { firstName, lastName } = person;
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  const person = {
    firstName: "Muthu",
    lastName: "Ganesh"
  };
  
  greetPerson(person); // Output: Hello, Muthu Ganesh!
    