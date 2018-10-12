class Ajax{
    static get(url,onsuccess,onerror){
        let request = new XMLHttpRequest();
        request.open("GET",url,true);
        request.onreadystatechange=function () {
            if(request.readyState!==4) return;
            if(request.status===200)
                onsuccess(request.responseText);
            else if(onerror)
                onerror(request.status,request.statusText);
        };
        request.send();
    }
    static post(url,params,onsuccess,onerror){
        let request = new XMLHttpRequest();
        request.open("POST",url,true);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        request.onreadystatechange=function () {
            if(request.readyState!==4) return;
            if(request.status===200)
                onsuccess(request.responseText);
            else if(onerror)
                onerror(request.status,request.statusText);
        };
        let _params = [];
        for(let i in params) _params.push(i+"="+encodeURIComponent(params[i]));
        request.send(_params.join("&"));
    }
    static postMultiPart(url,params,onsuccess,onerror){
        let request = new XMLHttpRequest();
        request.open("POST",url,true);
        request.onreadystatechange=function () {
            if(request.readyState!==4) return;
            if(request.status===200)
                onsuccess(request.responseText);
            else if(onerror)
                onerror(request.status,request.statusText);
        };
        request.send(params);
    }
}