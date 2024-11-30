import {Result} from "./common.interface";

export interface UsuarioInfo {
    usuarioId: number;
    correo:    string;
    nombres:   string;
    apellidos: string;
    celular:   string;
    dni:       string;
    direccion: string;
}

export interface UsuarioInfoR extends UsuarioInfo{
    rol: string
}

export interface UsuarioInfoResponse extends Result{
    data: UsuarioInfoR;
}

