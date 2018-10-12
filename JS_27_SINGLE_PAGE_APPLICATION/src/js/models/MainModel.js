class MainModel{
    constructor(){
        this.data = [];
        MainModel.inst=this;
    }
    static instance(){
        console.log(MainModel.inst);
        if(MainModel.inst) return MainModel.inst;
        return MainModel.inst = new MainModel();
    }


    add(data){
        this.data.push(data);
    }
    getAll(){
        return this.data;
    }
}