class Person{
	constructor(firstname,lastname,age){
		this.firstname = "";
		this.lastname = "";
		this.age = 0;
	}
}

class Student {
	constructor(firstname,lastname,age){
		this.firstname = firstname
		this.lastname = lastname
		this.age = age
	}
}

const person1 = new Person();
person1.firstname = "John";
person1.lastname = "Smith";
person1.age = 22;

const person2 = new Person();
person2.firstname = "Peeter";
person2.lastname = "Kask";
person2.age = 53;

const person3 = new Person();
person3.firstname = "Laura";
person3.lastname = "Tamm";
person3.age = 71;

const student1 = new Student('Alice','Holand', 25);
const student2 = new Student('Carlos','Evans', 19);
const student3 = new Student('Tauri','Lepp', 15);

console.log(person1)
console.log(person2)
console.log(person3)

console.log(student1)
console.log(student2)
console.log(student3)