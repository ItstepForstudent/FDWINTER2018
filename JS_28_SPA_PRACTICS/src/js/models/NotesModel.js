class NotesModel{
    add(name,desc,id,onAdded){
        Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=add",{name:name,desc:desc,id:id},r => onAdded());
    }
    getAll(user_id,onLoaded){
        Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=get",{id:user_id},(response) => {
            let notes = JSON.parse(response).data;
            onLoaded(notes);
        });
    }
    del(id,onDeleted){
        Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=delete",{id:id},r => onDeleted());
    }
    getOne(user_id,id,onLoaded){
        this.getAll(user_id,res=>res.filter(n=>n.id==id).forEach(n=>onLoaded(n)));
    }
}