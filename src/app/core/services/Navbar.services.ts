import { Injectable, signal } from '@angular/core';
import { NavItem } from '../models/NavItem.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarServices {
  public readonly id = signal<string>('hero');

  public readonly items: NavItem[] = [
    { id: 'hero', label: 'Hero', icon: 'pi pi-desktop' },
    { id: 'about', label: 'About', icon: 'pi pi-user' },
    { id: 'stack', label: 'Stack', icon: 'pi pi-box' },
    { id: 'projects', label: 'Projects', icon: 'pi pi-code' },
    { id: 'experience', label: 'Experience', icon: 'pi pi-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'pi pi-envelope' },
  ];

  private isManualScroll = false;

  setActive(id: string) {
    this.id.set(id);
    history.replaceState(null, '', `#${id}`);
  }

  goTo(id: string) {
    this.isManualScroll = true;
    this.setActive(id);

    const mainContainer = document.querySelector('main');
    const targetElement = document.getElementById(id);

    if (mainContainer && targetElement) {
      const containerTop = mainContainer.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;
      const targetPosition = targetTop - containerTop + mainContainer.scrollTop;

      mainContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }

    // libera el "candado" cuando el scroll suave termina (aprox.)
    window.clearTimeout(this.scrollTimeout);
    this.scrollTimeout = window.setTimeout(() => {
      this.isManualScroll = false;
    }, 700);
  }

  private scrollTimeout?: number;

  get isLockedByManualScroll() {
    return this.isManualScroll;
  }
}
