
function ex1() {
    var x = "ff \" cc";
    console.log(x);
}

function ex2(){
    var s = "hello";
    for(var i in s){
        console.log(s[i]);
    }
}

function ex3_cesar(str,key){
    var s = "";
    for(let i in str) {
        s+=String.fromCharCode(str.charCodeAt(i)+key);
    }
    return s;
}
function ex3() {
    var s = ex3_cesar("vasia",2);
    console.log(s);
}

function ex4(){
    var s = "hello world, hello people";
    let index = s.lastIndexOf("hel");
    console.log(index);
}
function ex5(){
    let s = "hello world, hello people";
    let sub = s.substr(2);
    console.log(sub);
}
function ex6(){
    console.log("google".link("http://gogle.com"));
    console.log("dfsfgds".bold());
    console.log("dsfsa".italics());
    console.log("dfgdsf".sub());
    console.log("dfgdsf".sup());
}
function  ex7() {

    function count_of(str,word) {
        var start = 0;
        var count =0;
        var pos;
        while((pos = str.indexOf(word,start))!==-1){
            start= pos + word.length;
            count++;
        }
        return count;
    }
    function count_of2(str,word) {
        var count =0;
        for(let start = 0,pos =0;(pos = str.indexOf(word,start))!==-1;start = pos+ word.length)
            count++;
        return count;
    }

    function count_of3(str,word){
        return str.split(word).length-1;
    }

    console.log(count_of3("hello dsfasd hello fdgshdfh hello hgjfj","hello"));


}
ex7();

