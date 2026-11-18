import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../data/portfolio.models';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { TimelineItemComponent } from './timeline-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, TimelineItemComponent],
  template: `
    <section id="experiencia" class="py-10 lg:py-14 border-t border-line">
      <app-section-heading
        badge="Trayectoria"
        title="Experiencia y formación"
        subtitle="Mi recorrido profesional, aprendizajes continuos y formación técnica en desarrollo de software."
      />

      <div class="max-w-3xl">
        @for (job of jobs(); track job.id) {
          <app-timeline-item [job]="job" class="block mb-6 last:mb-0" />
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  public jobs = input.required<Job[]>();
}
