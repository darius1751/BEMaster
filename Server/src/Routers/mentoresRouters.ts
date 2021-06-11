import {Router} from 'express';
import mentoresController from '../controllers/mentoresController';
class MentoresRouters{
    public routers:Router;
    constructor(){
        this.routers = Router();
        this.config();
    }
    public async config():Promise<void>{
        this.routers.get('/',mentoresController.getAll);
        this.routers.get('/:id',mentoresController.get);
        this.routers.post('/',mentoresController.post);
        this.routers.delete('/:id',mentoresController.delete)
    }
}
export default new MentoresRouters().routers;