import {Component, inject, OnInit} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {PagoService} from "../../../services/pago.service";
import {Pagos} from "../../../interfaces/pago.interface";
import {ActivatedRoute} from "@angular/router";
import {PrestamoService} from "../../../services/prestamo.service";

@Component({
  selector: 'app-loan-summary',
  standalone: true,
  imports: [
    SummaryComponent,
    TitlebarComponent
  ],
  templateUrl: './loan-summary.component.html',
  styles: ``
})
export class LoanSummaryComponent implements OnInit{

  public pagos: Pagos[] = []

  private pagoService = inject(PagoService)
  private prestamoService = inject(PrestamoService)
  private params = inject(ActivatedRoute)

  ngOnInit(): void {
    this.listarPagos()
  }

  listarPagos() {
    const prestamoId = +this.params.snapshot.paramMap.get('id')!
    this.pagoService.listarPagosPorPrestamo(prestamoId).subscribe({
      next: (data) => this.pagos = data.data,
      error: (message) => console.log('Error', message)
    })
  }

  aplicarMora(){
    const prestamoId = +this.params.snapshot.paramMap.get('id')!
    this.prestamoService.actualizarMora({prestamoId: prestamoId, mora: 100}).subscribe({
      next: (data) => console.log('Mora aplicada', data),
      error: (message) => console.log('Error', message)
    })
  }

  cerrarPrestamo(){
    const prestamoId = +this.params.snapshot.paramMap.get('id')!
    this.prestamoService.actualizarEstado({prestamoId: prestamoId, estado: 'CERRADO'}).subscribe({
      next: (data) => console.log('Prestamo cerrado', data),
      error: (message) => console.log('Error', message)
    })
  }

}
