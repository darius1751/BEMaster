import {Application,Request,Response} from 'express';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import clasesRouters from './Routers/clasesRouters'
import estudianteRouters from './Routers/EstudiantesRouters';
import mentorRouters from './Routers/mentoresRouters';
import carreraRouters from './Routers/carrerasRouters';
import claseXmentorRouters from './Routers/claseXmentorRouters';
class Server{
    private app:Application;
    constructor(){
        this.app = express();
        this.config();
    }
    public start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server On Port ${this.app.get('port')}`);
        })
    }
    public config():void{
        this.app.set('port',4300 || process.env.PORT);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/clase',clasesRouters);
        this.app.use('/estudiante',estudianteRouters);
        this.app.use('/mentor',mentorRouters);
        this.app.use('/carrera',carreraRouters);
        this.app.use('/mentorXclase',claseXmentorRouters);
    }
}
const server = new Server();
server.start();