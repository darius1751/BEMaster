import { Estudiante } from './../Models/estudiante.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
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
}
