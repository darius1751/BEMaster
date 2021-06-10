import {Clase} from './clases.model';
export interface Mentor{
    id?:number;
    nombre:string;
    documento_identidad:string;
    clases?:Clase[];
}