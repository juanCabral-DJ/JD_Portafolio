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
      subtitle: 'Plataforma SaaS de Seguridad Zero Trust & Gestión de Identidad',
      category: 'Security & SaaS / Dashboard',
      role: 'Frontend Architect & Lead Developer',
      date: '2024 - Presente',
      githubUrl: 'https://github.com/juanCabral-DJ',
      liveUrl: 'https://github.com/juanCabral-DJ',
      text_short:
        'Dashboard dinámico con métricas sobre motor de riesgo del gateway, control de políticas y servicios registrados.',
      description:
        'Omakase-GatewayUI es la interfaz frontend de Omakase-Gateway, una plataforma SaaS y de consultoría centrada en arquitecturas de seguridad Zero Trust. Desarrollada con Angular, Tailwind CSS y componentes de PrimeNG, la aplicación funciona como el panel de control central para administrar y monitorear políticas de acceso e identidad de forma segura. El proyecto incluye características clave como un directorio de usuarios con paginación y filtrado, tableros analíticos avanzados basados en diagramas de flujo de tráfico y matrices de riesgo, integración con Keycloak para la gestión de identidad a nivel de cliente, y un diseño frontend adaptado para cumplir con los estándares de accesibilidad WCAG 2.1 AA.',
      demo: true,
      tech: ['Angular', 'PrimeNG', 'Tailwind CSS', 'TypeScript', 'Keycloak'],
      img: '/assets/dashboard.png',
      features: [
        {
          icon: 'pi pi-shield',
          title: 'Arquitectura Zero Trust',
          desc: 'Monitoreo continuo de políticas de acceso, validación de identidades y evaluación de vectores de amenaza.'
        },
        {
          icon: 'pi pi-users',
          title: 'Directorio Keycloak OIDC',
          desc: 'Gestión integrada de usuarios, federación de identidades, roles dinámicos y tokens JWT.'
        },
        {
          icon: 'pi pi-chart-bar',
          title: 'Matriz de Riesgo en Tiempo Real',
          desc: 'Tableros analíticos interactivos con mapas de calor de riesgo y diagramas de flujo de tráfico en vivo.'
        },
        {
          icon: 'pi pi-check-circle',
          title: 'Accesibilidad WCAG 2.1 AA',
          desc: 'Cumplimiento estricto de contrastes, lectores de pantalla y navegación asistida por teclado.'
        }
      ],
      highlights: [
        { label: 'Seguridad', value: 'Zero Trust Baseline' },
        { label: 'Estándar UI', value: 'WCAG 2.1 AA' },
        { label: 'Identidad', value: 'Keycloak Integration' },
        { label: 'Framework', value: 'Angular + PrimeNG' }
      ],
      architecture: [
        'Single Page Application (SPA) modular construida sobre Angular Standalone Architecture.',
        'Capa de servicios desacoplada para consumo de APIs RESTful del Gateway en Go/Rust.',
        'Manejo de estado reactivo mediante RxJS y Angular Signals.',
        'Diseño responsivo adaptativo con Tailwind CSS y componentes accesibles de PrimeNG.'
      ],
      codeSnippet: {
        filename: "policy-engine.config.json",
        language: "json",
        code: `{\n  "gateway_id": "omakase-sec-01",\n  "security_mode": "ZERO_TRUST",\n  "auth_provider": "Keycloak_OIDC",\n  "compliance": "WCAG_2.1_AA",\n  "active_rules": 142,\n  "risk_engine": {\n    "evaluation_mode": "REALTIME",\n    "threshold": 0.85\n  }\n}`
      }
    },
    {
      id: 2,
      header: "dashboard.sh",
      label: 'INV-BILL-CORE',
      subtitle: 'Sistema Integral de Inventario, Facturación & Punto de Venta (POS)',
      category: 'Enterprise ERP / Commercial POS',
      role: 'Frontend Lead Developer',
      date: '2024',
      githubUrl: 'https://github.com/juanCabral-DJ',
      liveUrl: 'https://github.com/juanCabral-DJ',
      text_short:
        'Sistema integral de inventario y facturación con POS moderno, gestión de productos y punto de venta optimizado.',
      description:
        'INV-BILL-CORE es una aplicación frontend robusta y moderna diseñada para la gestión integral de inventarios, facturación y operaciones de punto de venta (POS). Desarrollada con Angular, Tailwind CSS y componentes de PrimeNG, la interfaz destaca por una estética SaaS de alta gama con un tema oscuro refinado, grises neutros y acentos esmeralda o turquesa que reducen la fatiga visual. La arquitectura de la interfaz prioriza la optimización del flujo de trabajo e incluye una barra lateral colapsable, diseños basados en tarjetas con bordes redondeados y tablas de datos avanzadas equipadas con búsqueda global, filtros complejos y badges de estado semánticos. Asimismo, incorpora formularios interactivos con etiquetas flotantes (floating labels), micro-interacciones para botones, un módulo POS moderno y fluido, tarjetas de indicadores clave de rendimiento (KPI) en tiempo real, y un centro de reportes especializado con selectores de rango de fecha y formatos de exportación flexibles. Cada componente ha sido meticulosamente refactorizado para garantizar un rendimiento óptimo, gestión precisa de enlaces de precios de venta y personalizaciones visuales avanzadas como filas alternadas, consolidando una experiencia de usuario altamente intuitiva y profesional para entornos comerciales exigentes.',
      demo: true,
      tech: ['Angular', 'PrimeNG', 'Tailwind CSS', 'TypeScript', 'RxJS'],
      img: '/assets/hillystore.jpeg',
      features: [
        {
          icon: 'pi pi-shopping-cart',
          title: 'Módulo POS de Respuesta Inmediata',
          desc: 'Experiencia de cobro rápida con accesos directos de teclado, escaneo de códigos de barra y facturación instantánea.'
        },
        {
          icon: 'pi pi-box',
          title: 'Control Inteligente de Inventarios',
          desc: 'Gestión multialmacén, control de stock mínimo/máximo, variantes de productos y alertas automáticas.'
        },
        {
          icon: 'pi pi-chart-line',
          title: 'KPIs & Reportes Financieros',
          desc: 'Gráficos interactivos de ventas diarias, margen de beneficio, productos más vendidos y exportación PDF/Excel.'
        },
        {
          icon: 'pi pi-table',
          title: 'DataTables Avanzadas',
          desc: 'Filtros dinámicos por columna, ordenamiento multisentido, badges de estado y búsqueda global en tiempo real.'
        }
      ],
      highlights: [
        { label: 'Rendimiento', value: '< 100ms POS Reaction' },
        { label: 'Tema UI', value: 'High-End Dark SaaS' },
        { label: 'Módulos', value: 'POS + Stock + Billing' },
        { label: 'Exportación', value: 'PDF / Excel / CSV' }
      ],
      architecture: [
        'Componentes reutilizables con Angular Standalone APIs y Signals de alta eficiencia.',
        'Estado global del carrito y transacciones optimizado para operaciones offline-first.',
        'Tablas pesadas virtualizadas mediante PrimeNG Table VirtualScroll para miles de SKUs.',
        'Sistema modular de formularios reactivos con validaciones avanzadas en vivo.'
      ],
      codeSnippet: {
        filename: "pos-billing-engine.ts",
        language: "typescript",
        code: `export interface BillingSession {\n  sessionId: string;\n  operator: "JUAN_DAVID";\n  currency: "DOP / USD";\n  realtimeKPIs: true;\n  exportFormats: ["PDF", "EXCEL", "CSV"];\n  performanceTarget: "< 100ms";\n}`
      }
    },
    {
      id: 3,
      header: "integration.sys",
      label: 'Shopify Integration',
      subtitle: 'Plataforma Backend de Sincronización en Tiempo Real con Redis & FastAPI',
      category: 'Backend Architecture & Cloud API',
      role: 'Backend & Cloud Integration Engineer',
      date: '2023 - 2024',
      githubUrl: 'https://github.com/juanCabral-DJ',
      liveUrl: 'https://github.com/juanCabral-DJ',
      text_short:
        'Plataforma backend de sincronización en tiempo real de productos, precios e inventario con Shopify mediante FastAPI y Redis.',
      description:
        'shopifyIntegration es una plataforma backend de alto rendimiento construida en Python y FastAPI, diseñada específicamente para orquestar y sincronizar de manera bidireccional y en tiempo real los flujos de productos, precios e inventario con la plataforma de comercio electrónico Shopify. El sistema implementa una arquitectura desacoplada y altamente concurrente mediante un motor de tareas en segundo plano impulsado por ARQ y Redis, garantizando el procesamiento asíncrono y resiliente de colas pesadas de datos, webhooks de eventos y actualizaciones masivas sin bloquear el hilo principal de la aplicación. Para garantizar los más altos estándares de seguridad corporativa, la plataforma integra filtros de Git avanzados que protegen y ocultan tokens de acceso de aplicaciones personalizadas, previniendo exposiciones accidentales en el control de versiones. Además, sus componentes están optimizados para despliegues en la nube en plataformas como Render, asegurando una alta disponibilidad, escalabilidad elástica y mecanismos robustos de manejo de errores, reintentos automáticos y registro de auditoría para mantener la consistencia absoluta de los datos comerciales entre el núcleo de inventario y la tienda en línea.',
      demo: true,
      tech: ['Python', 'FastAPI', 'Redis', 'ARQ Engine', 'Shopify API', 'Docker'],
      img: '/assets/shopify.png',
      features: [
        {
          icon: 'pi pi-sync',
          title: 'Sincronización Asíncrona Bidireccional',
          desc: 'Actualizaciones inmediatas entre ERP local y catálogo de Shopify mediante Webhooks y GraphQL API.'
        },
        {
          icon: 'pi pi-bolt',
          title: 'Motor de Colas Redis + ARQ',
          desc: 'Procesamiento concurrente sin bloqueos para lotes masivos de precios, variantes e inventarios.'
        },
        {
          icon: 'pi pi-lock',
          title: 'Git Secret Masking Filters',
          desc: 'Mecanismos de protección de secretos para prevenir fugas de tokens de API y credenciales de acceso.'
        },
        {
          icon: 'pi pi-cloud',
          title: 'Resiliencia Cloud & Autoretry',
          desc: 'Reintentos automáticos con backoff exponencial, registros de auditoría y despliegue continuo en Render.'
        }
      ],
      highlights: [
        { label: 'Backend', value: 'FastAPI (Python 3.11)' },
        { label: 'Task Worker', value: 'Redis + ARQ' },
        { label: 'API Target', value: 'Shopify REST/GraphQL' },
        { label: 'Despliegue', value: 'Docker + Render Cloud' }
      ],
      architecture: [
        'Arquitectura en capas basadas en FastAPI (Routers, Controllers, Services y Schemas Pydantic).',
        'Colas de tareas en segundo plano respaldadas por Redis para alta concurrencia.',
        'Manejo de Webhooks con verificación criptográfica HMAC de firmas de Shopify.',
        'Filtros personalizados de git-smudge/clean para santitizar variables sensibles en repositorios.'
      ],
      codeSnippet: {
        filename: "arq_worker.py",
        language: "python",
        code: `async def sync_shopify_inventory(ctx, product_id: int):\n    """Async worker for high-volume inventory updates."""\n    res = await shopify_client.update_stock(product_id)\n    logger.info(f"[ARQ_WORKER] Stock synced: {product_id}")\n    return {"status": "SUCCESS", "synced_at": datetime.now().isoformat()}`
      }
    },
  ];

  public getProjectById(id: number | string): ProjectCard | undefined {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return this.items.find(p => p.id === numericId) || this.items[0];
  }
}
