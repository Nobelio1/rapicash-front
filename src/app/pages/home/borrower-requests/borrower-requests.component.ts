import {Component} from '@angular/core';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';

@Component({
  selector: 'app-borrower-requests',
  standalone: true,
  imports: [
    TitlebarComponent,
    TableRequestComponent
  ],
  templateUrl: './borrower-requests.component.html',
  styles: ``
})
export class BorrowerRequestsComponent {

  // ID, NOMBRE, APELLIDO, MONTO, CUOTAS, ESTADO, (OPCIONES)
}
