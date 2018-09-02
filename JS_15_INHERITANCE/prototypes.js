
Array.prototype.show = function () {
  console.log(this.join("-"))
};

Object.defineProperty(Array.prototype,"evenCount",{
    get:function () {
        return this.filter(e=>e%2===0).length;
    }
});


let a = [1,2,3,4,5];
a.show();
console.log(a.evenCount);

