import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { StackComponent } from './stack/stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCE,
  SKILL_CATEGORIES,
} from '../data/portfolio.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    StackComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  template: `
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <app-hero [info]="personalInfo" />
      <app-about [info]="personalInfo" />
      <app-stack [categories]="skillCategories" />
      <app-projects [allProjects]="projects" />
      <app-experience [jobs]="jobs" />
      <app-contact [info]="personalInfo" />
    </div>
  `,
})
export class HomeComponent {
  public readonly personalInfo = PERSONAL_INFO;
  public readonly projects = PROJECTS;
  public readonly jobs = EXPERIENCE;
  public readonly skillCategories = SKILL_CATEGORIES;
}
