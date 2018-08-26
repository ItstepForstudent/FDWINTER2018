function example1() {
    var human = {
        name: "Vasia",
        surname: "Pupkin",
        age: 18
    };

    var human2 = human;
    human2.name = "Petia";

    console.log(human)
}

//example1();

function example2() {
    let human = {
        name: "Vasia",
        surname: "Pupkin",
        age: 18
    };

    for (let i in human)
        console.log(i + " => " + human[i]);


    let keys = Object.keys(human);
    console.log(keys);

    keys.filter(k => k !== 'age').forEach(key => console.log(key + " => " + human[key]));

}


function example3() {
    let human = {
        name: "Vasia",
        surname: "Pupkin",
        sayHello: function () {
            console.log("hello " + this.name)
        }
    };


    human.sayHello();
}

//example3();

function example4() {

    function Human(name, sur, age) {
        this.name = name;
        this.surname = sur;
        this.age = age;

        this.showInfo = function () {
            console.log(this.name);
            console.log(this.surname);
            console.log(this.age);
        }
    }


    let human = new Human("Vasiliy", "Pupkin", 18);
    let human2 = new Human("Petr", "Pupkin", 18);

    human.showInfo();
    console.log("----------");
    human2.showInfo();


}

//example4();

//!!!Important "this"
function example5() {
    let o = {
        name: "qwewqr",
        m: () => {
            console.log(this)
        }
    };


    //o.m();

    function f(a) {
        console.log("this is " + this + " " + a)
    }

    f.call("hello", "--");
    f.apply("hello", ["---"]);

    let f2 = f.bind("HELL");

    f2("dd")

}

//example5();


function example6() {

    function Phone(manufacturer, model, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;

        this.asHTML = function () {
            return `
                <div>
                    <div class="model">${this.model}</div>
                    <div class="manuf">${this.manufacturer}</div>
                    <div class="price">${this.price} $</div>
                </div>
            `;
        }
    }

    function PhoneCatalog() {
        this.phones = [];

        this.add = function (phone) {
            this.phones.push(phone);
        };

        this.getAll = function () {
            return this.phones
        };

        this.getByManufacturer = function (manuf) {
            return this.phones.filter(p => p.manufacturer === manuf);
        };

        this.getByPriceFilter = function (min, max) {
            return this.phones
                .filter(p => p.price >= min)
                .filter(p => p.price <= max)
                .sort((a, b) => a.price > b.price ? 1 : a.price === b.price ? 0 : -1);
        }
    }

    function showPhones(phones) {
        console.log("-------------------");
        phones.forEach(p => console.log(p.asHTML()));
    }

    let catalog = new PhoneCatalog();
    catalog.add(new Phone("Nokia", "1100", 500));
    catalog.add(new Phone("Nokia", "3310", 999));
    catalog.add(new Phone("Nokia", "8800", 7000));
    catalog.add(new Phone("Motorolla", "T2288", 220));
    catalog.add(new Phone("Motorolla", "E398", 500));
    catalog.add(new Phone("Siamens", "A65", 400));
    catalog.add(new Phone("Siamens", "C75", 500));

    //showPhones(catalog.getAll())
    //showPhones(catalog.getByManufacturer("Nokia"));
    showPhones(catalog.getByPriceFilter(500, 1000));


}

example6();