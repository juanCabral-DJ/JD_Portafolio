import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly storageKey = 'portfolio_theme';

  public readonly theme = signal<Theme>('light');

  constructor() {
    if (this.isBrowser) {
      const initialTheme = this.resolveInitialTheme();
      this.theme.set(initialTheme);
      this.applyTheme(initialTheme);

      try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
          if (!localStorage.getItem(this.storageKey)) {
            const newTheme: Theme = e.matches ? 'dark' : 'light';
            this.theme.set(newTheme);
            this.applyTheme(newTheme);
          }
        });
      } catch (err) {
        console.warn('matchMedia listener error:', err);
      }
    }
  }

  public toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  public setTheme(newTheme: Theme): void {
    this.theme.set(newTheme);
    if (this.isBrowser) {
      try {
        localStorage.setItem(this.storageKey, newTheme);
      } catch (err) {
        console.warn('localStorage set error:', err);
      }
      this.applyTheme(newTheme);
    }
  }

  private resolveInitialTheme(): Theme {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (err) {
      console.warn('resolveInitialTheme error:', err);
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (!this.isBrowser) return;

    try {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        root.classList.add('p-dark');
      } else {
        root.classList.remove('p-dark');
      }
    } catch (err) {
      console.warn('applyTheme error:', err);
    }
  }
}
