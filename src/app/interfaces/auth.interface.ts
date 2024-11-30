import {Result} from "./common.interface";

export interface SesionRequestI {
    correo: string;
    contrasena: string;
}

export interface SesionResponseI extends Result {
    data: User
}

export interface User {
    usuarioId: number
    rolId: number
    rolNombre: string
}

