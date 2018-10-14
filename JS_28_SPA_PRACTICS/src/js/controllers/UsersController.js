class UsersController extends Page{

    init() {
        this.registerModule(new UserPageModule(".userModule"));
        this.loadView("users");
    }
}

class UserPageModule extends Module{

    constructor(selector) {
        super(selector);
        this.model = new UsersModel();
    }

    onComponentsLoading() {
        this.form = this.get(".form");
        this.list = this.get(".list");
        this.formField = this.get("input");
        this.formBtn = this.get("button");
    }

    onBindEvents() {
        this.formBtn.addEventListener("click",e=>this.addUser());
        this.list.addEventListener("click",e=>{
            if(e.target.matches(".delbtn")) this.delUser(e.target.dataset.id);
            if(e.target.matches(".morebtn")) this.openNotes(e.target.dataset.id);
        })
    }

    onCreate() {
        this.updateView();
    }

    updateView(){
        this.model.getAll(users=>{
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

    addUser() {
        let name = this.formField.value;
        this.model.add(name,()=>this.updateView());
    }
    delUser(id){
        this.model.del(id,()=>this.updateView());
    }

    openNotes(id) {
        window.location.hash="#/notes/"+id;
    }
}