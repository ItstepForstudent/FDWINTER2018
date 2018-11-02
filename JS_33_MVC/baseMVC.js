
class Page{
    constructor(){
        this.modules=[];
    }
    registerModule(module){
        this.modules.push(module);
    }
    init(){
        this.modules.forEach(m=>m.init())
    }
    start(){
        window.addEventListener("load",e=>this.init());
    }
}


class View{
    constructor(selector){
        this.selector = selector;
    }

    init(){
        this.container = document.querySelector(this.selector);
        this.onComponentsLoading();
        this.onBindEvents();
        this.onCreate();
    }

    get(selector){
        return this.container.querySelector(selector);
    }
    getAll(selector){
        return Array.prototype.slice.call(this.container.querySelectorAll(selector));
    }
    getSub(view,selector){
        return view.querySelector(selector);
    }
    getSubAll(view,selector){
        return view.querySelectorAll(selector);
    }

    eventStream(view,event){
        return rxjs.fromEvent(view,event);
    }
    eventStreamTargeting(view,event,selector){
        return rxjs.fromEvent(view,event)
            .pipe(rxjs.operators.filter(e=>e.target.matches(selector)))
            .pipe(rxjs.operators.map(e=>e.target));
    }
    newElem(type,clas=null,html=null){
        let elem = document.createElement(type);
        if(clas!==null) elem.className=clas;
        if(html!==null) elem.innerHTML = html;
        return elem;
    }

    onCreate(){}

    onComponentsLoading() {}

    onBindEvents() {}
}




class Controller{

    constructor(view,model){
        this.view = view;
        this.model = model;
    }

    init(){
        this.view.init();
        this.onCreate();
    }

    onCreate(){}

}

class Model {
    ajaxGet(url){
        return rxjs.ajax.ajax.get(url);
    }
    ajaxPost(url,data){
        return rxjs.ajax.ajax.post(url,data);
    }
}


class Module {
    constructor(){
        this.controllers = [];
    }
    addController(controller){
        this.controllers.push(controller);
    }

    init(){
        this.controllers.forEach(controller=>controller.init());
    }
}