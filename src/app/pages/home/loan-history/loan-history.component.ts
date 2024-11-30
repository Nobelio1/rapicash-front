import {Component, inject, OnInit} from '@angular/core';
import {TableRequestComponent} from '../../../components/table-request/table-request.component';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {PrestamoService} from "../../../services/prestamo.service";
import {ListaPrestamo} from "../../../interfaces/prestamo.interface";

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
export class LoanHistoryComponent implements OnInit{

  public prestamos:ListaPrestamo[] = []

  private prestamoService = inject(PrestamoService)


  ngOnInit(): void {
    this.listarPrestamos()
  }

  listarPrestamos() {
    this.prestamoService.obtenerPrestamos().subscribe({
      next: ({data}) => {
        const {rolId, usuarioId} = JSON.parse(localStorage.getItem(('user'))!)

        if(rolId === 1){
          this.prestamos = data.filter(prestamo => prestamo.usuarioId === usuarioId )
          console.log(this.prestamos)
        }else {
          this.prestamos = data
        }
      },
      error: (message) => console.log('Error', message)
    })
  }
}
