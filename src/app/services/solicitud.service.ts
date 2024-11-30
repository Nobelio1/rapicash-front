import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {
  ActualizarEstado,
  CrearSolicitud,
  ListaSolicitudes,
  ScoreResponse,
  SolicitudResponse
} from "../interfaces/solicitud.interface";
import {ResponseDefault} from "../interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public crearSolicitud(solicitud: CrearSolicitud){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/solicitud/crear`, solicitud);
  }

  public obtenerSolicitudes(){
    return this.http.get<ListaSolicitudes>(`${this.baseUrl}/solicitud/listar`);
  }

  public obtenerSolicitud(id: number){
    return this.http.get<SolicitudResponse>(`${this.baseUrl}/solicitud/${id}`);
  }

  public actualizarEstadoFinaciamiento(estado: ActualizarEstado){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/solicitud/actualizar-estado-finan`, estado);
  }

  public actualizarEstadoCredito(estado: ActualizarEstado){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/solicitud/actualizar-estado-credito`, estado);
  }

  public actualizarEstadoFinal(estado: ActualizarEstado){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/solicitud/actualizar-estado-final`, estado);
  }

  public obtenerScore(id: number){
    return this.http.get<ScoreResponse>(`${this.baseUrl}/solicitud/score/${id}`);
  }

}
