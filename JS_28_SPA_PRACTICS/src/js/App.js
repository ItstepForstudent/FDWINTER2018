class App{
    constructor(){
        this.router = new Router("#/");

        this.router.addRoute("#/",UsersController);
        this.router.addRoute("#/notes/details/{userId}/{id}",NotesDetailsController);
        this.router.addRoute("#/notes/{id}",NotesController);
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