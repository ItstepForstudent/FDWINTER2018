//example 01 (Кв.ур)
// var a = parseFloat(prompt("Enter a:"));
// var b = parseFloat(prompt("Enter b:"));
// var c = parseFloat(prompt("Enter c:"));
//
// var D = b * b - 4 * a * c;
//
// if (D < 0) alert("Root not found");
// else if (D === 0) {
//     var x = -b/2/a;
//     alert("X="+x.toFixed(3));
// }
// else {
//     var x1 = (-b+Math.sqrt(D))/2/a;
//     var x2 = (-b-Math.sqrt(D))/2/a;
//     alert("X1="+x1.toFixed(3)+" ,X2="+x2.toFixed(3));
// }

//example 02(Маршрутка)
// var all_place = parseInt(prompt("Enter the count of all place:"));
// var sit_place = parseInt(prompt("Enter the count of sit place:"));
// var people = parseInt(prompt("Enter the count of people:"));
//
// if(all_place<sit_place) alert("Invalid input");
// else if(people<sit_place){
//     var sit_empty = sit_place-people;
//     var state_place = all_place-sit_place;
//     alert("Your are sit. Transport has "+sit_empty+" sitting places and "+state_place+" staying places");
// }else if(people<all_place){
//     var free_place = all_place - people;
//     alert("Your are stay. Transport has "+free_place+" staying places");
// }else{
//     alert("sorry, place over");
// }










