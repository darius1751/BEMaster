import {Request, Response} from 'express';
import connection from '../Model/database';
import mentorController from '../Controllers/clases_x_mentorController';
class ClasesController{
    public async getAll(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM clase');
        });
        for(const clase of response){
            clase.mentores = await mentorController.getMentorForClase(clase.id);
        }
        res.send(response);
    }
    public async get(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM clase WHERE id = ?', [req.params.id]);
        });
        response.mentores = await mentorController.getMentorForClase(response.id);
        res.send(response[0]);
    }
    public async post(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('INSERT INTO clase(nombre,duracion_en_horas) VALUES(?,?)',[req.body.nombre,req.body.duracion_en_horas]);
        });
        res.send(response);
    }
    public async delete(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('DELETE FROM clase WHERE id = ?', [req.params.id]);
        });
        res.send(response);
    }
    
}
export default new ClasesController();