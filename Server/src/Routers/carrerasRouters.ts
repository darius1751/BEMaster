import {Router,Request, Response} from 'express';
import carreraController from '../controllers/carrerasController';
class CarreraRouters{
    public routers:Router;
    constructor(){
        this.routers = Router();
        this.config();
    }
    public config():void{
        this.routers.get('/',carreraController.getAll);
        this.routers.get('/:id',carreraController.get);
        this.routers.post('/',carreraController.post);
        this.routers.delete('/:id',carreraController.delete)
    }
}
export default new CarreraRouters().routers;