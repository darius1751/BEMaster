import { Estudiante } from './../../Models/estudiante.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public opcion:number;
  public estudiantes:Estudiante[];
  public estudiante:Estudiante;
  constructor(private http:HttpService) { 
    this.estudiantes = [];
    this.estudiante = {nombre:'',documento_identidad:'',fecha_nacimiento:new Date()};
    this.opcion = 1;
  }
  
  ngOnInit(): void {
    
  }
  public ver():void{
    if(this.opcion != 1){
      this.opcion = 1;
      this.http.getEstudiantes().subscribe(data=>{
        this.estudiantes = data;
      },(error)=>{
        console.log('Este es el error:',error);
      }); 
    }
    
  }
  public registrar():void{
    this.opcion = 2;
  }
  public post():void{
    this.http.postEstudiante(this.estudiante).subscribe(data=>{
      console.log(data);  
    })
  }
  public delete(id?:number):void{
    this.http.deleteEstudiante(id).subscribe(data=>{
      this.ver();
    });
    
  }
}
