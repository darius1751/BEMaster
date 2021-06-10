import {Pool,createPool} from 'promise-mysql';
class Connection{
    constructor(){
       
    }
    public async config():Promise<Pool>{
        return await createPool({charset:'utf8',database:'bemaster',user:'root',password:''}).then(value=>{
            return value;
            });
        }
}
export default new Connection().config();