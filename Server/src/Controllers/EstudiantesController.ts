import {Request, Response} from 'express';
import connection from '../Model/database';
class EstudianteController{
    public async getAll(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM estudiante');
        });
        res.send(response);
    }
    public async get(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('SELECT * FROM estudiante WHERE id = ?', [req.params.id]);
        });
        res.send(response[0]);
    }
    public async post(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('INSERT INTO estudiante(nombre,documento_identidad,fecha_nacimiento) VALUES(?,?,?)',[req.body.nombre,req.body.documento_identidad,req.body.fecha_nacimiento]);
        });
        res.send(response);
    }
    public async delete(req:Request,res:Response):Promise<any>{
        const response = await (await connection).getConnection().then(connection=>{
            return connection.query('DELETE FROM estudiante WHERE id = ?', [req.params.id]);
        });
        res.send(response);
    }
}
export default new EstudianteController();