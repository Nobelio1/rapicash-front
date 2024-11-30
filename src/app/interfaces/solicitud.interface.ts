import {Result} from "./common.interface";

export interface CrearSolicitud {
    usuarioId:       number;
    estadoLaboralId: number;
    cuotaId:         number;
    nombreEmpresa:   string;
    cargo:           string;
    inMensual:       number;
    monto:           number;
}

export interface Solicitud {
    solicitudId:     number;
    usuarioId:       number;
    estadoLaboralId: number;
    estadoLaboral:   string;
    cuotaId:         number;
    cuota:           string;
    nombreEmpresa:   string;
    cargo:           string;
    inMensual:       number;
    monto:           number;
}

export interface ActualizarEstado {
    solicitudId: number;
    estadoFinan: string;
}

export interface Score {
    hiscreId:  number;
    usuarioId: string;
    score:     number;
    razon:     string;
}

export interface ScoreResponse extends Result{
    data: Score;
}

export interface ListaSolicitudes extends Result{
    data: Solicitud[];
}

export interface SolicitudResponse extends Result{
    data: Solicitud;
}