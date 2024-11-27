import { Component } from '@angular/core';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';

@Component({
  selector: 'app-financial-requests',
  standalone: true,
  imports: [
    TableRequestComponent,
    TitlebarComponent
  ],
  templateUrl: './financial-requests.component.html',
  styles: ``
})
export class FinancialRequestsComponent {

}
