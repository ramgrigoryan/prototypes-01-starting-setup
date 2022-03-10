// class Person{
//     name = "Vahram";
//     constructor(age){
//         this.age =age;
//     }
//     greet(){
//         console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
//     }
// }
function Person(age) {
  this.name = "Vahram";
  this.age = age;
  this.greet = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
}
const me = new Person(25);
me.greet();
