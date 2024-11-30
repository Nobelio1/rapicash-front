import {Component, inject, OnInit} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActivatedRoute, Router} from "@angular/router";
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
export class OficialSummaryComponent implements OnInit{

  public contratoEstado: boolean = false;
  public solitudEstado: boolean = false;

  private solicitudService = inject(SolicitudService);
  private contratoService = inject(ContratoService);
  private prestamoService = inject(PrestamoService);
  private params = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.validarSolicitud();
  }

  validarSolicitud(){
    this.solicitudService.obtenerSolicitud(+this.params.snapshot.paramMap.get('id')!).subscribe(res => {
      if(res.data.estadoFinal === 'FINALIZADO'){
        this.solitudEstado = true;
      }
    })
  }

  generarContrato(){
    const solicitudId = +this.params.snapshot.paramMap.get('id')!;
    this.contratoService.generarContraro(solicitudId).subscribe(res => {
      this.contratoEstado = true;
        setTimeout(() => {
            this.contratoEstado = false;
        }, 5000)
    });
  }

  finalizarSolicitud(){
    const estado = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      estadoFinan: 'FINALIZADO'
    }
    this.solicitudService.actualizarEstadoFinal(estado).subscribe(res => {
      this.crearPrestamo()
    });
  }

  crearPrestamo(){
    const nuevoPrestamo: Prestamo = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      cuotasPendientes: '12',
      mora: 0,
      estado: 'ACTIVO',
    }
    this.prestamoService.crearPrestamo(nuevoPrestamo).subscribe(res => {
      this.router.navigate(['brc/loan-history']);
    });
  }
}
