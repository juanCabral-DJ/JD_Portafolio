import { Component, inject } from '@angular/core';
import { NavbarServices } from '../../../core/services/Navbar.services';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  nav = inject(NavbarServices);
}
