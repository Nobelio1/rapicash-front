import {Component, inject, OnInit} from '@angular/core';
import {TitlebarComponent} from '../../../components/titlebar/titlebar.component';
import {SummaryComponent} from '../../../components/summary/summary.component';
import {ContratoService} from "../../../services/contrato.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Contrato, EstadoContrato} from "../../../interfaces/contrato.interface";

@Component({
  selector: 'app-borrower-summary',
  standalone: true,
  imports: [
    TitlebarComponent,
    SummaryComponent,
    CommonModule
  ],
  templateUrl: './borrower-summary.component.html',
  styles: ``
})
export class BorrowerSummaryComponent implements OnInit{

  public contratoE: boolean = false;
  public estadoCerrado: boolean = false;
  public contrato: Contrato = {} as Contrato

  private contratoService = inject(ContratoService)
  private params = inject(ActivatedRoute)

  ngOnInit(): void {
    this.existeContrato()
  }

  existeContrato(){
    const solicitudId = +this.params.snapshot.paramMap.get('id')!;

    this.contratoService.obtenerContrato(solicitudId).subscribe(
      res => {
        if(res.data){
          this.contrato = res.data
          this.contratoE = true

          res.data.estado === 'ACEPTADO' ? this.estadoCerrado = true : this.estadoCerrado = false
        }
      }
    )
  }

  actualizarContrato(opt: number){
    const estado: EstadoContrato = {
      contratoId: this.contrato.contratoId,
      estado: opt === 1 ? 'ACEPTADO' : 'RECHAZADO'
    }
    this.contratoService.actualizarContrato(estado).subscribe({
      next: () => console.log('Contrato actualizado'),
      error: (message) => console.log('Error', message)
    })
  }


}
