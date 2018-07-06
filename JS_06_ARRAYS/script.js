function showArray(a) {
    document.write("<ul>");
    a.forEach((e, i) => document.write("<li><h1>" + i + "->" + e + "</h1></li>"));
    document.write("</ul>");
}

// var a = [];
// a[a.length]=1;
// a[a.length]=5;
// a[a.length]=7;
// a.push(11);
//
// //var last = a[a.length-1];
// //delete a[a.length-1];
//
// // var last = a.pop();
// // var first = a.shift();
//
// while (a.length>0) alert(a.shift());
//
// showArray(a);


//var a = [1, 2, 3, 4];
//var sum = 0;
//for (var i = 0; i < a.length; i++) sum+=a[i];
//for (var i = 0; i < a.length; sum += a[i++]) ;
//while(a.length>0) sum+=a.pop();
//alert(sum);


// var buf = a[0];
// for (var i=0;i<a.length-1;i++) a[i]=a[i+1];
// a[a.length-1] = buf;

// var buf = a[a.length-1];
// for (var i = a.length-1;i>0;i--) a[i]=a[i-1];
// a[0] = buf;
// showArray(a);


var x = [2,5,6,7,-1,4,6];
// var min = x[0];
// // var max = x[0];
// // for (var i=0;i<x.length;i++){
// //     if(x[i]<min) min=x[i];
// //     if(x[i]>max) max=x[i];
// // }
// // alert(min);
// // alert(max);

var min = 0;
var max = 0;
for (var i=0;i<x.length;i++){
    if(x[i]<x[min]) min=i;
    if(x[i]>x[max]) max=i;
}
alert(min);
alert(max);



