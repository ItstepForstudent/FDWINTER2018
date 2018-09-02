// let animal = {
//   weight:100500,
//   move:function () {
//       console.log("animal move");
//   },
//     x:function () {
//         this.weight=200;
//     }
// };
//
// function Dog() {
//     this.name = "bobik";
// }
// Dog.prototype = animal;
//
// let d = new Dog();
// d.move();





function Human(name,surname) {
    this.name = name;
    this.surname = surname;
}

Human.prototype.getFullName = function(){
    return this.name+" "+this.surname;
};

Human.prototype.aboutYourself = function(){
    console.log(this.getFullName());
};

// let h = new Human("Vasia","Pupkin");
// h.aboutYourself();

function Runner(name,surname) {
    Human.call(this,name,surname);
}
Runner.prototype = Object.create(Human.prototype);
Runner.prototype.run = function () {
  console.log(this.getFullName()+" is running");
};


let h = new Runner("Vasia","Pupkin");
h.aboutYourself();
h.run();

