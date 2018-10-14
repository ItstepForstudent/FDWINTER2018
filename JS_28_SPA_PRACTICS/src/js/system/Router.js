class Router{


    constructor(mainhash){
        this.mainhash = mainhash;
        this.routes = [];
        this._contentview = null;
    }


    set contentview(value) {
        this._contentview = value;
    }

    addRoute(hash,controller){
        this.routes.push({
            hash:hash,
            controller:controller
        });
    }

    getHash(){
        return window.location.hash|| this.mainhash;
    }


    compareHash(r,currentHash){
        let routeHash = r.hash;
        if(/\{[a-z]+\}/i.test(routeHash)){
            let route_components = routeHash.split("/");
            let hash_components = currentHash.split("/");

            for(let i in route_components){
                if(/\{[a-z]+\}/i.test(route_components[i])){
                    let name = route_components[i].replace(/\{([a-z]+)\}/i,"$1");
                    if(!r.params) r.params = {};
                    r.params[name]= hash_components[i];
                }else{
                    if(route_components[i]!==hash_components[i]) return false;
                }
            }



            return true;



        }else{
            return routeHash===currentHash
        }
    }


    run(){

        let accept_routes = this.routes.filter(r=>this.compareHash(r,this.getHash()));
        if(accept_routes.length===0){
            //404
        }else{
            this.activeRoute = accept_routes[0];
            this.page = new this.activeRoute.controller(this._contentview,this);
            this.page.init();
        }
    }
}