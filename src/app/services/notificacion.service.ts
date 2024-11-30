import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {Notificacion, NotificacionResponse} from "../interfaces/notificacion.interface";
import {ResponseDefault} from "../interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public crearNotificacion(notificacion: Notificacion){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/notificacion/crear`, notificacion);
  }

  public listarNoticacionesPorUsuario(id: number){
    return this.http.get<NotificacionResponse>(`${this.baseUrl}/notificacion/${id}`);
  }

}
