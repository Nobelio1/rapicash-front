import {Component, inject, Input} from '@angular/core';
import {Solicitud} from "../../interfaces/solicitud.interface";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'cpt-table-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-request.component.html',
  styles: ``
})
export class TableRequestComponent {

  @Input() solicitudes: Solicitud[] = [];

  private router = inject(Router);

  verSoliciutd(id: number){
    const {rolId} = JSON.parse(localStorage.getItem('user')!);

    switch (rolId) {
      case 1:
        this.router.navigate([`brc/bSummary/${id}`]);
        break;
      case 2:
        this.router.navigate([`brc/fSummary/${id}`]);
        break;
      case 3:
        this.router.navigate([`brc/cSummary/${id}`]);
        break;
      case 4:
        this.router.navigate([`brc/oSummary/${id}`]);
        break;
    }

  }

}
