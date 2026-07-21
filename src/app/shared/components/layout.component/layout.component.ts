import { Component, ElementRef, inject } from '@angular/core';
import { NavbarServices } from '../../../core/services/Navbar.services';
import { NavbarComponent } from '../navbar.component/navbar.component';
import { SidebarComponent } from '../sidebar.component/sidebar.component';
import {Toast} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, SidebarComponent, Toast],
  providers: [MessageService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  private nav = inject(NavbarServices);
  private hostEl = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const mainEl = this.hostEl.nativeElement.querySelector('main');
    // AfterViewInit porque necesitamos que el <ng-content> ya esté renderizado
    const sections = this.nav.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.nav.isLockedByManualScroll) return; // ignora durante scroll por clic

        // de todas las que están intersectando, toma la más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          this.nav.setActive(visible[0].target.id);
        }
      },
      {
        root: mainEl,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-15% 0px -35% 0px', // franja central de la pantalla
      },
    );

    sections.forEach((section) => this.observer!.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
