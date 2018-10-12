class Module{
    constructor(selector){
        this.selector = selector;
    }
    get(selector){
        return this.container.querySelector(selector);
    }
    getAll(selector){
        return Array.prototype.slice.call(this.container.querySelectorAll(selector));
    }
    init(){
        this.container = document.querySelector(this.selector);
        this.onComponentsLoading();
        this.onBindEvents();
        this.onCreate();
    }

    onCreate(){

    }

    onComponentsLoading() {

    }

    onBindEvents() {

    }
}