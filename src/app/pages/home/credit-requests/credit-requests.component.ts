import { Component } from '@angular/core';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';

@Component({
  selector: 'app-credit-requests',
  standalone: true,
  imports: [
    TableRequestComponent,
    TitlebarComponent
  ],
  templateUrl: './credit-requests.component.html',
  styles: ``
})
export class CreditRequestsComponent {

}
