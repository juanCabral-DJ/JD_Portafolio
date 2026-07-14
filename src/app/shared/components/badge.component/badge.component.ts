import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  public readonly label = input.required<string>();
  public readonly icon = input<string>("");
  public readonly color = input<string>("#DD0031");
}
