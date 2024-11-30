import {Result} from "./common.interface";

export interface Prestamo {
    solicitudId:      number;
    cuotasPendientes: string;
    mora:             number;
    estado:           string;
}

export interface ListaPrestamo extends Prestamo{
    prestamoId:       number;
    usuarioId: number
}

export interface ListaPrestamoResponse extends Result {
    data: ListaPrestamo[];
}

export interface Mora {
    prestamoId: number;
    mora:       number;
}

export interface EstadoPrestamo {
    prestamoId: number;
    estado:     string;
}
