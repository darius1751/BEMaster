import {Request, Response} from 'express';
import connection from '../Model/database';
import claseXCarreraController from './clase_x_carreraController';
class CarreraController{
    public async getAll(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM carrera');
        });
        for(const carrera of response){
            carrera.clases = await claseXCarreraController.getClaseForCarrera(carrera.id);
        }
        res.send(response);
    }
    public async get(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM carrera WHERE id = ?', [req.params.id]);
        });
        response.clases = await claseXCarreraController.getClaseForCarrera(response.id);
        res.send(response[0]);
    }
    public async post(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('INSERT INTO carrera(nombre,duracion_en_annios) VALUES(?,?)',[req.body.nombre,req.body.duracion_en_annios]);
        });
        res.send(response);
    }
    public async delete(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('DELETE FROM carrera WHERE id = ?', [req.params.id]);
        });
        res.send(response);
    }
}
export default new CarreraController();