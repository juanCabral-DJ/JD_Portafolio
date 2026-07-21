import { Injectable } from '@angular/core';
import { TimelineItem } from '../models/experience';

@Injectable({providedIn: 'root'})
export class ExperienceService {
  public readonly experienceData: TimelineItem[] = [
    {
      id: 1,
      date: '2026 - PRESENT',
      title: 'Desarrollador Frontend Junior',
      company: 'Sildra Group',
      description:
        'Desarrollo de interfaces de usuario modernas, optimización de componentes y colaboración en la implementación de estándares de desarrollo frontend.',
      active: true,
      color: 'red',
    },
    {
      id: 2,
      date: 'Abril - Mayo 2026',
      title: 'Cursos: De Cero a Experto & Angular Pro',
      company: 'DevTalles',
      description:
        'Capacitación avanzada enfocada en el dominio profundo de Angular, patrones de diseño, flujos reactivos y buenas prácticas de desarrollo web.',
      color: 'cyan',
    },
    {
      id: 3,
      date: '2024 - PRESENT',
      title: 'Estudios de Desarrollo de Software',
      company: 'ITLA',
      location: 'República Dominicana',
      description:
        'Formación académica orientada al desarrollo de software, arquitectura de sistemas, bases de datos y optimización de algoritmos.',
      color: 'muted',
      icon: 'pi pi-code',
    },
  ];

}
