class App{
    constructor(){
        this.router = new Router("#/main");

        this.router.addRoute("#/main",MainController);
        this.router.addRoute("#/contacts",ContactsController);
        this.router.addRoute("#/about",AboutController);
    }
    run(){
        this.router.contentview = document.querySelector(".contentView");
        this.router.run()
    }
    start(){
        window.addEventListener("load",e=>this.run());
        window.addEventListener("hashchange",e=>this.run());
    }
}




let app = new App();
app.start();