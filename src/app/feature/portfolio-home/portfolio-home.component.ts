import { Component } from '@angular/core';
import { HeroComponent } from '../hero.component/hero.component';
import { AboutComponent } from '../about.component/about.component';
import { SkillsComponent } from '../skills.component/skills.component';
import { ProjectsComponent } from '../projects.component/projects.component';
import { ExperienceComponent } from '../experience.component/experience.component';
import { ContactComponent } from '../contact.component/contact.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal-directive/scroll-reveal-directive';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ScrollRevealDirective
  ],
  templateUrl: './portfolio-home.component.html',
})
export class PortfolioHomeComponent {}
