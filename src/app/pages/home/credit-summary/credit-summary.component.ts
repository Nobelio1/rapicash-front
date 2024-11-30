import {Component, inject} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActualizarEstado, Score} from "../../../interfaces/solicitud.interface";

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
  public score: boolean = false;
  public scoreData: Score = {} as Score;

  private solicitudService = inject(SolicitudService);
  private params = inject(ActivatedRoute)
  private router = inject(Router);


  actualizarEstado(opt: number){
    const estado : ActualizarEstado = {
      solicitudId: +this.params.snapshot.paramMap.get('id')!,
      estadoFinan: ''
    }
    opt === 1 ? estado.estadoFinan = 'APROBADO' : estado.estadoFinan = 'RECHAZADO';

    this.solicitudService.actualizarEstadoCredito(estado).subscribe(res => {
      this.router.navigate(['brc/credit-requests'])
    });
  }

  emitirScore(){
    const {usuarioId} = JSON.parse(localStorage.getItem('user')!);
    this.solicitudService.obtenerScore(usuarioId).subscribe(res => {
      this.scoreData = res.data;
      this.score = true;
      setTimeout(() => {
        this.score = false;
      }, 3000)
    });
  }
}
