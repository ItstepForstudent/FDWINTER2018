function each(arr,f) {
    for(let i in arr) f(arr[i]);
}

function p(x){
    console.log(x);
}

//each([1,2,3,4],p);

// each([1,2,3,4],function (elem) {
//     console.log(elem*elem);
// });
// each([1,2,3,4],e=>console.log(e*e));
//
// each([1,2,3,4],function (e) {
//     return console.log(e*e);
// });

function filter(arr,f) {
    var result =[];
    for (let i in arr){
        if(f(arr[i],i)) result.push(arr[i]);
    }
    return result;
}

function map(arr,f) {
    var result = [];
    for (let i in arr) result.push(f(arr[i],i));
    return result;
}

var a = [1,2,3,5,9,6,8,7];
//
// var b = filter(a,elem=>elem%2===0);
// var c = map(a,function (elem,index) {
//     return elem*5;
// });
//
// console.log(c);

//a.forEach(elem=>console.log(elem));

// var b = a.filter(function (e) {
//     return e%2 === 0;
// });
//var b = a.filter(e=>e%2===0);



// var b = a.map(function (elem) {
//     return elem/2;
// });

//var b = a.map(e=>e/2);

// a
//     .filter(e=>e%2===0)
//     .map(e=>e*e)
//     .map(e=>e/2)
//     .forEach(e=>console.log(e));

// var b = a.reduce(function (prevValue,elem) {
//     return prevValue+elem;
// },0);

//var b = a.reduce((p,e)=>p+e,0);
//var b = a.reduce((p,e)=>p*e,1);
//console.log(b);

// var x = [2,4,8,1];
// if(x.some(e=>e%2===0)){
//     console.log("yes")
// }else{
//     console.log("no")
// }
//
// x.some(e=>e===5);

var a =[1,2,3,4,5,6,7,8,9];
var b = [2,6,8,9,11];

//var c = a.filter(ea => b.every(eb=>eb!==ea));


var c = a.filter(function (ea) {
    return b.every(function (eb) {
        return ea!==eb;
    })
});




// a.sort(function (a,b) {
//     if(a<b) return -1;
//     if(a>b) return  1;
//     return 0;
// });
// console.log(a);















