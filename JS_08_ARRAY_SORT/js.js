//Select sort
// var a = [7,6,4,1,5,0];
// for(var i=0;i<a.length-1;i++){
//
//     var min = i;
//     for(var j = i; j<a.length; j++ ){
//         if(a[j]<a[min]) min = j;
//     }
//
//     var buf = a[i];
//     a[i] = a[min];
//     a[min] = buf;
//
// }
//
// console.log(a)


//Bubble sort
var arr = [2, 4, 6, 9, 7, 8, 3, 1];
do {
    var zamena = false;
    var i=0;
    while ( i < arr.length - 1) {
        if (arr[i] > arr[i + 1]) {
            var buf = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = buf;
            zamena = true;
        }
        i++;
    }

} while (zamena);

console.log(arr);