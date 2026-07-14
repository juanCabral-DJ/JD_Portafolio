import { Component, inject } from '@angular/core';
import { NavbarServices } from '../../../core/services/Navbar.services';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [UpperCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  nav = inject(NavbarServices);
}
