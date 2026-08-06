import { Component, OnInit, inject, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServices } from '../../core/services/project.services';
import { ProjectCard } from '../../core/models/project';
import { BadgeComponent } from '../../shared/components/badge.component/badge.component';
import { ProjectCardHeaderComponent } from '../../shared/components/project-card.component/components/project-card-header.component/project-card-header.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    ProjectCardHeaderComponent
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectServices);

  public readonly project = signal<ProjectCard | undefined>(undefined);
  public readonly allProjects = signal<ProjectCard[]>(this.projectService.items);
  public readonly isImageZoomed = signal<boolean>(false);
  public readonly activeTab = signal<'overview' | 'architecture' | 'code'>('overview');

  public readonly id = input<string | number>();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const routeId = params.get('id');
      const targetId = routeId ? routeId : (this.id() ?? 1);
      this.loadProject(targetId);
    });
  }

  public loadProject(id: string | number): void {
    const found = this.projectService.getProjectById(id);
    this.project.set(found);
    
    // Scroll to top of main container
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  public toggleZoom(): void {
    this.isImageZoomed.set(!this.isImageZoomed());
  }

  public get prevProject(): ProjectCard {
    const current = this.project();
    if (!current) return this.allProjects()[0];
    const currentIndex = this.allProjects().findIndex(p => p.id === current.id);
    const prevIndex = (currentIndex - 1 + this.allProjects().length) % this.allProjects().length;
    return this.allProjects()[prevIndex];
  }

  public get nextProject(): ProjectCard {
    const current = this.project();
    if (!current) return this.allProjects()[0];
    const currentIndex = this.allProjects().findIndex(p => p.id === current.id);
    const nextIndex = (currentIndex + 1) % this.allProjects().length;
    return this.allProjects()[nextIndex];
  }

  public goBack(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
}
