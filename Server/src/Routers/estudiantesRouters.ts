import {Router} from 'express';
import estudiantesController from '../controllers/estudiantesController';
class EstudianteRouters{
    public routers:Router;
    constructor(){
        this.routers = Router();
        this.config();
    }
    public config():void{
        this.routers.get('/',estudiantesController.getAll);
        this.routers.get('/:id',estudiantesController.get);
        this.routers.post('/',estudiantesController.post);
        this.routers.delete('/:id',estudiantesController.delete)
    }
}
export default new EstudianteRouters().routers;