import {Component, Input} from '@angular/core';

@Component({
  selector: 'cpt-titlebar',
  standalone: true,
  imports: [],
  templateUrl: './titlebar.component.html',
  styles: ``
})
export class TitlebarComponent {

  @Input() title: string = '';

}
