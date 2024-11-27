import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  public sidebarMenuLinks = [
    {
      id: 2,
      name: 'Operaciones',
      disable: true,
      route: '',
    },
    {
      id: 3,
      name: 'Mis Solicitudes',
      disable: false,
      route: 'operations/loan',
    },
  ];

  public sidebarOptionsLinks = [

    {
      id: 2,
      name: 'Cerrar Sesión',
      disable: false,
      route: '',
    },
  ];
}
