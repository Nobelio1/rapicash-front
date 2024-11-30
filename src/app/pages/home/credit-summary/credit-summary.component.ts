import {Component, inject} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActivatedRoute} from "@angular/router";
import {ActualizarEstado} from "../../../interfaces/solicitud.interface";

@Component({
  selector: 'app-credit-summary',
  standalone: true,
  imports: [
    SummaryComponent,
    TitlebarComponent
  ],
  templateUrl: './credit-summary.component.html',
  styles: ``
})
export class CreditSummaryComponent {
  private solicitudService = inject(SolicitudService);
  private params = inject(ActivatedRoute)

  actualizarEstado(opt: number){
    const estado : ActualizarEstado = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      estadoFinan: ''
    }
    opt === 1 ? estado.estadoFinan = 'APROBADO' : estado.estadoFinan = 'RECHAZADO';

    this.solicitudService.actualizarEstadoCredito(estado).subscribe(res => {
      console.log(res);
    });
  }

  emitirScore(){
    const {usuarioId} = JSON.parse(localStorage.getItem('user')!);
    this.solicitudService.obtenerScore(usuarioId).subscribe(res => {
      console.log(res);
    });

  }
}
