import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HogarComponent } from './Componentes/hogar/hogar.component';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import { CarrerasComponent } from './Componentes/carreras/carreras.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MentoresComponent } from './Componentes/mentores/mentores.component';
import { AsignarClasesMentorComponent } from './Componentes/asignar-clases-mentor/asignar-clases-mentor.component';
import { ClasesComponent } from './Componentes/clases/clases.component';

@NgModule({
  declarations: [
    AppComponent,
    HogarComponent,
    EstudiantesComponent,
    CarrerasComponent,
    MentoresComponent,
    AsignarClasesMentorComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
