import {Component, inject, OnInit} from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {PagoService} from "../../../services/pago.service";
import {Pagos} from "../../../interfaces/pago.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PrestamoService} from "../../../services/prestamo.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-loan-summary',
    standalone: true,
    imports: [
        SummaryComponent,
        TitlebarComponent,
        CommonModule
    ],
    templateUrl: './loan-summary.component.html',
    styles: ``
})
export class LoanSummaryComponent implements OnInit {

    public pagos: Pagos[] = []
    public mensajeMora: boolean = false

    private pagoService = inject(PagoService)
    private prestamoService = inject(PrestamoService)
    private params = inject(ActivatedRoute)
    private router = inject(Router)

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

    aplicarMora() {
        const prestamoId = +this.params.snapshot.paramMap.get('id')!
        this.prestamoService.actualizarMora({prestamoId: prestamoId, mora: 100}).subscribe({
            next: (data) => {
                this.mensajeMora = true
                setTimeout(() => {
                    this.mensajeMora = false
                }, 3000)
            },
            error: (message) => console.log('Error', message)
        })
    }

    cerrarPrestamo() {
        const prestamoId = +this.params.snapshot.paramMap.get('id')!
        this.prestamoService.actualizarEstado({prestamoId: prestamoId, estado: 'CERRADO'}).subscribe({
            next: (data) => this.router.navigate(['brc/loan-history']),
            error: (message) => console.log('Error', message)
        })
    }

}
