let rx = rxjs.operators;

class UsersModel extends Model{

    constructor() {
        super();
        this.url = "http://pdfstep.zzz.com.ua?action=user";
    }

    _url(additional){
        return this.url+additional;
    }

    getAll(){
        return this.ajaxGet(this._url("&method=getAll"))
            .pipe(rxjs.operators.map(r=>r.response));
    }

    add(name){
        return this.ajaxPost(this._url("&method=add"),{name});
    }

    delete(id){
        return this.ajaxPost(this._url("&method=del"),{id});
    }
}

class NotesModel extends Model{
    constructor() {
        super();
        this.url = "http://pdfstep.zzz.com.ua?action=todo";
    }

    _url(additional){
        return this.url+additional;
    }

    getAll(user_id){
        return this.ajaxPost(this._url("&method=get"),{id:user_id})
            .pipe(rxjs.operators.map(r=>r.response));
    }

    add(user_id,name,desc){
        return this.ajaxPost(this._url("&method=add"),{name:name,id:user_id,desc:desc});
    }

    delete(id){
        return this.ajaxPost(this._url("&method=del"),{id});
    }
}

class UserView extends View{

    onComponentsLoading() {
        this.form = this.get(".form");
        this.formInput = this.getSub(this.form,"input");
        this.formBtn = this.getSub(this.form,"button");
        this.list = this.get(".list");
    }

    onBindEvents() {
        this.formClick = this.eventStream(this.formBtn,"click");
        this.userDelClick = this.eventStreamTargeting(this.list,"click",".del");
        this.userDetailsClick = this.eventStreamTargeting(this.list,"click",".desc");
    }

    userAddStream(){
        return this.formClick
            .pipe(rxjs.operators.map(e=>this.formInput.value))
            .pipe(rxjs.operators.map(name=>name.trim()))
            .pipe(rxjs.operators.filter(name => name!==""));
    }
    userDeleteStream(){
        return this.userDelClick
            .pipe(rxjs.operators.map(btn=>btn.dataset.id));
    }
    userSelectStream(){
        return this.userDetailsClick
            .pipe(rxjs.operators.map(btn=>btn.dataset.id));
    }

    showUsers(users){
        this.list.innerHTML="";
        users.forEach(u=>{
            let userBlock = this.newElem("div","item user","<div class='data'>"+u.name+"</div>");
            let delBtn = this.newElem("button","del","delete");
            let detailsBtn = this.newElem("button","desc","description");
            userBlock.appendChild(delBtn);
            userBlock.appendChild(detailsBtn);

            userBlock.dataset.id = delBtn.dataset.id = detailsBtn.dataset.id = u.id;
            this.list.appendChild(userBlock);
        })
    }

    selectUser(id){
       let users = Array.prototype.slice.call(this.list.children);
       users.forEach(u=>u.classList.remove("selected"));
       users.filter(u=>u.dataset.id===id).forEach(u=>u.classList.add("selected"));
    }
}

class NotesView extends View{

    onComponentsLoading() {
        this.form = this.get(".form");
        this.nameInput = this.getSub(this.form,".name");
        this.descInput = this.getSub(this.form,".desc");
        this.formBtn = this.getSub(this.form,"button");
        this.list = this.get(".list");
    }

    onBindEvents() {
        this.formClick = this.eventStream(this.formBtn,"click");
        this.noteDelClick = this.eventStreamTargeting(this.list,"click",".del");
        this.noteDetailsClick = this.eventStreamTargeting(this.list,"click",".desc");
    }

    noteAddStream(){
        return this.formClick
            .pipe(rxjs.operators.map(e=>{return {name:this.nameInput.value,desc:this.descInput.value};}))
            .pipe(rxjs.operators.map(n=>{return {name:n.name.trim(),desc:n.desc.trim()};}))
            .pipe(rxjs.operators.filter(n => n.name!=="" && n.desc!==""));
    }
    noteDeleteStream(){
        return this.noteDelClick
            .pipe(rxjs.operators.map(btn=>btn.dataset.id));
    }
    noteSelectStream(){
        return this.noteDetailsClick
            .pipe(rxjs.operators.map(btn=>btn.dataset.id));
    }

    showNotes(notes){
        this.list.innerHTML="";
        notes.forEach(u=>{
            let noteBlock = this.newElem("div","item note","<div class='data'>"+u.name+"</div>");
            let delBtn = this.newElem("button","del","delete");
            let detailsBtn = this.newElem("button","desc","description");
            noteBlock.appendChild(delBtn);
            noteBlock.appendChild(detailsBtn);

            delBtn.dataset.id = detailsBtn.dataset.id = u.id;
            this.list.appendChild(noteBlock);
        })
    }
    hide(){
        this.container.style.display="none";
    }
    show(){
        this.container.style.display="";
    }

}

class UsersController extends Controller{


    constructor(view, model) {
        super(view, model);
        this.userIdStream = new rxjs.Subject();
    }

    getUserIdStream(){
        return this.userIdStream;
    }

    onCreate() {
        this.view.userAddStream()
            .pipe(rxjs.operators.flatMap(name=>this.model.add(name)))
            .pipe(rxjs.operators.flatMap(r=>this.model.getAll()))
            .subscribe(r=>this.view.showUsers(r.data));

        this.view.userDeleteStream()
            .pipe(rxjs.operators.flatMap(id=>this.model.delete(id)))
            .pipe(rxjs.operators.flatMap(r=>this.model.getAll()))
            .subscribe(r=>this.view.showUsers(r.data));

        this.view.userSelectStream()
            .pipe(rx.tap(id=>this.view.selectUser(id)))
            .subscribe(id=>{this.userIdStream.next(id)});


        this.model.getAll().subscribe(r=>this.view.showUsers(r.data));
    }


}

class NotesController extends Controller{


    constructor(view, model,userIdStream) {
        super(view, model);
        this.userIdStream = userIdStream;
    }

    onCreate() {
        this.view.hide();
        this.view.noteAddStream()
            .pipe(rxjs.operators.flatMap(n=>this.model.add(this.user_id,n.name,n.desc)))
            .pipe(rx.tap(x=>console.log(x)))
            .pipe(rxjs.operators.flatMap(r=>this.model.getAll(this.user_id)))
            .subscribe(r=>this.view.showNotes(r.data));

        // this.view.userDeleteStream()
        //     .pipe(rxjs.operators.flatMap(id=>this.model.delete(id)))
        //     .pipe(rxjs.operators.flatMap(r=>this.model.getAll()))
        //     .subscribe(r=>this.view.showUsers(r.data));

        this.userIdStream
            .pipe(rx.tap(id=>this.user_id=id))
            .pipe(rx.flatMap(id=>this.model.getAll(id)))
            .pipe(rx.tap(id=>this.view.show()))
            .subscribe(r=>this.view.showNotes(r.data));
    }


}


class UserModule extends Module{

    constructor() {
        super();
        let userView = new UserView(".users");
        let userModel = new UsersModel();
        let userController = new UsersController(userView,userModel);
        this.addController(userController);

        let notesView = new NotesView(".notes");
        let notesModel = new NotesModel();
        let notesController = new NotesController(notesView,notesModel,userController.getUserIdStream());
        this.addController(notesController);
    }
}




let page = new Page();
page.registerModule(new UserModule());
page.start();