import {Component, inject} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActualizarEstado} from "../../../interfaces/solicitud.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-financial-summary',
  standalone: true,
  imports: [
    SummaryComponent,
    TitlebarComponent
  ],
  templateUrl: './financial-summary.component.html',
  styles: ``
})
export class FinancialSummaryComponent {

  private solicitudService = inject(SolicitudService);
  private params = inject(ActivatedRoute)

  actualizarEstado(opt: number){
    const estado : ActualizarEstado = {
        solicitudId: +this.params.snapshot.paramMap.get('id')!,
        estadoFinan: ''
    }
    opt === 1 ? estado.estadoFinan = 'APROBADO' : estado.estadoFinan = 'RECHAZADO';

    this.solicitudService.actualizarEstadoFinaciamiento(estado).subscribe(res => {
      console.log(res);
    });
  }

}
