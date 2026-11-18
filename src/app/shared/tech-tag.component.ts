import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-accent-soft text-accent border border-accent/15 transition-all select-none"
      [class.font-semibold]="prominent()"
    >
      {{ name() }}
    </span>
  `,
})
export class TechTagComponent {
  public name = input.required<string>();
  public prominent = input<boolean>(false);
}
