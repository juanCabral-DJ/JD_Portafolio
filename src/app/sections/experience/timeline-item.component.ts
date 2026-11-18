import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../data/portfolio.models';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'block',
  },
  template: `
    <div class="relative pl-8 sm:pl-10 group">
      <!-- Línea vertical conectora que baja hasta la siguiente tarjeta -->
      <div
        class="absolute left-[11px] sm:left-[13px] top-6 -bottom-6 w-[2px] bg-line group-last:hidden"
      ></div>

      <!-- Marcador circular con punto centrado -->
      <div
        class="absolute left-0 top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full border-2 flex items-center justify-center transition-colors bg-surface shadow-xs z-10"
        [class.border-accent]="job().current"
        [class.border-line]="!job().current"
      >
        @if (job().current) {
          <span class="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
        } @else {
          <span class="w-2 h-2 rounded-full bg-muted/50"></span>
        }
      </div>

      <!-- Tarjeta de contenido -->
      <div class="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-sm hover:border-accent/40 transition-all text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
          <h3 class="text-base sm:text-lg font-bold text-main">
            {{ job().title }}
          </h3>
          <span
            class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto"
            [class.bg-accent-soft]="job().current"
            [class.text-accent]="job().current"
            [class.bg-line/40]="!job().current"
            [class.text-muted]="!job().current"
          >
            {{ job().period }}
          </span>
        </div>

        <p class="text-sm font-semibold text-accent mb-2.5">
          {{ job().org }}
        </p>

        <p class="text-sm text-muted leading-relaxed">
          {{ job().description }}
        </p>
      </div>
    </div>
  `,
})
export class TimelineItemComponent {
  public job = input.required<Job>();
}
