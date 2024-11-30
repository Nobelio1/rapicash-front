import {Component, inject} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActivatedRoute} from "@angular/router";
import {ContratoService} from "../../../services/contrato.service";
import {PrestamoService} from "../../../services/prestamo.service";
import {Prestamo} from "../../../interfaces/prestamo.interface";

@Component({
  selector: 'app-oficial-summary',
  standalone: true,
  imports: [
    SummaryComponent,
    TitlebarComponent
  ],
  templateUrl: './oficial-summary.component.html',
  styles: ``
})
export class OficialSummaryComponent {

  private solicitudService = inject(SolicitudService);
  private contratoService = inject(ContratoService);
  private prestamoService = inject(PrestamoService);
  private params = inject(ActivatedRoute);

  generarContrato(){
    const solicitudId = +this.params.snapshot.paramMap.get('id')!;
    this.contratoService.generarContraro(solicitudId).subscribe(res => {
      console.log(res);
    });
  }

  finalizarSolicitud(){
    const estado = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      estadoFinan: 'FINALIZADO'
    }
    this.solicitudService.actualizarEstadoFinal(estado).subscribe(res => {
      console.log(res);
      this.crearPrestamo()
    });
  }

  crearPrestamo(){
    const solicitudId = +this.params.snapshot.paramMap.get('id')!;
    const nuevoPrestamo: Prestamo = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      cuotasPendientes: '12',
      mora: 0,
      estado: 'ACTIVO',
    }
    this.prestamoService.crearPrestamo(nuevoPrestamo).subscribe(res => {
      console.log(res);
    });
  }
}
