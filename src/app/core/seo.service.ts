import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  public initDefaultMeta(): void {
    const title = 'Juan David Cabral | Desarrollador Frontend Angular y PrimeNG';
    const description =
      'Portafolio de Juan David Cabral. Desarrollador frontend especializado en Angular, PrimeNG y Tailwind CSS. Construyo interfaces limpias, escalables y accesibles.';
    const keywords =
      'Juan David Cabral, Desarrollador Frontend, Angular, PrimeNG, Tailwind CSS, TypeScript, Portafolio, República Dominicana, Baní';

    this.titleService.setTitle(title);

    this.metaService.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Juan David Cabral' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph / Facebook / LinkedIn / WhatsApp
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/assets/dashboard.png' },
      { property: 'og:locale', content: 'es_DO' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: '/assets/dashboard.png' },
    ]);
  }
}
