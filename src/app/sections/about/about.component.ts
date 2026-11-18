import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../data/portfolio.models';
import { SectionHeadingComponent } from '../../shared/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="sobre-mi" class="py-10 lg:py-14 border-t border-line">
      <app-section-heading
        badge="Trayectoria"
        title="Sobre mí"
        subtitle="Enfoque técnico, principios de desarrollo y experiencia."
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <!-- Columna de texto descriptivo (2 párrafos) -->
        <div class="lg:col-span-7 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
          @for (paragraph of info().aboutParagraphs; track $index) {
            <p [class.text-main]="$index === 0" class="font-normal">
              {{ paragraph }}
            </p>
          }

          <div class="pt-3 flex flex-wrap gap-3 text-xs sm:text-sm font-medium text-main">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-line">
              <i class="pi pi-check-circle text-accent"></i>
              <span>Graduado ITLA</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-line">
              <i class="pi pi-shield text-accent"></i>
              <span>Accesibilidad WCAG</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-line">
              <i class="pi pi-bolt text-accent"></i>
              <span>Angular Signals & Standalone</span>
            </div>
          </div>
        </div>

        <!-- Columna de Bloque de Código Decorativo (monoespaciado) -->
        <div class="lg:col-span-5 w-full">
          <div class="rounded-xl border border-line bg-surface overflow-hidden shadow-sm">
            <!-- Barra superior del editor -->
            <div class="px-4 py-2.5 border-b border-line bg-line/20 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              </div>
              <span class="font-mono text-xs text-muted">
                {{ info().codeSnippet.filename }}
              </span>
              <span class="text-[11px] text-muted font-mono uppercase">ts</span>
            </div>

            <!-- Contenido del código -->
            <div class="p-3.5 sm:p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0E141C] text-[#E8EEF5]">
              <pre class="m-0"><code><span class="text-blue-400">const</span> <span class="text-amber-300">developer</span> = &#123;
  <span class="text-sky-300">name</span>: <span class="text-emerald-300">"Juan David Cabral"</span>,
  <span class="text-sky-300">role</span>: <span class="text-emerald-300">"Desarrollador Frontend"</span>,
  <span class="text-sky-300">stack</span>: [
    <span class="text-emerald-300">"Angular"</span>,
    <span class="text-emerald-300">"PrimeNG"</span>,
    <span class="text-emerald-300">"Tailwind CSS"</span>,
    <span class="text-emerald-300">"TypeScript"</span>
  ],
  <span class="text-sky-300">focus</span>: [
    <span class="text-emerald-300">"Rendimiento"</span>,
    <span class="text-emerald-300">"Accesibilidad"</span>,
    <span class="text-emerald-300">"Clean Code"</span>
  ],
  <span class="text-sky-300">availableForWork</span>: <span class="text-purple-400">true</span>
&#125;;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  public info = input.required<PersonalInfo>();
}
