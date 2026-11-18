import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-line bg-surface/50 py-10 transition-colors">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
        <!-- Izquierda: Identidad y copyright -->
        <div class="flex flex-col items-center sm:items-start gap-1">
          <p class="font-medium text-main">
            Juan David Cabral Ortiz
          </p>
          <p class="text-xs">
            Desarrollado con Angular, Tailwind CSS y PrimeNG · {{ currentYear }}
          </p>
        </div>

        <!-- Centro: Indicador de ubicación -->
        <div class="flex items-center gap-2 text-xs">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Disponible para trabajo remoto · Baní, RD</span>
        </div>

        <!-- Derecha: Redes sociales -->
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/juanCabral-DJ"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-lg border border-line bg-surface flex items-center justify-center text-main hover:text-accent hover:border-accent transition-colors"
            aria-label="Perfil de GitHub de Juan David Cabral"
          >
            <i class="pi pi-github text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-david-cabral"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-lg border border-line bg-surface flex items-center justify-center text-main hover:text-accent hover:border-accent transition-colors"
            aria-label="Perfil de LinkedIn de Juan David Cabral"
          >
            <i class="pi pi-linkedin text-lg"></i>
          </a>
          <a
            href="mailto:juandavidcabral71@gmail.com"
            class="w-10 h-10 rounded-lg border border-line bg-surface flex items-center justify-center text-main hover:text-accent hover:border-accent transition-colors"
            aria-label="Enviar correo electrónico a Juan David Cabral"
          >
            <i class="pi pi-envelope text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  public readonly currentYear = new Date().getFullYear();
}
