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
  this.greet = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  };
}

function FairyTale() {
  this.story = () => {
    console.log(`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, id unde mollitia blanditiis illum dolores sed cupiditate enim officiis, harum numquam nihil? Mollitia consequuntur eos nobis, sunt nam ratione modi officia, deleniti quo ipsa fugit facilis commodi ut! Repudiandae, ut.
        `);
  };
}
Person.prototype.story = () => {
  console.log(`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, id unde mollitia blanditiis illum dolores sed cupiditate enim officiis, harum numquam nihil? Mollitia consequuntur eos nobis, sunt nam ratione modi officia, deleniti quo ipsa fugit facilis commodi ut! Repudiandae, ut.
    `);
};

const me = new Person(25);
me.greet();
me.story();
