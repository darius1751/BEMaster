import {Request,Response,Router} from 'express';
import clasesController from '../controllers/clasesController';
class ClasesRouters{
    public routers:Router;
    constructor(){
        this.routers = Router();
        this.config();
    }
    public async config():Promise<void>{
        this.routers.get('/',clasesController.getAll);
        this.routers.get('/:id',clasesController.get);
        this.routers.post('/',clasesController.post);
        this.routers.delete('/:id',clasesController.delete)
    }
}
export default new ClasesRouters().routers;