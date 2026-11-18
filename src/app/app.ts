import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ScrollSpyService } from './core/scroll-spy.service';
import { SeoService } from './core/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main id="main-content" class="min-h-screen pt-16 sm:pt-18">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  private readonly scrollSpy = inject(ScrollSpyService);
  private readonly seoService = inject(SeoService);

  public ngOnInit(): void {
    this.seoService.initDefaultMeta();

    this.scrollSpy.init([
      'hero',
      'sobre-mi',
      'tecnologias',
      'proyectos',
      'experiencia',
      'contacto',
    ]);
  }

  public ngOnDestroy(): void {
    this.scrollSpy.destroy();
  }
}
