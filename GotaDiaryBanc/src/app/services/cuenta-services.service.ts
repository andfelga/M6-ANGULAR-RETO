import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultacuenta, cuenta } from '../Interfaces/transaction-interface';
import { DepositoRetiro } from '../Interfaces/depositoretiro';

@Injectable({
  providedIn: 'root'
})
export class CuentaServicesService {

  constructor(private http: HttpClient ) { }

  getCuenta(cuenta:Consultacuenta): Observable<cuenta> {
    return this.http.post<cuenta>('http://localhost:8080/cuenta/saldo', cuenta)
  }

  getTransacciones(cuenta:Consultacuenta): Observable<cuenta> {
    return this.http.post<cuenta>('http://localhost:8080/cuenta/transacciones', cuenta)
  }

  postDepositoSucursal(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/depositodesdesucursal', datos)
  }
  

  postDepositoCajero(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/depositodesdecajero', datos)
  }

  postDepositoOtrasCuentas(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/depositodesdeotrascuentas', datos)
  }

  postDepositoEstablecimientofisico(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/depositodesdeestablecimientofisico', datos)
  }

  postDepositoWeb(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/depositodesdepaginaweb', datos)
  }

  postRetiroCajero(datos:DepositoRetiro): Observable<DepositoRetiro> {
    return this.http.post<DepositoRetiro>('http://localhost:8080/transaccion/retiroencajero', datos)
  }
  
}
