import {CommonModule} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {sidebarLink} from "../../interfaces/sidebar.interface";
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule,RouterLink],
    templateUrl: './sidebar.component.html',
    styles: ``,
})
export class SidebarComponent implements OnInit {

    public prestarioLinks: sidebarLink[] = [
        {
            id: 1,
            name: 'Operaciones',
            route: 'operations',
        },
        {
            id: 2,
            name: 'Mis Solicitudes',
            route: 'borrower-requests',
        },
        {
            id: 3,
            name: 'Pagar Prestamo',
            route: 'pay',
        },
        {
            id: 4,
            name: 'Notificaciones',
            route: 'notifications',

        },
    ];

    public analistaFinancieroLinks: sidebarLink[] = [
        {
            id: 1,
            name: 'Tabla de Soliciudes',
            route: 'financial-requests',
        },
    ];

    public analistaCreditoLinks: sidebarLink[] = [
        {
            id: 1,
            name: 'Tabla de Soliciudes',
            route: 'credit-requests',
        },
    ];

    public oficialCreditoLinks: sidebarLink[] = [
        {
            id: 1,
            name: 'Tabla de Soliciudes',
            route: 'oficial-requests',
        },
        {
            id: 1,
            name: 'Tabla de Prestamos',
            route: 'loan-history',
        },
    ];

    public sidebarMenuLinks: sidebarLink[] = []

    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit(): void {
        this.validarUsuario();
    }

    validarUsuario() {
        const user = localStorage.getItem('user');
        const {rolId} = JSON.parse(user!)

        switch (rolId) {
            case 1:
                this.sidebarMenuLinks = this.prestarioLinks;
                break;
            case 2:
                this.sidebarMenuLinks = this.analistaFinancieroLinks;
                break;
            case 3:
                this.sidebarMenuLinks = this.analistaCreditoLinks;
                break;
            case 4:
                this.sidebarMenuLinks = this.oficialCreditoLinks;
                break;
            default:
                break
        }

    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth/login');
    }



}
