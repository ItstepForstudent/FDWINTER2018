function testToRegExp() {
    let s = "abcdef";
    let rexp = /^\w+$/;
    console.log(rexp.test(s));
}

function searchRegExp() {
    let rexp = /\d+/;
    let str = "fddgsdf fdsgdfgdsf 55fdsg  fdsgdfs gfdg88 fdsgdfg 6dfsgf 8754 dfsghdfh fg5 ";
    console.log(str.search(rexp))
}
//searchRegExp()

function searchAllRegExp() {
    //let rexp = /\d+/g;
    let rexp = new RegExp('(\\d)(\\d+)',"g");
    let str = "fddgsdf fdsgdfgdsf 55fdsg  fdsgdfs gfdg88 fdsgdfg 6dfsgf 8754 dfsghdfh fg5 ";
    let x;
    while((x = rexp.exec(str))!=null){
        console.log(x);
    }
}
//searchAllRegExp();

function replaceRegExp() {
    let rexp = new RegExp('(\\d)(\\d+)',"g");
    let str = "fddgsdf fdsgdfgdsf 55fdsg  fdsgdfs gfdg88 fdsgdfg 6dfsgf 8754 dfsghdfh fg5 ";

    let s2 = str.replace(rexp,"**$1-$2**");
    console.log(s2);
}
//replaceRegExp();

