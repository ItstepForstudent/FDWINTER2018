class Human {
    constructor(name,surname){
        this._name = name;
        this._surname = surname;
    }
    getFullName(){
        return this._name+" "+this._surname;
    }
    aboutYourself(){
        console.log(this.getFullName());
    }

    get name() {
        return this._name;
    }

    get fullName(){
        return this._name+" "+this._surname;
    }

    set fullName(value){
        console.log(value);
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }
}
// let h = new Human("Vasia","Pupkin");
// h.aboutYourself();

class Runner extends Human{
    constructor(name,surname){
        super(name,surname);
    }
    getFullName(){
        return "Runner "+super.getFullName();
    }
    run(){
        console.log(this.getFullName()+" is running");
    }
}

let r = new Runner("Vasia","Pupkin");
r.aboutYourself();
r.run();
console.log(r.fullName);
r.fullName = "sdgsdfh";

// Object.defineProperty(r,"name",{
//     get:function () {
//
//     },
//     set:function (value) {
//
//     }
// });