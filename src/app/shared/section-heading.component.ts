import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'block',
  },
  template: `
    <div class="mb-6 lg:mb-8">
      <div class="flex items-center gap-2 mb-1.5">
        @if (badge()) {
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-soft text-accent uppercase tracking-wider">
            {{ badge() }}
          </span>
        }
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-main">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-1.5 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  public title = input.required<string>();
  public subtitle = input<string>();
  public badge = input<string>();
}
