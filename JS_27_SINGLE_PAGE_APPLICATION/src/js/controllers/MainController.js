class MainController extends Page{

    init() {
        this.registerModule(new HelloModule(".hello"));
        this.loadView("main");
    }
}

class HelloModule extends Module{

    onComponentsLoading() {
        this.model = MainModel.instance();
        this.button = this.get("button");
        this.content = this.get(".content");
    }

    onBindEvents() {
        console.log(this.button);
        this.button.addEventListener("click",e=>this.addLine())
    }

    onCreate() {
        this.redraw();
    }
    redraw(){
        let data = this.model.getAll();
        this.content.innerHTML="";
        data.forEach(elem=>{
            this.content.insertAdjacentHTML("beforeEnd",`<div class="tag">${elem}</div>`);
        })
    }

    addLine(){
        this.model.add("hello");
        this.redraw();
    }
}