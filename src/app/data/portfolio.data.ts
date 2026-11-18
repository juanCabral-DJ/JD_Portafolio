import { PersonalInfo, Project, Job, SkillCategory } from './portfolio.models';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Juan David Cabral',
  title: 'Desarrollador frontend · Angular y PrimeNG',
  location: 'Remoto · Baní, República Dominicana',
  email: 'juandavidcabral71@gmail.com',
  availability: 'Disponible para nuevas oportunidades',
  heroTagline:
    'Construyo interfaces limpias, escalables y accesibles con Angular y PrimeNG, con foco en el rendimiento y el código mantenible.',
  aboutParagraphs: [
    'Graduado en Desarrollo de Software en ITLA, construyo aplicaciones frontend limpias, accesibles y de alto rendimiento. Prefiero la consistencia y las buenas prácticas frente a los atajos.',
    'Me especializo en el ecosistema Angular con TypeScript, PrimeNG y herramientas modernas, para convertir requisitos y lógicas complejas en interfaces rápidas, intuitivas y listas para escalar.'
  ],
  codeSnippet: {
    filename: 'developer-profile.ts',
    language: 'typescript',
    code: `const developer = {
  name: "Juan David Cabral",
  role: "Desarrollador Frontend",
  stack: ["Angular", "PrimeNG", "Tailwind CSS", "TypeScript"],
  focus: ["Rendimiento", "Accesibilidad WCAG", "Clean Code"],
  availableForWork: true
};`
  },
  socialLinks: {
    github: 'https://github.com/juanCabral-DJ',
    linkedin: 'https://www.linkedin.com/in/juan-david-cabral',
    email: 'mailto:juandavidcabral71@gmail.com'
  },
  cvUrl: '/assets/CV_Juan_David_Cabral_Ortiz_2026.pdf'
};

export const PROJECTS: Project[] = [
  {
    id: 'omakase-gateway',
    title: 'Panel de control del gateway',
    subtitle: 'Omakase Gateway',
    role: 'Desarrollador Frontend',
    year: '2024 - Presente',
    summary:
      'Diseño e implementación de la interfaz de usuario completa del panel administrativo para la gestión centralizada de usuarios, directivas de seguridad, servicios integrados y la visualización/configuración en tiempo real del motor de riesgo.',
    image: '/assets/dashboard.png',
    imageAlt: 'Captura del panel de control de Omakase Gateway mostrando la configuración del motor de riesgo',
    tech: ['Angular', 'PrimeNG', 'Tailwind CSS', 'TypeScript', 'Keycloak'],
    repoUrl: 'https://github.com/juanCabral-DJ',
    liveUrl: 'https://github.com/juanCabral-DJ',
    featured: true,
    highlights: [
      'Panel centralizado para administración de políticas y servicios',
      'Configuración interactiva del motor de evaluación de riesgo',
      'Integración con Keycloak y cumplimiento de estándares de accesibilidad'
    ]
  },
  {
    id: 'shopify-integration',
    title: 'Integración y plataforma de comercio',
    subtitle: 'Shopify Middleware & Storefront',
    role: 'Desarrollador Fullstack / Integrador',
    year: '2024',
    summary:
      'Construcción del middleware intermedio para la sincronización desatendida y en tiempo real de inventario y catálogo entre el backend interno y Shopify, complementado con la organización y personalización de la interfaz de la tienda mediante su tema.',
    image: '/assets/shopify.png',
    imageAlt: 'Captura de la plataforma integrada con Shopify y catálogo de productos',
    tech: ['Python', 'FastAPI', 'Shopify API', 'Redis', 'Docker'],
    repoUrl: 'https://github.com/juanCabral-DJ',
    liveUrl: 'https://github.com/juanCabral-DJ',
    featured: true,
    highlights: [
      'Middleware asíncrono para sincronización bidireccional de stock',
      'Personalización y estructuración visual de la tienda online',
      'Procesamiento en colas de eventos con Redis y APIs de Shopify'
    ]
  },
  {
    id: 'inv-bill-core',
    title: 'Sistema integral de inventario y facturación',
    subtitle: 'INV-BILL-CORE',
    role: 'Desarrollador Frontend',
    year: '2024',
    summary:
      'Sistema integral de inventario y facturación con punto de venta (POS), gestión de productos y venta optimizada.',
    image: '/assets/hillystore.jpeg',
    imageAlt: 'Captura de pantalla de INV-BILL-CORE punto de venta',
    tech: ['Angular', 'PrimeNG', 'Tailwind CSS', 'TypeScript', 'RxJS'],
    repoUrl: 'https://github.com/juanCabral-DJ',
    featured: false // Preservado intacto con toda su información
  }
];

export const EXPERIENCE: Job[] = [
  {
    id: 'sildra-group',
    title: 'Desarrollador Frontend Junior',
    org: 'Sildra Group',
    period: '2026 - Presente',
    description:
      'Desarrollo de interfaces modernas y modulares, optimización de componentes reutilizables y aplicación de estándares de calidad frontend con Angular y PrimeNG.',
    current: true
  },
  {
    id: 'devtalles',
    title: 'Cursos "De Cero a Experto" y "Angular Pro"',
    org: 'DevTalles',
    period: 'Abril - Mayo 2026',
    description:
      'Formación intensiva en el ecosistema Angular moderno: arquitecturas standalone, signals, patrones de diseño, flujos reactivos con RxJS y testing.',
    current: false
  },
  {
    id: 'itla',
    title: 'Tecnólogo en Desarrollo de Software',
    org: 'Instituto Tecnológico de Las Américas (ITLA)',
    period: '2024 - Presente',
    description:
      'Fundamentos sólidos de ciencias de la computación, arquitectura de software, bases de datos relacionales, estructuras de datos y algoritmos eficientes.',
    current: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Lenguajes',
    description: 'Bases sólidas para construir código robusto y tipado',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5 semántico', 'CSS3 / SASS', 'Java', 'Python', 'PHP']
  },
  {
    title: 'Frameworks y librerías',
    description: 'Especialización frontend con foco en Angular moderno',
    skills: ['Angular (Signals / Standalone)', 'PrimeNG', 'Tailwind CSS', '.NET', 'RxJS', 'Bootstrap']
  },
  {
    title: 'Herramientas y nube',
    description: 'Flujo de trabajo colaborativo y despliegue continuo',
    skills: ['Git & GitHub', 'VS Code', 'PostgreSQL', 'Jira', 'Azure DevOps', 'Docker']
  }
];
