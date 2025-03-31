import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { componentRoutingModule } from './component-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from '../dashboard/main-page/main-page.component';
import { BodyComponent } from './body/body.component';
import { OperacionesComponent } from '../transacciones/operaciones/operaciones.component';
import { HistoricoComponent } from '../cuentas/historico/historico.component';
import { depositoRetirocomponent } from '../cuentas/depositoRetiro/crear-transaccion.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MainPageComponent,
    BodyComponent,
    OperacionesComponent,
    HistoricoComponent,
    depositoRetirocomponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    componentRoutingModule,
    HttpClientModule
    
  ],

  exports: [
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class LandingpageModule { }
