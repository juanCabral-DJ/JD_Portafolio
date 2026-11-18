import { Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

export interface NavLink {
  id: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, DrawerModule],
  template: `
    <p-drawer
      [(visible)]="visible"
      position="right"
      [modal]="true"
      [closeOnEscape]="true"
      [dismissible]="true"
      styleClass="!w-80 !bg-surface !border-l !border-line !text-main"
    >
      <ng-template #header>
        <div class="flex items-center gap-2">
          <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-sm font-semibold tracking-wide text-muted">MENÚ DE NAVEGACIÓN</span>
        </div>
      </ng-template>

      <div class="flex flex-col justify-between h-full py-4">
        <nav aria-label="Navegación móvil" class="flex flex-col gap-1">
          @for (link of links(); track link.id) {
            <a
              [href]="'#' + link.id"
              (click)="onNavigate(link.id)"
              class="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[48px]"
              [class.bg-accent-soft]="activeSection() === link.id"
              [class.text-accent]="activeSection() === link.id"
              [class.text-main]="activeSection() !== link.id"
              [class.hover:bg-line/20]="activeSection() !== link.id"
            >
              <span>{{ link.label }}</span>
              @if (activeSection() === link.id) {
                <span class="text-xs font-semibold px-2 py-0.5 rounded bg-accent text-on-accent">
                  Activo
                </span>
              }
            </a>
          }
        </nav>

        <div class="pt-6 border-t border-line flex flex-col gap-3">
          <a
            href="/assets/CV_Juan_David_Cabral_Ortiz_2026.pdf"
            download
            class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-line bg-surface text-main font-semibold hover:border-accent hover:text-accent transition-colors min-h-[48px]"
            (click)="visible.set(false)"
          >
            <i class="pi pi-download"></i>
            <span>Descargar CV</span>
          </a>

          <div class="text-xs text-center text-muted">
            Juan David Cabral · Baní, RD
          </div>
        </div>
      </div>
    </p-drawer>
  `,
})
export class MobileMenuComponent {
  public visible = model<boolean>(false);
  public activeSection = input<string>('hero');
  public links = input<NavLink[]>([
    { id: 'hero', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' },
  ]);

  public navigate = output<string>();

  public onNavigate(sectionId: string): void {
    this.navigate.emit(sectionId);
    this.visible.set(false);
  }
}
