import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/Models/carrera.model';
import { HttpService } from 'src/app/Servicios/http.service';
@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  public carreras:Carrera[];
  public options: number;
  public carrera:Carrera;
  constructor(private service:HttpService) {
    this.carreras =[];
    this.options = 0;
    this.carrera = {nombre:'',duracion_en_annios:1};
  }
  
  ngOnInit(): void {
    
  }
  public ver():void{
    if(this.options != 1){
      this.options = 1;
      this.service.getCarreras().subscribe(data =>{
        this.carreras = data;
      });
    }
  }
  public crear():void{
    this.options = (this.options != 2)?2:this.options;
  }
  public delete(id?:number):void{

  }
  public registrar():void{
    this.service.postCarrera(this.carrera).subscribe(data =>{
      console.log(data);
    });
  }
}
