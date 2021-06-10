import {Request, Response} from 'express';
import connection from '../Model/database';
class ClaseXMentorController{
    public async getAll(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM mentor_x_clase');
        });
        
        res.send(response);
    }
    public async get(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM mentor_x_clase WHERE id = ?', [req.params.id]);
        });
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
    
    public async getClaseForMentor(mentor_id:number):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query(`SELECT c.id,c.nombre,c.duracion_en_horas FROM mentor_x_clase AS cxm INNER JOIN clase AS c
             ON cxm.clase_id = c.id
             WHERE cxm.mentor_id = ?`,[mentor_id]);
        });
        return response;
    }
    public async getMentorForClase(clase_id:number):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query(`SELECT c.id,c.nombre,c.documento_identidad FROM mentor_x_clase AS cxm INNER JOIN mentor AS m
             ON cxm.mentor_id = m.id
             WHERE cxm.clase_id = ?`,[clase_id]);
        });
        return response;
    }
}
export default new ClaseXMentorController();