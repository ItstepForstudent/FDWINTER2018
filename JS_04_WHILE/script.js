//document.write("<h1>hello</h1>")

//EXAMPLE_01
// var width = parseInt(prompt("Enter the rect width:"));
// var row = 0;
// while(row<width){
//     var star = 0;
//     while (star<width){
//         document.write("* ");
//         star++;
//     }
//     document.write("<br>");
//     row++;
// }

//EXAMPLE 02
// var width = parseInt(prompt("Enter the rect width:"));
// var height = parseInt(prompt("Enter the rect height:"));
//
// var i=0;
// while(i<height){
//     var j=0;
//     while(j<width){
//         document.write("* ");
//         j++;
//     }
//     document.write("<br>");
//     i++;
// }

//EXAMPLE 03
// var width = parseInt(prompt("Enter the rect width:"));
//
// var i=0;
// while(i<width){
//     var j=0;
//     while(j<=i){
//         document.write("* ");
//         j++;
//     }
//     document.write("<br>");
//     i++;
// }

//EXAMPLE 04
// var width = parseInt(prompt("Enter the rect width:"));
// var starline = "";
// while(width--) document.write((starline+="* ")+"<br>");


//EXAMPLE 05
// var width = parseInt(prompt("Enter the rect width:"));
// var row = 0;
// while(row<width){
//     var star = 0;
//     while (star<width){
//         if(row==0||row==width-1||star==0||star==width-1)
//             document.write("* ");
//         else document.write("&nbsp;&nbsp; ");
//         star++;
//     }
//     document.write("<br>");
//     row++;
// }

//EXAMPLE 06
// var width = parseInt(prompt("Enter the rect width:"));
// var row = 0;
// while(row<width){
//     var star = 0;
//     while (star<=row){
//         if(row==width-1||star==0||star==row)
//             document.write("* ");
//         else document.write("&nbsp;&nbsp; ");
//         star++;
//     }
//     document.write("<br>");
//     row++;
// }


// var i=0;
// while(true){
//     document.write(i+"<br>");
//     i++;
//     if(i>10) break;
// }


//EXAMPLE 07
function rand(a,b){
    return Math.round(Math.random() * (b - a)) + a;
}
//
// while (true) {
//     var x = rand(1,100);
//     document.write(x );
//     if(x == 50) break;
//     document.write(" => "+(x*x)+"<br>")
// }

// var x;
// while (x!=50) {
//     x = rand(1,100);
//     document.write(x+"<br>" );
// }

//EXAMPLE 08
// var i = 0;
// while(i++<10){
//     if(i==7) continue;
//     document.write(i+"<br>");
// }

// var i = 0;
// while(i++<10){
//     if(i!=7) document.write(i+"<br>");
// }



