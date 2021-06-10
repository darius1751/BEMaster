import { Mentor } from './mentor.model';
export interface Estudiante{
    id?:number;
    nombre:string;
    documento_identidad:string;
    fecha_nacimiento:Date;
    mentores?:Mentor[];
}