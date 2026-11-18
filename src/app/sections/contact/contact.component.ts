import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../data/portfolio.models';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { ContactFormComponent } from './contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, ContactFormComponent],
  template: `
    <section id="contacto" class="py-10 lg:py-14 border-t border-line">
      <app-section-heading
        badge="Comunicación"
        title="Contacto"
        subtitle="¿Tienes un proyecto, vacante o consulta técnica? Envíame un mensaje y conversemos."
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Columna Izquierda: Información Directa y Enlaces -->
        <div class="lg:col-span-5 space-y-5">
          <!-- Tarjeta de Correo Directo -->
          <div class="rounded-xl border border-line bg-surface p-5 shadow-sm">
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                <i class="pi pi-envelope text-lg"></i>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                  Correo electrónico
                </p>
                <a
                  [href]="info().socialLinks.email"
                  class="text-sm sm:text-base font-semibold text-main hover:text-accent transition-colors break-all"
                >
                  {{ info().email }}
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de Ubicación -->
          <div class="rounded-xl border border-line bg-surface p-5 shadow-sm">
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                <i class="pi pi-map-marker text-lg"></i>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                  Ubicación
                </p>
                <p class="text-sm sm:text-base font-medium text-main">
                  {{ info().location }}
                </p>
              </div>
            </div>
          </div>

          <!-- Redes y CV -->
          <div class="rounded-xl border border-line bg-surface p-5 shadow-sm space-y-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-muted">
              Perfiles profesionales
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                [href]="info().socialLinks.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line bg-surface text-sm font-semibold text-main hover:border-accent hover:text-accent transition-colors min-h-[44px]"
                aria-label="Abrir perfil de GitHub de Juan David Cabral"
              >
                <i class="pi pi-github text-base"></i>
                <span>GitHub</span>
              </a>

              <a
                [href]="info().socialLinks.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line bg-surface text-sm font-semibold text-main hover:border-accent hover:text-accent transition-colors min-h-[44px]"
                aria-label="Abrir perfil de LinkedIn de Juan David Cabral"
              >
                <i class="pi pi-linkedin text-base"></i>
                <span>LinkedIn</span>
              </a>

              <a
                [href]="info().cvUrl"
                download
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-line/20 hover:bg-line/40 text-sm font-semibold text-main transition-colors min-h-[44px]"
                aria-label="Descargar Currículum Vitae en PDF"
              >
                <i class="pi pi-download text-sm"></i>
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Formulario de Contacto -->
        <div class="lg:col-span-7">
          <div class="rounded-xl border border-line bg-surface p-6 sm:p-7 shadow-sm">
            <h3 class="text-lg font-bold text-main mb-1.5">
              Envíame un mensaje
            </h3>
            <p class="text-xs sm:text-sm text-muted mb-6">
              Completa el formulario y me llegará directamente a mi bandeja de entrada.
            </p>

            <app-contact-form />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  public info = input.required<PersonalInfo>();
}
