import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../data/portfolio.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="pt-6 sm:pt-8 lg:pt-12 pb-8 sm:pb-12">
      <div class="max-w-4xl">
        <!-- Título H1 principal (único h1 de la página) -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-main leading-[1.1] mb-3">
          Hola, soy <span class="text-accent">{{ info().name }}</span>
        </h1>

        <!-- Subtítulo de rol -->
        <p class="text-lg sm:text-xl font-semibold text-muted mb-4 tracking-tight">
          {{ info().title }}
        </p>

        <!-- Frase de valor concisa -->
        <p class="text-base sm:text-lg text-main/90 leading-relaxed max-w-2xl mb-8">
          {{ info().heroTagline }}
        </p>

        <!-- Botones de Acción (regla: un solo botón principal relleno por zona) -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          <a
            href="#proyectos"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-on-accent font-semibold shadow-sm hover:opacity-95 active:scale-[0.98] transition-all min-h-[44px] text-center"
          >
            <span>Ver proyectos</span>
            <i class="pi pi-arrow-down text-sm"></i>
          </a>

          <a
            [href]="info().cvUrl"
            download
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-line bg-surface text-main font-semibold hover:border-accent hover:text-accent active:scale-[0.98] transition-all min-h-[44px] text-center shadow-sm"
          >
            <i class="pi pi-download text-sm"></i>
            <span>Descargar CV</span>
          </a>
        </div>

        <!-- Metadatos de ubicación y contacto rápido -->
        <div class="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted pt-4 border-t border-line">
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker text-accent"></i>
            <span>{{ info().location }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-envelope text-accent"></i>
            <a [href]="info().socialLinks.email" class="hover:text-accent transition-colors underline-offset-4 hover:underline">
              {{ info().email }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  public info = input.required<PersonalInfo>();
}
