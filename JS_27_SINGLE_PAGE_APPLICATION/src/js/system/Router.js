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


    run(){

        let accept_routes = this.routes.filter(r=>r.hash === this.getHash());
        if(accept_routes.length===0){
            //404
        }else{
            this.activeRoute = accept_routes[0];
            this.page = new this.activeRoute.controller(this._contentview);
            this.page.init();
        }
    }
}