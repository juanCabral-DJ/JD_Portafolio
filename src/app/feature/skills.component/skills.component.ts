import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { StackCategory } from '../../core/models/tag';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardModule, SharedModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  categories: StackCategory[] = [
    {
      icon: 'pi pi-code',
      title: 'Languages',
      tags: [
        { prefix: 'lang', label: 'TypeScript' },
        { prefix: 'lang', label: 'JavaScript' },
        { prefix: 'lang', label: 'Java' },
        { prefix: 'lang', label: 'Python' },
        { prefix: 'lang', label: 'PHP' },
        { prefix: 'lang', label: 'HTML5' },
        { prefix: 'lang', label: 'CSS3/SASS' },
      ],
    },
    {
      icon: 'pi pi-box',
      title: 'Frameworks & Libs',
      emphasized: true,
      tags: [
        { prefix: 'framework', label: 'Angular', highlight: true },
        { prefix: 'framework', label: '.NET' },
        { prefix: 'lib', label: 'PrimeNG' },
        { prefix: 'css', label: 'Bootstrap' },
      ],
    },
    {
      icon: 'pi pi-cog',
      title: 'Workflow & Cloud',
      tags: [
        { prefix: 'tool', label: 'Git/GitHub' },
        { prefix: 'tool', label: 'VS_Code' },
        { prefix: 'db', label: 'PostgreSQL' },
        { prefix: 'tool', label: 'Jira' },
        { prefix: 'cloud', label: 'Azure_DevOps' },
      ],
    },
  ];
}
