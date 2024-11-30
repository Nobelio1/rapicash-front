import {Component, inject} from '@angular/core';
import {TitlebarComponent} from "../../../components/titlebar/titlebar.component";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {PagoService} from "../../../services/pago.service";
import {Pago} from "../../../interfaces/pago.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-pay',
    standalone: true,
    imports: [
        TitlebarComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './pay.component.html',
    styles: ``
})
export class PayComponent {
    private form = inject(FormBuilder);
    private pagoService = inject(PagoService);

    private router = inject(Router);

    public pagoForm = this.form.group({
        prestamoId: ['', [Validators.required]],
        monto: ['', [Validators.required]],
        cuota: ['', [Validators.required]],
        nroBoleta: ['', [Validators.required]],
    });

    pagar() {
        if (this.pagoForm.invalid) return;
        const {prestamoId, monto, cuota, nroBoleta} = this.pagoForm.value;

        const pago: Pago = {
            prestamoId: +prestamoId!,
            monto: +monto!,
            cuota: cuota!,
            nroBoleta: nroBoleta!
        }

        this.pagoService.agregarPago(pago).subscribe({
            next: () => {
                this.router.navigate(['brc/loan-history'])
            },
            error: (message) => console.log('Error', message)
        })
    }


}
