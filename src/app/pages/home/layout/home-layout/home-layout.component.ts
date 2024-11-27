import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../../../components/header/header.component";
import { NavbarComponent } from "../../../../components/navbar/navbar.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './home-layout.component.html',
  styles: ``
})
export default class HomeLayoutComponent {

}
