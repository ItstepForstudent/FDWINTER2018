class UsersModel{
    add(name,onUserAdded){
        Ajax.post("http://pdfstep.zzz.com.ua?action=user&method=add",{name:name},r => onUserAdded());
    }
    getAll(onUsersLoaded){
        Ajax.get("http://pdfstep.zzz.com.ua?action=user&method=getAll",(response) => {
            let users = JSON.parse(response).data;
            onUsersLoaded(users);
        });
    }
    del(id,onUserDeleted){
        Ajax.post("http://pdfstep.zzz.com.ua?action=user&method=del",{id:id},r => onUserDeleted());
    }
}