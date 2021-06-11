import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasComponent } from './Componentes/carreras/carreras.component';
import { ClasesComponent } from './Componentes/clases/clases.component';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import {HogarComponent} from './Componentes/hogar/hogar.component';
import { MentoresComponent } from './Componentes/mentores/mentores.component';
const routes: Routes = [
  {path:'',component:HogarComponent},
  {path:'carreras',component:CarrerasComponent},
  {path:'estudiantes',component:EstudiantesComponent},
  {path:'mentores',component:MentoresComponent},
  {path:'clases',component:ClasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
