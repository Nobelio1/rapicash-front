import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {

  public services = [
    {
      id:1,
      title: 'Brindamos prestamos seguros y rápido',
      img: 'dinero.png',
      desc: 'Ingresando a nuestra plataforma y solicita un prestamo, menos de 24 hora un asesor le mandará su reporte',
      points: [
        {
          id: 1,
          point: 'Interes bajo'
        },
        {
          id: 2,
          point: 'Contamos con recordatorios para estes al día en tus pagos'
        },
        {
          id: 3,
          point: 'Hasta prestamos de 10,000 PEN'
        }
      ]
    },
    {
      id:2,
      title: 'Prueba nuestra plataforma',
      img: 'plataforma.png',
      desc: 'Contamos con una plataforma donde podrás ver el estado de tus prestamos, pagos y más',
      points: [
        {
          id: 1,
          point: 'Obtener su score crediticio'
        },
        {
          id: 2,
          point: 'Registra tus pagos y llevate recompensas'
        },
        {
          id: 3,
          point: 'Contacta a un asesor en linea'
        }
      ]
    }

  ]

}
