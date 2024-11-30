import {Component, inject, OnInit} from '@angular/core';
import {TitlebarComponent} from "../../../components/titlebar/titlebar.component";
import {CommonModule} from "@angular/common";
import {Notificaciones} from "../../../interfaces/notificacion.interface";
import {NotificacionService} from "../../../services/notificacion.service";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    TitlebarComponent, CommonModule
  ],
  templateUrl: './notifications.component.html',
  styles: ``
})
export class NotificationsComponent implements OnInit {

  public notification: Notificaciones[]= []

  private notificacionService = inject(NotificacionService)

  ngOnInit() {
    this.listarNotificaciones();
  }

   listarNotificaciones() {
    const {usuarioId} = JSON.parse(localStorage.getItem('user')!)
    this.notificacionService.listarNoticacionesPorUsuario(usuarioId).subscribe({
      next: (data) => this.notification = data.data,
      error: err => console.log(err)
    })

  }



}
