import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-operations-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './operations-page.component.html',
  styles: ``
})
export class OperationsPageComponent {

  public operations = [
    {
      title: 'Solcita un Préstamo',
      description: 'Solicita un préstamo personal en línea y recibe tu dinero en minutos.',
      route: '/brc/loan'
    },
    {
      title: 'Paga tus deudas',
      description: 'Paga tus deudas con un préstamo personal.',
      route: '/brc/pay'
    },
  ]
}
