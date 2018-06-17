//example 01
// var firstNum = parseInt(prompt("Введите первое число"));
// var secondNum = prompt("Введите второе число");
// secondNum = parseInt(secondNum);
//
// var summ = firstNum+secondNum;
// alert("Summ is: "+summ);



//example 02
// var CURRENT_YEAR = 2018;//it is constant
// var _name = prompt("Enter your name");
// var birth_year = parseInt(prompt("Enter your birth year"));
//
// var age = CURRENT_YEAR - birth_year;
// alert("Hello, "+_name+", your are "+age);



//example 03
// var roomWidth = parseFloat(prompt("Enter room width"));
// var roomLength = parseFloat(prompt("Enter room length"));
// var roomHeight = parseFloat(prompt("Enter room height"));
// var roomPerim = 2*(roomWidth+roomLength);
// var roomBaseSquare = roomPerim*roomHeight;
//
// var doorHeight = parseFloat(prompt("Enter door height"));
// var doorWidth = parseFloat(prompt("Enter door width"));
// var doorSquare = doorHeight*doorWidth;
//
// var windowHeight = parseFloat(prompt("Enter window height"));
// var windowWidth = parseFloat(prompt("Enter window width"));
// var windowSquare = windowHeight*windowWidth;
//
// var roomSquare = roomBaseSquare - doorSquare - windowSquare;
//
//
// var rollWidth = parseFloat(prompt("Enter roll width"));
// var rollLength = parseFloat(prompt("Enter roll length"));
// var rollSquare = rollWidth*rollLength;
//
// var rollCount = roomSquare/rollSquare;
//
// alert(rollCount.toFixed(2));


//example 04
// var x = parseInt(prompt("Enter the number"));
// alert(+(x>10));



//example 05.1
// var x = parseFloat(prompt("enter the number"));
// var intPart = parseInt(x);
// var floatingPart = x-intPart;
// var res = intPart + (floatingPart>0.5);
// alert(res);

//example 05.2
// var x = parseFloat(prompt("enter the number"));
// var res = parseInt(x+0.5);
// alert(res);


//condition ? if_true_result : if_false_result

// var a =9;
// var b = a>10 ? --a : ++a;
// alert(a);


var bathVolume = parseFloat(prompt("Enter volume of bath"));
var bucketVolume = parseFloat(prompt("Enter volume of bucket"));
var bucketCount = parseInt(prompt("Enter the bucket count"));

var fullBucketVolume = bucketCount*bucketVolume;
alert(bathVolume<fullBucketVolume?"Куда льешь, не влазит":"огонь");




