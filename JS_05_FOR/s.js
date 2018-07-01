// for(var i=0,value = 1; i<=10; i++,value*=3)
//     document.write("<h1>3^"+i+"="+value+"</h1>");


// //EXAMPLE 02
// let x = 13;
//
// let isEasy = true;
// for(let i = 2; i<=x/2; i++){
//     if(x%i===0) {
//         isEasy=false;
//         break;
//     }
// }
//
// alert(isEasy?"easy":"not easy");


//Example 03
// for(var i=1;i<=100;i++){
//     var isEasy = true;
//     for(var j=2;j<=i/2;j++){
//         if(i%j===0){
//             isEasy =false;
//             break;
//         }
//     }
//     if(isEasy)
//         document.write("<h1>"+i+"</h1>")
//
// }

vasia:
for (var i=0;i<10;i++){
    for(var j=0;j<i;j++){
        document.write("<h1>"+i+"->"+j+"</h1>");
        if(j==5)continue vasia;
    }





