import { Component } from '@angular/core';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';

@Component({
  selector: 'app-loan-history',
  standalone: true,
  imports: [
    TableRequestComponent,
    TitlebarComponent
  ],
  templateUrl: './loan-history.component.html',
  styles: ``
})
export class LoanHistoryComponent {

}
