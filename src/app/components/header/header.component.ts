import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  public links = [
    { name: 'Inicio', url: '#hero' },
    { name: 'Servicios', url: '#servicios' },
    { name: 'Beneficios', url: '#beneficios' },
    { name: 'Planes', url: '#planes' },
    { name: 'Contacto', url: '#contacto' },
  ];
}
