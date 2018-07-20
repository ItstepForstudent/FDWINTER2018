// let a =[1,2,3,4,5,6,7,8,9];
//
// // for(let i in a){
// //     console.log(a[i]);
// // }
//
// a.forEach(function (elem,ind) {
//     console.log(ind+" => "+elem);
// });



// let s = "hello, world, hello people";
// let arr = s.split(",");
// let res = arr.join(" ");
// console.log(res);


// let arr =[3,4,9,8,9,5];
// let i = arr.lastIndexOf(9);
// console.log(i);

let arr = [1,2,3,4,6,8,3,2,4,5,6,3,5];
let res = [];

// for(let i=-1;(i = arr.indexOf(3,i+1))!==-1;)
//     res.push(i);
// console.log(res);

let index = arr.indexOf(3);
while(index!==-1){
    res.push(index);
    index = arr.indexOf(3,index+1);
}

console.log(res);





