import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/NavItem.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarServices {
  private readonly router = inject(Router);
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
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      history.replaceState(null, '', `#${id}`);
    }
  }

  goTo(id: string) {
    this.isManualScroll = true;
    this.setActive(id);

    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToSection(id), 150);
      });
    } else {
      this.scrollToSection(id);
    }

    window.clearTimeout(this.scrollTimeout);
    this.scrollTimeout = window.setTimeout(() => {
      this.isManualScroll = false;
    }, 700);
  }

  private scrollToSection(id: string) {
    const mainContainer = document.querySelector('main');
    const targetElement = document.getElementById(id);
    const topHeader = document.querySelector('nav');

    if (mainContainer && targetElement) {
      const containerTop = mainContainer.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;
      const headerHeight = topHeader ? topHeader.getBoundingClientRect().height : 0;
      const offset = headerHeight > 0 ? headerHeight + 10 : 20;
      const targetPosition = targetTop - containerTop + mainContainer.scrollTop - offset;

      mainContainer.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private scrollTimeout?: number;

  get isLockedByManualScroll() {
    return this.isManualScroll;
  }
}

