import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../core/theme.service';
import { ScrollSpyService } from '../core/scroll-spy.service';
import { MobileMenuComponent, NavLink } from './mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileMenuComponent],
  template: `
    <!-- Enlace de accesibilidad para saltar navegación -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-on-accent focus:rounded-lg focus:shadow-lg focus:outline-none"
    >
      Saltar al contenido principal
    </a>

    <header
      class="fixed top-0 inset-x-0 z-40 border-b border-line bg-page/90 backdrop-blur-md transition-colors"
      style="padding-top: max(env(safe-area-inset-top), 0rem);"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
        <!-- Logo / Nombre -->
        <a
          href="#hero"
          (click)="onNavClick('hero')"
          class="flex items-center gap-2 group min-h-[44px] min-w-[44px] focus-visible:outline-2 focus-visible:outline-accent rounded-lg"
          aria-label="Juan David Cabral - Inicio"
        >
          <div
            class="w-9 h-9 rounded-lg bg-accent text-on-accent flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform"
          >
            JD
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-base sm:text-lg leading-tight tracking-tight text-main group-hover:text-accent transition-colors">
              Juan David Cabral
            </span>
            <span class="text-xs text-muted hidden sm:inline leading-tight">
              Desarrollador frontend
            </span>
          </div>
        </a>

        <!-- Enlaces en escritorio (lg: >= 1024px) -->
        <nav
          aria-label="Navegación principal"
          class="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          @for (link of navLinks; track link.id) {
            <a
              [href]="'#' + link.id"
              (click)="onNavClick(link.id)"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-all relative min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-accent"
              [class.text-accent]="scrollSpy.activeSection() === link.id"
              [class.font-semibold]="scrollSpy.activeSection() === link.id"
              [class.text-muted]="scrollSpy.activeSection() !== link.id"
              [class.hover:text-main]="scrollSpy.activeSection() !== link.id"
            >
              {{ link.label }}
              @if (scrollSpy.activeSection() === link.id) {
                <span
                  class="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full animate-fade-in"
                ></span>
              }
            </a>
          }
        </nav>

        <!-- Acciones: Botón de tema y Menú móvil -->
        <div class="flex items-center gap-2">
          <!-- Botón de cambio de tema (>= 44x44px) -->
          <button
            type="button"
            (click)="themeService.toggleTheme()"
            class="w-11 h-11 rounded-lg border border-line bg-surface hover:bg-line/20 text-main flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
            [attr.aria-label]="
              themeService.theme() === 'dark'
                ? 'Cambiar a modo claro'
                : 'Cambiar a modo oscuro'
            "
            [title]="
              themeService.theme() === 'dark'
                ? 'Cambiar a modo claro'
                : 'Cambiar a modo oscuro'
            "
          >
            @if (themeService.theme() === 'dark') {
              <i class="pi pi-sun text-main text-lg"></i>
            } @else {
              <i class="pi pi-moon text-main text-lg"></i>
            }
          </button>

          <!-- Botón de descarga de CV visible en desktop (>= 1024px) -->
          <a
            href="/assets/CV_Juan_David_Cabral_Ortiz_2026.pdf"
            download
            class="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg border border-line hover:border-accent hover:text-accent bg-surface text-main transition-colors min-h-[44px]"
            title="Descargar Currículum Vitae en PDF"
          >
            <i class="pi pi-download text-xs"></i>
            <span>CV</span>
          </a>

          <!-- Botón Hamburguesa en móvil (< 1024px) -->
          <button
            type="button"
            (click)="isMobileMenuOpen.set(true)"
            class="lg:hidden w-11 h-11 rounded-lg border border-line bg-surface hover:bg-line/20 text-main flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
            aria-label="Abrir menú de navegación móvil"
            aria-haspopup="dialog"
            [attr.aria-expanded]="isMobileMenuOpen()"
          >
            <i class="pi pi-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Menú Drawer móvil -->
    <app-mobile-menu
      [(visible)]="isMobileMenuOpen"
      [activeSection]="scrollSpy.activeSection()"
      [links]="navLinks"
      (navigate)="onNavClick($event)"
    />
  `,
})
export class HeaderComponent {
  public readonly themeService = inject(ThemeService);
  public readonly scrollSpy = inject(ScrollSpyService);

  public readonly isMobileMenuOpen = signal<boolean>(false);

  public readonly navLinks: NavLink[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' },
  ];

  public onNavClick(sectionId: string): void {
    this.scrollSpy.setActive(sectionId);
  }
}
