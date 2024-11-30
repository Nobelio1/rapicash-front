import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../config/env";
import {ListaPagos, Pago} from "../interfaces/pago.interface";
import {ResponseDefault} from "../interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private http = inject(HttpClient);
  private baseUrl = environments.API_URL;

  public agregarPago(pago: Pago){
    return this.http.post<ResponseDefault>(`${this.baseUrl}/pago/agregar`, pago);
  }

  public listarPagosPorPrestamo(prestamoId: number){
    return this.http.get<ListaPagos>(`${this.baseUrl}/pago/prestamo/${prestamoId}`);
  }

}
