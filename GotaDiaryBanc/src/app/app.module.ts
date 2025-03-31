import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './transacciones/operaciones/operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
