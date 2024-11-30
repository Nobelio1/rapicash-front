import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {UsuarioInfo, UsuarioInfoResponse} from "../interfaces/usuario.interface";
import {ResponseDefault} from "../interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public obtenerInformacion(id: number){
    return this.http.get<UsuarioInfoResponse>(`${this.baseUrl}/usuario/informacion/${id}`);
  }

  public guardarInformacion(usuario: UsuarioInfo){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/usuario/guardar-informacion`, usuario);
  }
}
