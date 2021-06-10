import {Request, Response} from 'express';
import connection from '../Model/database';
import mentorController from '../Controllers/clases_x_mentorController';
class MentoresController{
    public async getAll(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM mentor');
        });
        for(let mentor of response){
            mentor.clases = await mentorController.getClaseForMentor(mentor.id);
        }
        res.send(response);
    }
    public async get(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM mentor WHERE id = ?', [req.params.id]);
        });
        response.clases = await mentorController.getClaseForMentor(response.id);
        res.send(response[0]);
    }
    public async post(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('INSERT INTO mentor(nombre,documento_identidad) VALUES(?,?)',[req.body.nombre,req.body.documento_identidad]);
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
export default new MentoresController();