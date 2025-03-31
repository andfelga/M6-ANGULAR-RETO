import { Timestamp } from "rxjs";

export interface Historico{
	transaccionid: number,
	tipotransaccion : string,
	fechatransaccion: Timestamp<Date>
	valortransaccion : number
} 