import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaServicesService } from 'src/app/services/cuenta-services.service';
import { State_user } from 'src/app/state/State_user';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  constructor(private cuentaService:CuentaServicesService, 
      public state:State_user, 
      private router:Router) { }

  historico: any[] = [];

  

  ngOnInit(): void {
    this.cuentaService.getTransacciones({ idCuenta: 3 }).subscribe((data: any) => {
      this.historico = Array.isArray(data) ? data : [];
      console.log('Datos en historico:', this.historico );
    
    }); 
  }
  }


