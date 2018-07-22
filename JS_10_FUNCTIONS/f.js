// function имя_функции([argument,argument,....]){
//     body of function
//
//     [return ReturnedValue]
// }

function sayHello() {
    console.log("hello");
}

function say(x){
    console.log(x);
}

function showSumm(a,b) {
    var c = a+b;
    console.log(c);
}


function calculateSumm(a,b) {
    var c = a+b;
    return c;
}


//получить массив всех четных чисел исходного массива

function isEven(x) {
    return x%2===0;
}

function getArrayEven(arr){
    let evenArr = [];
    for(let i in arr)
        if(isEven(arr[i])) evenArr.push(arr[i]);
    return evenArr;
}


function arraySumm(arr) {
    let summ = 0;
    for(let i in arr) summ+=arr[i];
    return summ;
}

function arrayAvg(arr){
    return arraySumm(arr) / arr.length;
}

function pow(num,power) {
    let result = 1;
    for(let i=0;i<power;i++) result*=num;
    return result;
}

function arrayPow(arr,power){
    let result =[];
    for(let i in arr) result.push(pow(arr[i],power));
    return result;
}

function arrayContains(arr,elem) {
    for(let i in arr)
        if(arr[i] === elem) return true;
    return false;
}

function arrayDifference(arr1,arr2){
    let result = [];
    for(let i in arr1)
        if(!arrayContains(arr2,arr1[i]))
            result.push(arr1[i]);
    return result;
}

console.log(arrayDifference([1,2,3,4,5,6],[1,2,4,6,7]));





