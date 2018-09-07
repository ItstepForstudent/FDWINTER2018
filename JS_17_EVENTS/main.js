





window.addEventListener("load",function () {
    var inp = document.querySelector("input");
    var btn = document.querySelector("button");
    var block = document.querySelector(".block");

    var title = document.querySelector("title");


    btn.addEventListener("click",function (e) {
        block.innerHTML+=inp.value+"<br/>";
        block.innerHTML+=e.clientX+" "+e.clientY+"<br>";
    });

    inp.addEventListener("keyup",function (e) {



        title.innerHTML = e.key;
    });

    block.addEventListener("mouseleave",function () {
        block.innerHTML=""
    })


    block.addEventListener("mousemove",function (e) {
        block.innerHTML=e.clientX+" "+e.clientY+"<br>";
    });



    // var tds = document.querySelectorAll("td");
    // function onCellClick(e) {
    //     this.style.background="red";
    // }
    //
    // for(var i=0;i<tds.length;i++) tds[i].addEventListener("click",onCellClick);


    var table = document.querySelector("table");
    table.addEventListener("click",function (e) {
        if(!e.target.matches("td")) return;
        e.target.style.background="green";
    })







});