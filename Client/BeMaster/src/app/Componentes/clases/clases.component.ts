import { Clase } from './../../Models/clases.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  public options:number;
  public clases:Clase[];
  public clase:Clase;
  constructor(private service:HttpService) {
    this.options = 0;
    this.clases =[];
    this.clase = {nombre:'',duracion:''};
  }

  ngOnInit(): void {
  }

  public delete(id?:number):void {

  }
  public ver():void{
    if(this.options != 1){
      this.options = 1;
      this.service.getClase().subscribe(data=>{
        this.clases = data;
      });
    }
  }
  public crear():void{
    this.options = (this.options != 2)?2:this.options;
  } 
  public registrar(): void {
    this.service.postClase(this.clase).subscribe(data =>{
      console.log(data);
    });
  }
}
