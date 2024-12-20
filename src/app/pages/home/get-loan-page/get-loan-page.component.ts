import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {SolicitudService} from "../../../services/solicitud.service";
import {CrearSolicitud} from "../../../interfaces/solicitud.interface";
import {UsuarioInfo} from "../../../interfaces/usuario.interface";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-get-loan-page',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './get-loan-page.component.html',
    styles: ``
})
export class GetLoanPageComponent implements OnInit {

    public existeInfo: boolean = false

    private form = inject(FormBuilder);
    private router = inject(Router);
    private usuarioService = inject(UsuarioService);
    private solicitudService = inject(SolicitudService)

    ngOnInit(): void {
        this.validarInfoUsario()
    }

    public datosUsuario = this.form.group({
        nombres: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        celular: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
    });

    public datosPrestamo = this.form.group({
        estadoLaboralId: ['', [Validators.required]],
        cuotaId: ['', [Validators.required]],
        nombreEmpresa: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
        inMensual: ['', [Validators.required]],
        monto: ['', [Validators.required]],
    });

    validarInfoUsario() {
        const {usuarioId} = JSON.parse(localStorage.getItem('user')!)
        this.usuarioService.obtenerInformacion(usuarioId).subscribe({
            next: ({data}) => {
                data.celular ? this.existeInfo = true : this.existeInfo = false
            },
            error: (err) => console.error(err)
        })
    }

    guardarDatosUsuario() {
        if (this.datosUsuario.invalid) return;
        const {usuarioId} = JSON.parse(localStorage.getItem('user')!);

        const {nombres, apellidos, correo, dni, celular, direccion} = this.datosUsuario.value;
        const usuario: UsuarioInfo = {
            usuarioId: usuarioId,
            nombres: nombres!,
            apellidos: apellidos!,
            correo: correo!,
            dni: dni!,
            celular: celular!,
            direccion: direccion!,
        }

        this.usuarioService.guardarInformacion(usuario).subscribe({
            next: (data) => console.log(data.data),
            error: (message) => console.log('Error', message)
        })
    }

    generarSolicitud() {
        if (this.datosPrestamo.invalid) return;

        if(!this.existeInfo){
            this.guardarDatosUsuario()
        }

        const {usuarioId} = JSON.parse(localStorage.getItem('user')!);

        const {estadoLaboralId, cuotaId, nombreEmpresa, cargo, inMensual, monto} = this.datosPrestamo.value;
        const solicitud: CrearSolicitud = {
            usuarioId: usuarioId,
            estadoLaboralId: +estadoLaboralId!,
            cuotaId: +cuotaId!,
            nombreEmpresa: nombreEmpresa!,
            cargo: cargo!,
            inMensual: +inMensual!,
            monto: +monto!,
        }

        this.solicitudService.crearSolicitud(solicitud).subscribe({
            next: (data) =>
                this.router.navigateByUrl("/brc/borrower-requests")
            ,
            error: (message) => console.log('Error', message)
        })
    }

}
