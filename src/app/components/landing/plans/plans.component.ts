import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styles: ``
})
export class PlansComponent {

  public plans = [
    {
      id: 1,
      title: 'Nivel 1',
      desc: 'Para usuarios que solicitan sus primeros préstamos',
      range: '$0 - $2K',
      benefits: [
        {id: 1, desc: 'Cero intereses'},
        {id: 2, desc: 'Hasta en 12 cuotas'},
        {id: 3, desc: 'Seguro anti-robos'},
        {id: 4, desc: 'Accede a beneficios exclusivos'}
      ]
    },
    {
      id: 2,
      title: 'Nivel 2',
      desc: 'Excelente para usuarios que busquen capitales',
      range: '$2K - $6K',
      benefits: [
        {id: 1, desc: 'Cero intereses'},
        {id: 2, desc: 'Hasta en 24 cuotas'},
        {id: 3, desc: 'Seguro anti-robos'},
        {id: 4, desc: 'Accede a beneficios exclusivos'}
      ]
    },
    {
      id: 3,
      title: 'Nivel 3',
      desc: 'Orientado a usurios que buscan emprender',
      range: '$6K - $10K',
      benefits: [
        {id: 1, desc: 'Cero intereses'},
        {id: 2, desc: 'Hasta en 36 cuotas'},
        {id: 3, desc: 'Seguro anti-robos'},
        {id: 4, desc: 'Accede a beneficios exclusivos'}
      ]
    },
  ]
}
