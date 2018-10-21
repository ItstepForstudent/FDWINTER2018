class NotesController extends Page{

    init() {
        let id = this.router.activeRoute._params.id;
        this.registerModule(new NotesPageModule(".notesModule",id));
        this.loadView("notes");
    }
}
class NotesPageModule extends Module{

    constructor(selector,user_id) {
        super(selector);
        this.user_id = user_id;
        this.model = new NotesModel();
    }

    onComponentsLoading() {
        this.form = this.get(".form");
        this.list = this.get(".list");
        this.formField = this.get("input");
        this.formTextarea = this.get("textarea");
        this.formBtn = this.get("button");
    }

    onBindEvents() {
        this.formBtn.addEventListener("click",e=>this.addNote());
        this.list.addEventListener("click",e=>{
            if(e.target.matches(".delbtn")) this.delNote(e.target.dataset.id);
            if(e.target.matches(".morebtn")) this.openNote(e.target.dataset.id);
        })
    }

    onCreate() {
        this.updateView();
    }

    updateView(){
        this.model.getAll(this.user_id,users=>{
            this.list.innerHTML = "";
            users.forEach(u=> this.list.appendChild(UserPageModule.createUserBlock(u)));
        })
    }

    static createUserBlock(user){
        let userBlock = document.createElement("div");
        userBlock.className="listitem";
        userBlock.innerHTML = `<div class="data">${user.name}</div>`;

        let delbtn = document.createElement("button");
        delbtn.dataset.id = user.id;
        delbtn.innerText = "delete";
        delbtn.className="btn btn-danger delbtn";

        let morebtn = document.createElement("button");
        morebtn.dataset.id = user.id;
        morebtn.innerText = "more";
        morebtn.className="btn btn-success morebtn";

        userBlock.appendChild(delbtn);
        userBlock.appendChild(morebtn);



        return userBlock;
    }

    addNote() {
        let name = this.formField.value;
        let desc = this.formTextarea.value;
        this.model.add(name,desc,this.user_id,()=>this.updateView());
    }
    delNote(id){
        this.model.del(id,()=>this.updateView());
    }

    openNote(id) {
        window.location.hash="#/notes/details/"+this.user_id+"/"+id;
    }
}