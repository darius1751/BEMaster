import { Mentor } from "./mentor.model";
export interface Clase{
    id?:number;
    nombre:string;
    documento_identidad:string;
    mentores?:Mentor[];
}