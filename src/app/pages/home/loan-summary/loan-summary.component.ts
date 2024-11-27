import { Component } from '@angular/core';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';

@Component({
  selector: 'app-loan-summary',
  standalone: true,
  imports: [
    SummaryComponent,
    TitlebarComponent
  ],
  templateUrl: './loan-summary.component.html',
  styles: ``
})
export class LoanSummaryComponent {

}
