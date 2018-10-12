class Page{
    constructor(contentview){
        this.modules=[];
        this.contentview = contentview;
    }
    registerModule(module){
        this.modules.push(module);
    }
    init(){}

    loadView(view){
        Ajax.get(`/views/${view}.html`,response=>{
            this.content = response;
            this.onContentLoaded();
        })
    }
    onContentLoaded(){
        this.contentview.innerHTML = this.content;
        this.modules.forEach(m=>m.init());
    }
}