import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from "../../shared/components/project-card.component/project-card.component";
import { ProjectServices } from '../../core/services/project.services';
import { ProjectCard } from '../../core/models/project';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private readonly service = inject(ProjectServices);
  public readonly project : ProjectCard[] = this.service.items

}
