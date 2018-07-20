//EXAMPLE 01 - Linear search
// var indexNeeded = -1;
// var a = [2, 4, 9, 8, 5, 7, 6];
//
// var NEEDED = 5;
//
//
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === NEEDED) {
//         indexNeeded = i;
//         break;
//     }
// }
//
// if (indexNeeded !== -1) {
//     alert("yes it is "+indexNeeded)
// } else {
//     alert(":(")
// }

//Example 2: elements array "a", then not contains in "b"
// var a = [1, 2, 3, 4, 5, 6];
// var b = [2, 4, 6, 7];
//
//
// for (var i = 0; i < a.length; i++) {
//     //search a[i] in b:
//     var contains = false;
//     for(var j=0;j<b.length;j++){
//         if(a[i] == b[j]){
//             contains=true;
//             break;
//         }
//     }
//
//     if(!contains){
//         alert(a[i]);
//     }
// }


//Example 03 Binary search:
var NEEDED = 17;
a = [1, 3, 5, 8, 9, 11, 14, 18, 20];

var start = 0;
var end = a.length;


var contains = false;
while (start < end) {
    var center = parseInt((start + end) / 2);

    if (a[center] === NEEDED) {
        //nashli
        contains = true;
        break;
    }
    else if (a[center] > NEEDED) end = center;
    else start = center + 1;
}

if(contains){
    alert("Contains");
}else{
    alert("Not Contains")
}



