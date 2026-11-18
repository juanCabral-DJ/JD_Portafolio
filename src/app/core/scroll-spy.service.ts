import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  public readonly activeSection = signal<string>('hero');

  private observer: IntersectionObserver | null = null;

  public init(sectionIds: string[]): void {
    if (!this.isBrowser) return;

    this.destroy();

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    };

    this.observer = new IntersectionObserver((entries) => {
      // Find the most visible intersecting entry
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio or proximity to top
        visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );
        const topSectionId = visibleEntries[0].target.id;
        if (topSectionId) {
          this.activeSection.set(topSectionId);
        }
      }
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && this.observer) {
        this.observer.observe(element);
      }
    });
  }

  public setActive(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
