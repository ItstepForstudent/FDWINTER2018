function printDown(n){
    if(n>0) printDown(n-1);
    console.log(n);
}


//printDown(5);

let fact = n=>n===0 ? 1 : n * fact(n-1);

//console.log(fact(3));

let summ = n=>n===0 ? 0 : n + summ(n>0 ? n-1 : n+1);

//console.log(summ(4));


//sum(a,b) = a+a+1+a+2 +..... + b-1 +b = sum(a,b-1)+b = a + sum(a+1,b)

//f(n) = f(n-1)+f(n-2)
//f(1)=1,f(2)=1


function fibo(n) {
    if(n<=1) return n;
    return fibo(n-1)+fibo(n-2);
}

for(let i = 1;i<50;i++){
    console.log(fibo(i));
}
