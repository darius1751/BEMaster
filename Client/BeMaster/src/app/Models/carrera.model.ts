import {Clase} from './clases.model';
export interface Carrera{
    id?:number;
    nombre:string;
    duracion_en_annios:any;
    clases?:Clase[];
}