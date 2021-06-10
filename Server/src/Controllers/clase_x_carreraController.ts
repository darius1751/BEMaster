import {Request, Response} from 'express';
import connection from '../Model/database';
class ClaseXCarreraController{
    public async getClaseForCarrera(carrera_id: number):Promise<any>{
        return await (await connection).getConnection().then(connection=>{
            return connection.query(`SELECT * FROM clase_x_carrera AS cc INNER JOIN clase AS cl 
            ON cc.clase_id = cl.id
            WHERE cc.carrera_id = ?`, [carrera_id]);
        });
        
    }    
}
export default new ClaseXCarreraController();