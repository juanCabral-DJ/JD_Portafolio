import { Routes } from '@angular/router';
import { PortfolioHomeComponent } from './feature/portfolio-home/portfolio-home.component';
import { ProjectDetailComponent } from './feature/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioHomeComponent,
  },
  {
    path: 'projects/detail',
    redirectTo: 'projects/1',
    pathMatch: 'full'
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
