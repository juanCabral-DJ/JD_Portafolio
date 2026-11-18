import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../data/portfolio.models';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { ProjectCardComponent } from './project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, ProjectCardComponent],
  template: `
    <section id="proyectos" class="py-10 lg:py-14 border-t border-line">
      <app-section-heading
        badge="Portafolio"
        title="Proyectos destacados"
        subtitle="Soluciones reales donde aplico arquitectura limpia, buenas prácticas y foco en la experiencia de usuario."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        @for (project of featuredProjects(); track project.id; let idx = $index) {
          <app-project-card
            [project]="project"
            [priority]="idx === 0"
          />
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  public allProjects = input.required<Project[]>();

  public featuredProjects = computed(() =>
    this.allProjects().filter((p) => p.featured)
  );
}
