import {Result} from "./common.interface";

export interface Pago {
    prestamoId: number;
    monto:      number;
    cuota:      string;
    nroBoleta:  string;
}

export interface Pagos extends Pago{
    pagoId:     number;
    fechaPago:  Date;
}

export interface ListaPagos extends Result {
    data: Pagos[];
}
