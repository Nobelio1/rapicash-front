import {Result} from "./common.interface";

export interface Notificacion {
    usuarioId:   number;
    titulo:      string;
    descripcion: string;
}

export interface Notificaciones {
    notificacionId: number;
    titulo:         string;
    descripcion:    string;
    fechaCreacion:  Date;
}

export interface NotificacionResponse extends Result{
    data: Notificaciones[];
}