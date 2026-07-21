import { Component, input } from '@angular/core';
import { ProjectCardHeaderComponent } from "./components/project-card-header.component/project-card-header.component";
import { ProjectCard, ProjectHeader } from '../../../core/models/project';
import { BadgeComponent } from "../badge.component/badge.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-project-card',
  imports: [ProjectCardHeaderComponent, BadgeComponent, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  public readonly label = input<ProjectHeader>();
  public readonly project = input<ProjectCard>();
}
