import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    EjerciciosComponent,
    EjercicioComponent,
    EntrenamientosComponent,
    FechaPipe,
    EntrenamientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
