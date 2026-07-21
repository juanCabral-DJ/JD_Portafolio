import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/services/experience.services';
import { TimelineItem } from '../../core/models/experience';
import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  public readonly experience = inject(ExperienceService);
  public readonly events = this.experience.experienceData;

  getMarkerClass(event: TimelineItem, index: number): string {
    const color = event.color || (index === 0 ? 'red' : index === 1 ? 'cyan' : 'muted');
    if (color === 'red') {
      return 'border-[#ff4d4d] text-[#ff4d4d] shadow-[0_0_10px_rgba(255,77,77,0.35)]';
    }
    if (color === 'cyan') {
      return 'border-[#00f0ff] text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.35)]';
    }
    return 'border-zinc-600 text-zinc-500';
  }

  getDotClass(event: TimelineItem, index: number): string {
    const color = event.color || (index === 0 ? 'red' : index === 1 ? 'cyan' : 'muted');
    if (color === 'red') return 'bg-[#ff4d4d]';
    if (color === 'cyan') return 'bg-[#00f0ff]';
    return 'bg-zinc-500';
  }
}
