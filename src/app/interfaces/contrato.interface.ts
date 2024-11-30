import {Result} from "./common.interface";

export interface Contrato {
    contratoId:    number;
    solicitudId:   number;
    fechaPago:     Date;
    estado:        string;
    fechaCreacion: Date;
}

export interface EstadoContrato {
    contratoId: number;
    estado:     string;
}

export interface ContratoResponse extends Result {
    data: Contrato;
}