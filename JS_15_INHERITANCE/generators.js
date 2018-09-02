
// function *rand(a,b) {
//     for (let i=0;i<10;i++){
//         yield Math.round(Math.random()*(b-a)) +a;
//     }
// }
//
//
// let random = rand(10,100);
//
// for(let randNum = random.next();!randNum.done;randNum = random.next()){
//     console.log(randNum.value);
// }


function *gen2() {
    yield 1;
    yield 2;
    yield 3;
}



let g = gen2();
for(let i = g.next();!i.done;i = g.next()){
    console.log(i.value);
}