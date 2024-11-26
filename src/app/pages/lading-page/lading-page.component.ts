import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/landing/hero/hero.component';
import { ServicesComponent } from '../../components/landing/services/services.component';
import { BenefitsComponent } from '../../components/landing/benefits/benefits.component';
import { PlansComponent } from '../../components/landing/plans/plans.component';
import { ContactComponent } from "../../components/landing/contact/contact.component";

@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    BenefitsComponent,
    PlansComponent,
    ContactComponent
],
  templateUrl: './lading-page.component.html',
  styles: ``,
})
export class LadingPageComponent {}
