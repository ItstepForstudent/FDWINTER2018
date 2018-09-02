// try{
//     var x="dfsgd";
//     x.someMethod();
//
//
//
// }catch (e) {
//     console.log("Sorry,but "+e.message);
//     throw e;
// }


function login(login) {
    if(login.length>5){
        if(login.length<10){
            if(login.indexOf('-')!==-1){
                //Some action to login
                return true;
            }
            return false;
        }
        return false;
    }
    return false;
}

function login2(login) {
    try {
        if(login.length<6) throw new Error("login is short");
        if(login.length>11) throw new Error("login is long");
        if(login.indexOf('-')===-1) throw new Error("denied '-'");
        //some action
        return true;
    }catch (e) {
        return false;
    }
}





function f(i) {
    if(i<0) throw new Error();
    console.log("f");
}





try {
    f(0)
}catch (e) {
    console.log("Make an error");
}