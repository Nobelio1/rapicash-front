import {Component, inject, OnInit} from '@angular/core';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {Solicitud} from "../../../interfaces/solicitud.interface";

@Component({
  selector: 'app-borrower-requests',
  standalone: true,
  imports: [
    TitlebarComponent,
    TableRequestComponent
  ],
  templateUrl: './borrower-requests.component.html',
  styles: ``
})
export class BorrowerRequestsComponent implements OnInit {

  public solicitudesPretario: Solicitud[] =  []

  private solicitudService = inject(SolicitudService);


  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(){
    const {usuarioId} = JSON.parse(localStorage.getItem('user')!);
    this.solicitudService.obtenerSolicitudes().subscribe({
        next: (resp) =>
            this.solicitudesPretario = resp.data.filter((solicitud: Solicitud) => solicitud.usuarioId === usuarioId),
        error: (err: any) => console.log(err)
    })

  }



}
