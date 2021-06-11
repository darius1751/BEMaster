import { Mentor } from './../../Models/mentor.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';

@Component({
  selector: 'app-mentores',
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.css']
})
export class MentoresComponent implements OnInit {

  public options:number;
  public mentores:Mentor[];
  public mentor:Mentor;
  constructor(private servicio:HttpService) { 
    this.options = 0;
    this.mentores = [];
    this.mentor = {nombre:'',documento_identidad:''};
  }
  
  ngOnInit(): void {
  }
  public ver():void{
    if(this.options != 1){
      this.options = 1;
      this.servicio.getMentores().subscribe(data =>{
        this.mentores = data;
      })
    }
  }
  public crear():void{
    this.options = (this.options != 2)?2:this.options;
  }

  public registrar():void{
    this.servicio.postMentor(this.mentor).subscribe(data=>{
      console.log(data);
    })
  }
}
