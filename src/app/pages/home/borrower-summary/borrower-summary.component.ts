import { Component } from '@angular/core';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SummaryComponent} from '../../../components/summary/summary.component';

@Component({
  selector: 'app-borrower-summary',
  standalone: true,
  imports: [
    TitlebarComponent,
    SummaryComponent
  ],
  templateUrl: './borrower-summary.component.html',
  styles: ``
})
export class BorrowerSummaryComponent {

}
