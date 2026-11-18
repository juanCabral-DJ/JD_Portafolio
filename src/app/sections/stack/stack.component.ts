import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../data/portfolio.models';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { TechTagComponent } from '../../shared/tech-tag.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, TechTagComponent],
  template: `
    <section id="tecnologias" class="py-10 lg:py-14 border-t border-line">
      <app-section-heading
        badge="Habilidades"
        title="Tecnologías"
        subtitle="Herramientas y tecnologías aplicadas para construir software moderno y escalable."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        @for (category of categories(); track category.title) {
          <div class="rounded-xl border border-line bg-surface p-5 flex flex-col justify-between shadow-sm hover:border-accent/40 transition-colors">
            <div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-base sm:text-lg font-bold text-main">
                  {{ category.title }}
                </h3>
                <span class="text-xs font-semibold px-2 py-0.5 rounded bg-line/30 text-muted">
                  {{ category.skills.length }}
                </span>
              </div>
              <p class="text-xs text-muted mb-4 leading-relaxed">
                {{ category.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-line/60">
              @for (skill of category.skills; track skill) {
                <app-tech-tag
                  [name]="skill"
                  [prominent]="skill.includes('Angular') || skill.includes('TypeScript')"
                />
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class StackComponent {
  public categories = input.required<SkillCategory[]>();
}
