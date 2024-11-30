import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {EstadoPrestamo, ListaPrestamoResponse, Mora, Prestamo} from "../interfaces/prestamo.interface";
import {ResponseDefault} from "../interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public crearPrestamo(prestamo: Prestamo){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/prestamo/crear`, prestamo);
  }

  public obtenerPrestamos(){
    return this.http.get<ListaPrestamoResponse>(`${this.baseUrl}/prestamo/listar`);
  }

  public actualizarMora(mora: Mora){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/prestamo/actualizar-mora`, mora);
  }

  public actualizarEstado(estado: EstadoPrestamo ){
    return this.http.put<ResponseDefault>(`${this.baseUrl}/prestamo/actualizar-estado`, estado);
  }

}
