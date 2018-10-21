class NotesDetailsController extends Page{
    init() {
        let id = this.router.activeRoute._params.id;
        let idUser = this.router.activeRoute._params.userId;
        this.registerModule(new NoteDetailsPageModule(".detailsModule",id,idUser));
        this.loadView("notes_details");
    }
}

class NoteDetailsPageModule extends Module{

    constructor(selector,id,id_user) {
        super(selector);
        this.userId = id_user;
        this.id = id;
        this.model = new NotesModel();
    }


    onComponentsLoading() {
       this.title = this.get(".title");
       this.desc = this.get(".desc");
    }

    onBindEvents() {

    }

    onCreate() {
        this.model.getOne(this.userId,this.id,n=>{
            this.title.innerHTML = n.name;
            this.desc.innerHTML = n.desc;
        })
    }
}