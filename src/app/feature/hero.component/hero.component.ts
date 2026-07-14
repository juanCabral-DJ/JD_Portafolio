import { Component, inject, signal } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge.component/badge.component";
import { NavbarServices } from '../../core/services/Navbar.services';

@Component({
  selector: 'app-hero',
  imports: [BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public readonly slogan = signal<string>("AVAILABLE FOR NEW OPPORTUNITIES");
  nav = inject(NavbarServices);
}
