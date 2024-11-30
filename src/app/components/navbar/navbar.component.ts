import {Component, inject, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {UsuarioInfo} from "../../interfaces/usuario.interface";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent implements OnInit {

  public usuario = {
    nombre: '',
    rol: ''
  };

  private usuarioService = inject(UsuarioService);

  ngOnInit(): void {
    this.obtenerInformacionUsuario();
  }

  obtenerInformacionUsuario(){

    const {usuarioId, rolNombre} = JSON.parse(localStorage.getItem('user')!)

    if (!usuarioId) {
      console.error('No se encontró información del usuario en localStorage');
      return;
    }

    this.usuarioService.obtenerInformacion(usuarioId).subscribe({
      next: (usuario) => {
        if(usuario.data === null){
          this.usuario = {
            nombre: 'CLIENTE',
            rol: rolNombre
          }
          return;
        }

        this.usuario = {
          nombre: `${usuario.data.nombres} ${usuario.data.apellidos}` ,
          rol: usuario.data.rol,
        };
      },
      error: (err) => {
        console.error('Error al obtener la información del usuario:', err);
      }});
  }
}
