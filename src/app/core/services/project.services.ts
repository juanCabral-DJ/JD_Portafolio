import { Injectable } from '@angular/core';
import { ProjectCard } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServices {
  public readonly items: ProjectCard[] = [
    {
      id: 1,
      header: "policies_manager.exe",
      label: 'Omakase Gateway',
      text_short:
        'dashboard dinamico con metricas sobre motor de riesgo del gateway, control de politicas y servicios registrados',
      description:
        'Omakase-GatewayUI es la interfaz frontend de Omakase-Gateway, una plataforma SaaS y de consultoría centrada en arquitecturas de seguridad Zero Trust. Desarrollada con Angular, Tailwind CSS y componentes de PrimeNG, la aplicación funciona como el panel de control central para administrar y monitorear políticas de acceso e identidad de forma segura. El proyecto incluye características clave como un directorio de usuarios con paginación y filtrado, tableros analíticos avanzados basados en diagramas de flujo de tráfico y matrices de riesgo, integración con Keycloak para la gestión de identidad a nivel de cliente, y un diseño frontend adaptado para cumplir con los estándares de accesibilidad WCAG 2.1 AA.',
      demo: false,
      tech: ['Angular', 'PrimeNG', 'tailwind'],
      img: '/assets/dashboard.png',
    },
    {
      id: 2,
      header: "dashboard.sh",
      label: 'INV-BILL-CORE',
      text_short:
        'sistema integral de inventario y facturacion con POS moderno, gestion de productos y punto de venta optimizado',
      description:
        'INV-BILL-CORE es una aplicación frontend robusta y moderna diseñada para la gestión integral de inventarios, facturación y operaciones de punto de venta (POS). Desarrollada con Angular, Tailwind CSS y componentes de PrimeNG, la interfaz destaca por una estética SaaS de alta gama con un tema oscuro refinado, grises neutros y acentos esmeralda o turquesa que reducen la fatiga visual. La arquitectura de la interfaz prioriza la optimización del flujo de trabajo e incluye una barra lateral colapsable, diseños basados en tarjetas con bordes redondeados y tablas de datos avanzadas equipadas con búsqueda global, filtros complejos y badges de estado semánticos. Asimismo, incorpora formularios interactivos con etiquetas flotantes (floating labels), micro-interacciones para botones, un módulo POS moderno y fluido, tarjetas de indicadores clave de rendimiento (KPI) en tiempo real, y un centro de reportes especializado con selectores de rango de fecha y formatos de exportación flexibles. Cada componente ha sido meticulosamente refactorizado para garantizar un rendimiento óptimo, gestión precisa de enlaces de precios de venta y personalizaciones visuales avanzadas como filas alternadas, consolidando una experiencia de usuario altamente intuitiva y profesional para entornos comerciales exigentes.',
      demo: false,
      tech: ['Angular', 'PrimeNG', 'Tailwind CSS'],
      img: 'assets/hillystore.jpeg',
    },
    {
      id: 3,
      header: "integration.sys",
      label: 'Shopify Integration',
      text_short:
        'plataforma backend de sincronizacion en tiempo real de productos, precios e inventario con Shopify mediante FastAPI y Redis',
      description:
        'shopifyIntegration es una plataforma backend de alto rendimiento construida en Python y FastAPI, diseñada específicamente para orquestar y sincronizar de manera bidireccional y en tiempo real los flujos de productos, precios e inventario con la plataforma de comercio electrónico Shopify. El sistema implementa una arquitectura desacoplada y altamente concurrente mediante un motor de tareas en segundo plano impulsado por ARQ y Redis, garantizando el procesamiento asíncrono y resiliente de colas pesadas de datos, webhooks de eventos y actualizaciones masivas sin bloquear el hilo principal de la aplicación. Para garantizar los más altos estándares de seguridad corporativa, la plataforma integra filtros de Git avanzados que protegen y ocultan tokens de acceso de aplicaciones personalizadas, previniendo exposiciones accidentales en el control de versiones. Además, sus componentes están optimizados para despliegues en la nube en plataformas como Render, asegurando una alta disponibilidad, escalabilidad elástica y mecanismos robustos de manejo de errores, reintentos automáticos y registro de auditoría para mantener la consistencia absoluta de los datos comerciales entre el núcleo de inventario y la tienda en línea.',
      demo: false,
      tech: ['Python', 'FastAPI', 'Redis', 'ARQ', 'Shopify API'],
      img: '/assets/shopify.png',
    },
  ];
}
