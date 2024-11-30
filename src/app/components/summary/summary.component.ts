import {Component, inject, Input, OnInit} from '@angular/core';
import {SolicitudService} from "../../services/solicitud.service";
import {ActivatedRoute} from "@angular/router";
import {Solicitud} from "../../interfaces/solicitud.interface";
import {UsuarioService} from "../../services/usuario.service";
import {UsuarioInfo} from "../../interfaces/usuario.interface";
import {CommonModule} from "@angular/common";
import {Pagos} from "../../interfaces/pago.interface";
import {PrestamoService} from "../../services/prestamo.service";

@Component({
    selector: 'cpt-summary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './summary.component.html',
    styles: ``
})
export class SummaryComponent implements OnInit {

    public solicitud: Solicitud = {} as Solicitud
    public usuario: UsuarioInfo = {} as UsuarioInfo
    public moraApicada: number = 0
    public montoRestante: number = 0
    public montoTotal: number = 0

    @Input() reportePrestamo: boolean = false
    @Input() pagos: Pagos[] = []

    private solicitudService = inject(SolicitudService)
    private usuarioService = inject(UsuarioService)
    private prestamoService = inject(PrestamoService)
    private params = inject(ActivatedRoute)

    ngOnInit(): void {
        this.traerSolicitud()
        this.aplicarMora()
    }

    traerSolicitud() {
        const solicitudId = +this.params.snapshot.paramMap.get('id')!;

        this.solicitudService.obtenerSolicitud(solicitudId).subscribe({
            next: (data) => {
                this.solicitud = data.data
                this.usuarioService.obtenerInformacion(data.data.usuarioId).subscribe({
                    next: (data) => this.usuario = data.data,
                    error: (message) => console.log('Error', message)
                })
            },
            error: (message) => console.log('Error', message)
        })
    }

    aplicarMora() {
        const solicitudId = +this.params.snapshot.paramMap.get('id')!;

        this.prestamoService.obtenerPrestamos().subscribe({
            next: (data) => {
                this.moraApicada = data.data.find(prestamo => prestamo.prestamoId === solicitudId)?.mora || 0
                this.valoresRestantes()
            },
            error: (message) => console.log('Error', message)
        })
    }

    valoresRestantes(){
        const montoPagados = this.pagos.reduce((acc, item) => acc + item.monto, 0)
        this.montoRestante = (this.solicitud.monto + this.solicitud.monto*0.2) - montoPagados

        this.montoTotal = this.montoRestante + this.moraApicada
    }

}
