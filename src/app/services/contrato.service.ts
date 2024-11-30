import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {ResponseDefault} from "../interfaces/common.interface";
import {ContratoResponse, EstadoContrato} from "../interfaces/contrato.interface";

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public generarContraro(solicitudId: number) {
    return this.http.get<ResponseDefault>(`${this.baseUrl}/contrato/generar/${solicitudId}`)
  }

  public obtenerContrato(solicitudId: number){
    return this.http.get<ContratoResponse>(`${this.baseUrl}/contrato/${solicitudId}`)
  }

  public actualizarContrato(estado: EstadoContrato){
    return this.http.post<ContratoResponse>(`${this.baseUrl}/contrato/actualizar`, estado)
  }

}
