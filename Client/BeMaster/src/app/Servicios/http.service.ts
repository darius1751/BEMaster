import { Mentor } from './../Models/mentor.model';
import { Estudiante } from './../Models/estudiante.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Carrera } from '../Models/carrera.model';
import { Clase } from '../Models/clases.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly APIURL:string;
  constructor(private http:HttpClient) {
    this.APIURL = 'http://localhost:4300/';
  }
  public getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.APIURL+'estudiante');
  }
  public postEstudiante(data:Estudiante):Observable<any>{
    return this.http.post<any>(this.APIURL+'estudiante',data);
  }
  public deleteEstudiante(id?:number):Observable<any>{
    return this.http.delete<any>(this.APIURL+'estudiante/'+id);
  }
  public putEstudiante(id:number,data:Estudiante):Observable<any>{
    return this.http.put<any>(this.APIURL+`estudiante/${id}`,data);
  }
  public getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.APIURL+'carrera');
  }
  public postCarrera(data:Carrera):Observable<any>{
    return this.http.post<any>(this.APIURL+'carrera',data);
  }
  public deleteCarrera(id:number):Observable<any>{
    return this.http.delete<any>(this.APIURL+`carrera/${id}`);
  }
  public putCarrera(id:number,data:Carrera):Observable<any>{
    return this.http.put<any>(this.APIURL+`carrera/${id}`,data);
  }  
  public getMentores():Observable<Mentor[]>{
    return this.http.get<Mentor[]>(this.APIURL+'mentor');
  }
  public postMentor(mentor:Mentor):Observable<any>{
    return this.http.post<any>(this.APIURL+'mentor',mentor);
  }
  public postClase(clase:Clase):Observable<any>{
    return this.http.post<any>(this.APIURL+'clase',clase);
  }
  public getClase():Observable<Clase[]>{
    return this.http.get<Clase[]>(this.APIURL+'clase');
  }
  public postClaseXMentor(idsMentores:number[],idClase?:number):Observable<any>{
    return this.http.post<any>(this.APIURL+'',[]);
  }
}
