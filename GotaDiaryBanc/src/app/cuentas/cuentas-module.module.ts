import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoComponent } from './historico/historico.component';
import { CrearTransaccionComponent } from './depositoRetiro/crear-transaccion.component';



@NgModule({
  declarations: [
  
    CrearTransaccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CuentasModuleModule { }
