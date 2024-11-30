import {Component, inject} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SolicitudService} from "../../../services/solicitud.service";
import {ActualizarEstado} from "../../../interfaces/solicitud.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-financial-summary',
    standalone: true,
    imports: [
        SummaryComponent,
        TitlebarComponent,
        CommonModule
    ],
    templateUrl: './financial-summary.component.html',
    styles: ``
})
export class FinancialSummaryComponent {

    private solicitudService = inject(SolicitudService);
    private params = inject(ActivatedRoute)
    private router = inject(Router);

    public documentacion: boolean = false;

    actualizarEstado(opt: number) {
        const estado: ActualizarEstado = {
            solicitudId: +this.params.snapshot.paramMap.get('id')!,
            estadoFinan: ''
        }
        opt === 1 ? estado.estadoFinan = 'APROBADO' : estado.estadoFinan = 'RECHAZADO';

        this.solicitudService.actualizarEstadoFinaciamiento(estado).subscribe(res => {
            this.router.navigate(['brc/financial-requests']);
        });
    }

    verificarDocumentaion(){
        this.documentacion = true;
        setTimeout(() => {
            this.documentacion = false;
        }, 3000)
    }

}
