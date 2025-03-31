import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaServicesService } from 'src/app/services/cuenta-services.service';
import { State_user } from 'src/app/state/State_user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
[x: string]: any;

  constructor(private cuentaService:CuentaServicesService, 
    public state:State_user, 
    private router:Router) { }

  cuenta: any[] = []; 


  ngOnInit(): void {
    this.cuentaService.getCuenta({ idCuenta: 3 }).subscribe((data) => {
      this.state.cuenta = [data]; 
      this.cuenta = [data];
      console.log('Datos en state.cuenta:', this.state.cuenta);
      console.log('Datos en cuenta:', this.cuenta);
    });
  }

  navigateToOperaciones(): void {
    this.router.navigate(['/operaciones']);
  }

}

