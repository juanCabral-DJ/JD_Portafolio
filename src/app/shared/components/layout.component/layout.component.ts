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
  private onScrollListener?: () => void;

  ngAfterViewInit(): void {
    const mainEl = this.hostEl.nativeElement.querySelector('main');
    if (!mainEl) return;

    this.onScrollListener = () => {
      if (this.nav.isLockedByManualScroll) return;

      const mainRect = mainEl.getBoundingClientRect();
      const topHeader = document.querySelector('nav');
      const headerHeight = topHeader ? topHeader.getBoundingClientRect().height : 0;
      
      // Línea de referencia: justo debajo de la cabecera + offset adaptativo
      const offset = Math.min(100, mainRect.height * 0.2);
      const targetY = mainRect.top + headerHeight + offset;

      // 1. Caso especial: final del scroll (Contacto)
      const isAtBottom = mainEl.scrollTop + mainEl.clientHeight >= mainEl.scrollHeight - 20;
      if (isAtBottom) {
        const lastItem = this.nav.items[this.nav.items.length - 1];
        if (lastItem && lastItem.id !== this.nav.id()) {
          this.nav.setActive(lastItem.id);
        }
        return;
      }

      // 2. Iterar de ABAJO hacia ARRIBA: la primera sección cuya parte superior pasó la línea de referencia es la activa
      let activeId = this.nav.items[0].id;

      for (let i = this.nav.items.length - 1; i >= 0; i--) {
        const item = this.nav.items[i];
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= targetY) {
          activeId = item.id;
          break;
        }
      }

      if (activeId && activeId !== this.nav.id()) {
        this.nav.setActive(activeId);
      }
    };

    mainEl.addEventListener('scroll', this.onScrollListener, { passive: true });
    this.onScrollListener();
  }

  ngOnDestroy(): void {
    const mainEl = this.hostEl.nativeElement.querySelector('main');
    if (mainEl && this.onScrollListener) {
      mainEl.removeEventListener('scroll', this.onScrollListener);
    }
  }
}
