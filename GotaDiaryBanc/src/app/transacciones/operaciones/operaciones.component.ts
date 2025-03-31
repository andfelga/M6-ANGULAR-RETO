import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State_user } from 'src/app/state/State_user';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  operaciones: string[] = [
    'Consulta de transacciones',
    'Déposito desde sucursal fisica',
    'Déposito desde WEB',
    'Déposito desde otras cuentas',
    'Déposito desde cajero',
    'Retiro'
  ];

  transaccion: number | undefined;

  constructor(public router: Router, private userState: State_user) { }

  handleOperacion(index: number): void {
    switch (index) {
      case 0:
        this.consultaTransacciones(index);
        break;
      case 1:
        this.depositoSucursal(index);
        break;
      case 2:
        this.depositoWeb(index);
        break;
      case 3:
        this.depositodesdeOtrasCuentas(index);
        break;
      case 4:
        this.depositodesdeCajero(index);
        break;
      case 5:
        this.retiro(index);
        break;
      default:
        console.log('Operación no definida');
    }
    this.transaccion = index;

  }
  consultaTransacciones(transaccion:number): void {
    this.router.navigate(['/historicoTransacciones']);
    console.log('Consulta de transacciones realizada');

  }

  depositoSucursal(transaccion:number): void {
    this.router.navigate(['/depositoRetiro', transaccion]);
    console.log('Depósito desde sucursal física realizado');

  }

  depositoWeb(transaccion:number): void {
    this.router.navigate(['/depositoRetiro', transaccion]);
    console.log('Depósito desde WEB realizado');

  }

  depositodesdeOtrasCuentas(transaccion:number): void {
    this.router.navigate(['/depositoRetiro', transaccion]);
    console.log('Depósito desde otras cuentas realizado');

  }

  depositodesdeCajero(transaccion:number): void {
    this.router.navigate(['/depositoRetiro', transaccion]);
    console.log('Depósito desde cajero realizado');

  }

  retiro(transaccion:number): void {
    this.router.navigate(['/depositoRetiro', transaccion]);
    console.log('Retiro realizado');

  }
}
