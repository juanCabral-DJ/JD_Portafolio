import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../data/portfolio.models';
import { TechTagComponent } from '../../shared/tech-tag.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TechTagComponent],
  host: {
    class: 'block h-full',
  },
  template: `
    <article
      class="group rounded-xl border border-line bg-surface overflow-hidden flex flex-col justify-between shadow-sm hover:border-accent/50 hover:shadow-md transition-all duration-300"
    >
      <div>
        <!-- Contenedor de la Imagen con NgOptimizedImage -->
        <div class="relative w-full aspect-video bg-line/20 overflow-hidden border-b border-line">
          <img
            [ngSrc]="project().image"
            [alt]="project().imageAlt"
            [width]="800"
            [height]="450"
            [priority]="priority()"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-page/90 backdrop-blur text-main border border-line">
            {{ project().year }}
          </div>
        </div>

        <!-- Contenido textual -->
        <div class="p-6">
          <!-- Rol y subtítulo -->
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold text-accent uppercase tracking-wider">
              {{ project().role }}
            </span>
            <span class="text-xs text-muted">
              {{ project().subtitle }}
            </span>
          </div>

          <!-- Título del proyecto (h3) -->
          <h3 class="text-xl font-bold text-main mb-3 group-hover:text-accent transition-colors">
            {{ project().title }}
          </h3>

          <!-- Resumen: Problema y Resultado -->
          <p class="text-sm text-muted leading-relaxed mb-6">
            {{ project().summary }}
          </p>

          <!-- Puntos destacados si existen -->
          @if (project().highlights && project().highlights!.length > 0) {
            <ul class="mb-6 space-y-2 text-xs text-main">
              @for (highlight of project().highlights; track highlight) {
                <li class="flex items-start gap-2">
                  <i class="pi pi-check text-accent text-[10px] mt-1 shrink-0"></i>
                  <span>{{ highlight }}</span>
                </li>
              }
            </ul>
          }
        </div>
      </div>

      <!-- Pie de la tarjeta: Tags y Enlaces -->
      <div class="p-6 pt-0 border-t border-line/40 mt-auto">
        <!-- Tecnologías -->
        <div class="flex flex-wrap gap-1.5 pt-4 mb-5">
          @for (tech of project().tech; track tech) {
            <app-tech-tag [name]="tech" />
          }
        </div>

        <!-- Enlaces a Demo / Repositorio -->
        <div class="flex items-center gap-3">
          @if (project().repoUrl) {
            <a
              [href]="project().repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-line bg-surface text-xs font-semibold text-main hover:border-accent hover:text-accent transition-colors min-h-[44px]"
              aria-label="Ver código fuente en GitHub"
            >
              <i class="pi pi-github text-sm"></i>
              <span>Código</span>
            </a>
          }

          @if (project().liveUrl && project().liveUrl !== project().repoUrl) {
            <a
              [href]="project().liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-accent text-on-accent text-xs font-semibold hover:opacity-95 transition-opacity min-h-[44px]"
              aria-label="Ver demostración en vivo"
            >
              <i class="pi pi-external-link text-sm"></i>
              <span>Ver proyecto</span>
            </a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  public project = input.required<Project>();
  public priority = input<boolean>(false);
}
