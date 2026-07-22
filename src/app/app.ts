import { Component, signal } from '@angular/core';
import { LayoutComponent } from './shared/components/layout.component/layout.component';
import { HeroComponent } from "./feature/hero.component/hero.component";
import { AboutComponent } from "./feature/about.component/about.component";
import { SkillsComponent } from "./feature/skills.component/skills.component";
import { ProjectsComponent } from "./feature/projects.component/projects.component";
import { ExperienceComponent } from "./feature/experience.component/experience.component";
import { ContactComponent } from "./feature/contact.component/contact.component";
import { ScrollRevealDirective } from "./shared/directives/scroll-reveal-directive/scroll-reveal-directive";
import { Toast } from "primeng/toast";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent, ScrollRevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portafolio_JD');
}
