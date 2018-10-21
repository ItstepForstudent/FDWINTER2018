class ConnectionStringParser{

    constructor(connectionStr){
        this.PARAM_REXP = /-([a-z])\s*(\S+?)(?=$|-|\s)/ig;
        this.DBNAME_REXP = /^\s*(\S+?)(?=$|-|\s)/i;

        this.connectionStr = connectionStr;
        this._isparse = false;
        this._params = {
            host:"localhost",
            dbname:"mysql",
            user:"root",
            pass:""
        }
    }

    _parse_params(){
        let x;
        while((x = this.PARAM_REXP.exec(this.connectionStr))!=null){
            if(x[1]==="h") this._params.host = x[2];
            else if(x[1]==="u") this._params.user = x[2];
            else if(x[1]==="p") this._params.pass = x[2];
        }
    }
    _parse_dbname(){
        let x = this.DBNAME_REXP.exec(this.connectionStr);
        if(x!==null){
            this._params.dbname = x[1];
        }
    }

    _parse(){
        if(this._isparse) return;
        this._isparse =true;
        this._parse_params();
        this._parse_dbname();
    }

    get dbname() {
        this._parse();
        return this._params.dbname;
    }

    get host() {
        this._parse();
        return this._params.host;
    }

    get user() {
        this._parse();
        return this._params.user;
    }

    get pass() {
        this._parse();
        return this._params.pass;
    }

}

let parser = new ConnectionStringParser("vasiadb -uvasia -h 214.1.4.5 -phello");

console.log(parser.dbname,parser.host,parser.user,parser.pass);