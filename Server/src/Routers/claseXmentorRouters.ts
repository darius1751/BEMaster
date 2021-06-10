import {Request,Response,Router} from 'express';
import claseXMentorController from '../controllers/clases_x_mentorController';
class ClaseXMentorRouters{
    public routers:Router;
    constructor(){
        this.routers = Router();
        this.config();
    }
    public config():void{
        this.routers.get('/',claseXMentorController.getAll);
        this.routers.get('/:id',claseXMentorController.get);
        this.routers.post('/',claseXMentorController.post);
        this.routers.delete('/:id',claseXMentorController.delete)
    }
}
export default new ClaseXMentorRouters().routers;