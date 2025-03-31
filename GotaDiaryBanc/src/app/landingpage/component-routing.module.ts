import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from '../dashboard/main-page/main-page.component';
import { guardaRuta } from '../auth.guards.guard';
import { OperacionesComponent } from '../transacciones/operaciones/operaciones.component';
import { HistoricoComponent } from '../cuentas/historico/historico.component';
import { depositoRetirocomponent } from '../cuentas/depositoRetiro/crear-transaccion.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [guardaRuta]
  },

  {
    path: 'operaciones',
    component :OperacionesComponent,
    canActivate: [guardaRuta]
  },

  {
    path: 'historicoTransacciones',
    component : HistoricoComponent,
    canActivate: [guardaRuta]
  },

  {
    path : "depositoRetiro/:transaccion",
    component : depositoRetirocomponent,
    canActivate: [guardaRuta]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class componentRoutingModule { }