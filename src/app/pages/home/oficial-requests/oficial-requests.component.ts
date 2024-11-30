import {Component, inject, OnInit} from '@angular/core';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {Solicitud} from "../../../interfaces/solicitud.interface";
import {SolicitudService} from "../../../services/solicitud.service";

@Component({
  selector: 'app-oficial-requests',
  standalone: true,
  imports: [
    TableRequestComponent,
    TitlebarComponent
  ],
  templateUrl: './oficial-requests.component.html',
  styles: ``
})
export class OficialRequestsComponent implements OnInit{
  public solicitudes: Solicitud[] =  []

  private solicitudService = inject(SolicitudService);

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(){
    this.solicitudService.obtenerSolicitudes().subscribe({
      next: (resp) =>
          this.solicitudes = resp.data,
      error: (err: any) => console.log(err)
    })

  }
}
