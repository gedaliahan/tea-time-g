// Define a class named "Person"
class Person {
    // Constructor method to initialize the object's properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information about the person
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Create an instance of the Person class
  const john = new Person('John Doe', 25);
  
  // Call the displayInfo method to show information about the person
  john.displayInfo();
  