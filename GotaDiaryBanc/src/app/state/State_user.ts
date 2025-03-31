import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { cuenta } from "../Interfaces/transaction-interface";
import { Historico } from "../Interfaces/Historia_transaction";
import { DepositoRetiro } from "../Interfaces/depositoretiro";
import { Respuesta } from "../Interfaces/RespuestaTransaccion";

@Injectable({
  providedIn: 'root'
})

export class State_user {
  private _emailuser = new BehaviorSubject<string>('');
  private _password = new BehaviorSubject<string>('');
  private _cuenta = new BehaviorSubject<cuenta[]>([]);
  private _historico = new BehaviorSubject<Historico[]>([]);
  private _tipoTransaccion = new BehaviorSubject<number>(0);
  private _respuestaTRansaccion = new BehaviorSubject<Respuesta[]>([]);


  get emailuser$(): Observable<string> {
    return this._emailuser.asObservable();
  }

  set emailuser(value: string) {
    this._emailuser.next(value);
  }

  get password$(): Observable<string> {
    return this._password.asObservable();
  }

  set password(value: string) {
    this._password.next(value);
  }

  get cuenta$(): Observable<cuenta[]> {
    return this._cuenta.asObservable();
  }

  set cuenta(value: cuenta[]) {
    this._cuenta.next(value);
  }

  get historico$(): Observable<Historico[]> {
    return this._historico.asObservable();
  }

  set historico(value: Historico[]) {
    this._historico.next(value);
  }

  get tipoTransaccion$(): Observable<number> {
    return this._tipoTransaccion.asObservable();
  }
  set tipoTransaccion(value: number) {  
    this._tipoTransaccion.next(value);
  }

  get respuestaTRansaccion$(): Observable<Respuesta[]>{
    return this._respuestaTRansaccion.asObservable();
  }

  set respuestaTRansaccion(value:Respuesta){
    this._respuestaTRansaccion.next([value]);
  }

  

  

}