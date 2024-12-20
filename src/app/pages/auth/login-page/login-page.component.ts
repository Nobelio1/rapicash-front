import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {SesionRequestI} from "../../../interfaces/auth.interface";

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, CommonModule],
    templateUrl: './login-page.component.html',
    styles: ``
})
export class LoginPageComponent implements OnInit {


    private form = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit(): void {
        this.clean()
    }

    public myForm = this.form.group({
        correo: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(3)]],
    });

    login() {
        if (this.myForm.invalid) return;
        const {correo, contrasena} = this.myForm.value;
        const user: SesionRequestI = {correo: correo!, contrasena: contrasena!};

        this.authService.login(user).subscribe({
            next: () => {
                const {rolId} = JSON.parse(localStorage.getItem('user')!);
                switch (rolId) {
                    case 1:
                        this.router.navigateByUrl('/brc/operations')
                        break;
                    case 2:
                        this.router.navigateByUrl('/brc/financial-requests')
                        break;
                    case 3:
                        this.router.navigateByUrl('/brc/credit-requests')
                        break;
                    case 4:
                        this.router.navigateByUrl('/brc/oficial-requests')
                        break;
                }
            },
            error: (message) => console.log('Error', message)
        })
    }

    clean() {
        localStorage.clear()
    }


}
