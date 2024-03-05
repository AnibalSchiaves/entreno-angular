import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"ejercicios", component:EjerciciosComponent},
  {path:"ejercicios/nuevo", component:EjercicioComponent},
  {path:"ejercicios/:id", component:EjercicioComponent},
  {path:"entrenamientos", component:EntrenamientosComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
