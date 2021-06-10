import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasComponent } from './Componentes/carreras/carreras.component';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import {HogarComponent} from './Componentes/hogar/hogar.component';
const routes: Routes = [
  {path:'',component:HogarComponent},
  {path:'carreras',component:CarrerasComponent},
  {path:'estudiantes',component:EstudiantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
