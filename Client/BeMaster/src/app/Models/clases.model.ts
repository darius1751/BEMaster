import { Mentor } from "./mentor.model";
export interface Clase{
    id?:number;
    nombre:string;
    duracion:any;
    mentores?:Mentor[];
}