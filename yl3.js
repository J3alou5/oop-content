class Student {
 
  static #nextId = 1;


  #name;
  #id;
  #status;

  #isValidStatus(status) {
    const validStatusValues = ["Active", "Expelled", "Finished", "Inactive"];
    return validStatusValues.includes(status);
  }


  constructor(name) {
    this.#name = name;
    this.#id = Student.#nextId++;
    this.#status = "Active";
  }


  getId() {
    return this.#id;
  }


  getName() {
    return this.#name;
  }
  setStatus(status) {
    if (this.#isValidStatus(status)) {
      this.#status = status;
    }
  }

  getStatus() {
    return this.#status;
  }
}

// Example usage
const student1 = new Student('Alice');
console.log(student1.getId()); 
console.log(student1.getName()); 
console.log(student1.getStatus()); 

student1.setStatus('Finished');
console.log(student1.getStatus()); 