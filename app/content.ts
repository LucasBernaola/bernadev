export type Locale = "en" | "es";

export const content = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    language: {
      label: "Language",
      switchTo: "ES",
    },
    hero: {
      eyebrow: "Frontend Developer",
      title: "Lucas Bernaola",
      intro:
        "Building responsive, intuitive, and functional web experiences that solve real-world problems.",
      stack: ["React", "Next.js", "TypeScript", "Vue 3"],
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      githubCta: "GitHub",
      profile: "Lucas Bernaola",
      role: "Frontend Developer focused on product UI",
      showcaseLabel: "Featured product",
      showcaseStatus: "Live demo",
      showcaseTitle: "Health Care Plus",
      showcaseDescription: "Medical center workflows, patient records and admin screens.",
    },
    featured: {
      eyebrow: "Health Care Plus case study",
      title: "Health Care Plus - Medical management system for patients and appointments.",
      description:
        "A web application designed to simplify basic patient and appointment workflows for healthcare centers, built with a real frontend and backend architecture.",
      demo: "View Demo",
      repo: "GitHub Profile",
      galleryLabel: "Product screens",
      galleryTitle: "Screenshots from the complete appointment workflow",
      hostingNote:
        "Live demo may have limited backend persistence due to free-tier hosting. Screenshots show the intended workflow and product scope.",
      roleLabel: "Role",
      role: "Full-stack project development, frontend architecture, REST API integration and responsive implementation",
      stackLabel: "Stack",
      stack: [
        "Vue 3",
        "Composition API",
        "Pinia",
        "Django REST Framework",
        "PostgreSQL",
        "Responsive UI",
      ],
      technicalCards: [
        {
          title: "Frontend",
          items: [
            "Vue 3 with Composition API",
            "Global state management with Pinia",
            "Reusable component-based architecture",
            "REST API consumption with loading and error states",
            "Controlled forms and basic validations",
          ],
        },
        {
          title: "Backend",
          items: [
            "REST API built with Django REST Framework",
            "Real domain entities: users, patients and appointments",
            "Serializers for input and output data control",
            "Business logic centralized in the backend",
            "PostgreSQL database connection",
          ],
        },
        {
          title: "Project status",
          items: [
            "Frontend deployed and partially navigable",
            "Backend and database currently in stand-by for maintenance",
            "Architecture prepared for authentication and future growth",
          ],
        },
      ],
      screenshots: [
        {
          title: "Homepage and appointment entry point",
          image: "/images/health-care-plus-home.jpg",
        },
        {
          title: "Appointment scheduling flow",
          image: "/images/health-care-plus-appointment.jpg",
        },
        {
          title: "Patient details form",
          image: "/images/health-care-plus-details.jpg",
        },
        {
          title: "Appointment confirmation",
          image: "/images/health-care-plus-confirmation.jpg",
        },
      ],
      problemLabel: "Problem",
      problem:
        "Healthcare centers need simple tools to manage patients and appointments without turning everyday tasks into slow manual processes.",
      solutionLabel: "Solution",
      solution:
        "I built a functional web application around real operational flows: patient data, appointment requests, scheduling and confirmation.",
      impactLabel: "What it proves",
      impact:
        "It shows product thinking, component structure, API integration, backend modeling and the ability to build beyond static UI copies.",
      highlights: [
        "Frontend structured with reusable views, services and components",
        "API integration with loading and error state handling",
        "Forms and flows designed around real appointment management tasks",
      ],
    },
    projects: {
      eyebrow: "",
      title: "Other developed projects",
      description:
        "Additional work focused on product interfaces, responsive layouts and practical frontend implementation.",
      items: [
        {
          title: "Technical Service System",
          badge: "Product UI mock",
          status: "Draft",
          description:
            "Planned management interface for repair orders, customers, device status and service follow-up workflows.",
          image: "/images/p4.png",
          stack: ["React", "Next.js", "TypeScript"],
        },
        {
          title: "Software Development Website",
          badge: "Personal web",
          status: "Draft",
          description:
            "Professional website concept for presenting software development services, process, projects and contact flows.",
          image: "/images/p5.png",
          stack: ["Next.js", "Responsive UI", "SEO"],
        },
        {
          title: "Landing Page Practice",
          badge: "UI practice",
          status: "Live",
          description:
            "A small collection of landing pages used to practice visual accuracy, reusable sections and responsive behavior.",
          image: "/images/p3.png",
          url: "https://chat-gpt-3-landing-page-oz8h5z1ii-lucas-projects-1b3e6bc3.vercel.app/",
          stack: ["React", "CSS", "Vercel"],
        },
      ],
    },
    skills: {
      eyebrow: "Technical Skills",
      title: "Frontend, integration and delivery",
      description:
        "My main focus is frontend development, but I also have practical experience connecting interfaces with REST APIs, Django backends and PostgreSQL data models.",
      groups: [
        {
          label: "Core",
          title: "Frontend Development",
          description:
            "Responsive interfaces, reusable components and product experiences built with clarity, performance and maintainability in mind.",
          items: ["React", "Next.js", "TypeScript", "Vue 3"],
        },
        {
          label: "Integration",
          title: "Backend Context",
          description:
            "Practical experience connecting frontend applications with REST APIs, forms, validation flows and persisted data.",
          items: ["Django REST Framework", "PostgreSQL", "REST APIs"],
        },
        {
          label: "Delivery",
          title: "Workflow",
          description:
            "Version control, deployment and environment tools used to move projects from local development to production.",
          items: ["Git", "GitHub", "Vercel", "Docker"],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Practical experience",
      description:
        "Applied experience across team-based development, freelance projects and collaborative work environments.",
      items: [
        {
          title: "Frontend / Full Stack Trainee",
          meta: "Startup project - Mar to Oct 2023",
          description:
            "Trainee role in an early-stage product team, working with a senior Python developer and collaborating across product, UX/UI and development. Contributed to the existing WordPress platform while supporting the transition toward a custom solution with Django and React foundations.",
          points: [
            "Worked on frontend planning, UI/UX alignment and API integration requirements",
            "Practiced real team workflows with Scrum, sprints, pull requests and code review",
            "Built practical understanding of Django backends and how frontend applications consume product data",
          ],
        },
        {
          title: "Freelance Web Developer",
          meta: "Freelance project - 2025",
          description:
            "Developed a freelance website for a cellphone repair service, working directly with the client to understand requirements, adjust content and iterate on the interface.",
          points: [
            "Handled client communication, feedback and requested changes",
            "Delivered a functional web project based on a real business need",
          ],
        },
        {
          title: "Collaborative Development Practice",
          meta: "No Country / Ademass - 2024",
          description:
            "Participated in collaborative learning teams and work simulations, building projects with other developers and practicing team delivery.",
          points: [
            "Practiced task planning, team communication and shared responsibilities",
            "Strengthened work methodology, communication, coordination and feedback skills",
          ],
        },
      ],
    },
    contact: {
      name: "Lucas Bernaola",
      role: "Frontend Developer",
      description:
        "Available for frontend positions and remote projects. Comfortable collaborating with distributed teams across different time zones.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
      email: "Email",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Skills",
      experience: "Experiencia",
      contact: "Contacto",
    },
    language: {
      label: "Idioma",
      switchTo: "EN",
    },
    hero: {
      eyebrow: "Frontend Developer",
      title: "Lucas Bernaola",
      intro:
        "Construyendo experiencias web responsive, intuitivas y funcionales que resuelven problemas reales.",
      stack: ["React", "Next.js", "TypeScript", "Vue 3"],
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      githubCta: "GitHub",
      profile: "Lucas Bernaola",
      role: "Frontend Developer enfocado en UI de producto",
      showcaseLabel: "Producto destacado",
      showcaseStatus: "Demo online",
      showcaseTitle: "Health Care Plus",
      showcaseDescription: "Flujos médicos, pacientes y pantallas administrativas.",
    },
    featured: {
      eyebrow: "Caso de estudio Health Care Plus",
      title: "Health Care Plus - Sistema de gestión para pacientes y turnos médicos.",
      description:
        "Aplicación web pensada para simplificar la gestión básica de pacientes y turnos en centros médicos, construida con una arquitectura real de frontend y backend.",
      demo: "Ver Demo",
      repo: "Perfil GitHub",
      galleryLabel: "Pantallas del producto",
      galleryTitle: "Capturas del flujo completo de reserva de turnos",
      hostingNote:
        "La demo online puede tener persistencia limitada por el hosting gratuito del backend. Las capturas muestran el flujo pensado y el alcance del producto.",
      roleLabel: "Rol",
      role: "Desarrollo full-stack del proyecto, arquitectura frontend, integración con API REST e implementación responsive",
      stackLabel: "Stack",
      stack: [
        "Vue 3",
        "Composition API",
        "Pinia",
        "Django REST Framework",
        "PostgreSQL",
        "UI responsive",
      ],
      technicalCards: [
        {
          title: "Frontend",
          items: [
            "Vue 3 con Composition API",
            "Manejo de estado global con Pinia",
            "Arquitectura basada en componentes reutilizables",
            "Consumo de API REST con estados de carga y error",
            "Formularios controlados y validaciones básicas",
          ],
        },
        {
          title: "Backend",
          items: [
            "API REST desarrollada con Django REST Framework",
            "Entidades reales: usuarios, pacientes y turnos",
            "Serializers para controlar datos de entrada y salida",
            "Lógica de negocio centralizada en el backend",
            "Conexión a base de datos PostgreSQL",
          ],
        },
        {
          title: "Estado actual",
          items: [
            "Frontend desplegado y parcialmente navegable",
            "Backend y base de datos en stand-by por mantenimiento",
            "Estructura preparada para autenticación y crecimiento futuro",
          ],
        },
      ],
      screenshots: [
        {
          title: "Home y entrada al flujo de turnos",
          image: "/images/health-care-plus-home.jpg",
        },
        {
          title: "Flujo de reserva de turnos",
          image: "/images/health-care-plus-appointment.jpg",
        },
        {
          title: "Formulario de datos del paciente",
          image: "/images/health-care-plus-details.jpg",
        },
        {
          title: "Confirmación del turno",
          image: "/images/health-care-plus-confirmation.jpg",
        },
      ],
      problemLabel: "Problema",
      problem:
        "Los centros médicos necesitan herramientas simples para gestionar pacientes y turnos sin volver lentos los procesos cotidianos.",
      solutionLabel: "Solución",
      solution:
        "Construí una aplicación funcional alrededor de flujos reales: datos del paciente, solicitud de turnos, selección de fecha y confirmación.",
      impactLabel: "Qué demuestra",
      impact:
        "Muestra criterio de producto, estructura de componentes, integración con API, modelado backend y capacidad para construir más allá de interfaces estáticas.",
      highlights: [
        "Frontend organizado con vistas, servicios y componentes reutilizables",
        "Integración con API contemplando estados de carga y error",
        "Formularios y flujos pensados para tareas reales de gestión de turnos",
      ],
    },
    projects: {
      eyebrow: "",
      title: "Otros proyectos desarrollados",
      description:
        "Trabajos complementarios enfocados en interfaces de producto, responsive design e implementación frontend práctica.",
      items: [
        {
          title: "Sistema de Servicio Técnico",
          badge: "Mock de producto",
          status: "Borrador",
          description:
            "Interfaz planificada para órdenes de reparación, clientes, estado de equipos y seguimiento de servicios.",
          image: "/images/p4.png",
          stack: ["React", "Next.js", "TypeScript"],
        },
        {
          title: "Web de Desarrollo de Software",
          badge: "Web personal",
          status: "Borrador",
          description:
            "Concepto de sitio profesional para presentar servicios de desarrollo, proceso, proyectos y contacto.",
          image: "/images/p5.png",
          stack: ["Next.js", "Responsive UI", "SEO"],
        },
        {
          title: "Práctica de Landing Pages",
          badge: "Práctica UI",
          status: "Live",
          description:
            "Colección pequeña de landings para practicar precisión visual, secciones reutilizables y comportamiento responsive.",
          image: "/images/p3.png",
          url: "https://chat-gpt-3-landing-page-oz8h5z1ii-lucas-projects-1b3e6bc3.vercel.app/",
          stack: ["React", "CSS", "Vercel"],
        },
      ],
    },
    skills: {
      eyebrow: "Habilidades técnicas",
      title: "Frontend, integración y entrega",
      description:
        "Mi foco principal es frontend, pero también tengo experiencia práctica conectando interfaces con APIs REST, backends en Django y modelos de datos en PostgreSQL.",
      groups: [
        {
          label: "Core",
          title: "Desarrollo Frontend",
          description:
            "Interfaces responsive, componentes reutilizables y experiencias de producto construidas con foco en claridad, rendimiento y mantenimiento.",
          items: ["React", "Next.js", "TypeScript", "Vue 3"],
        },
        {
          label: "Integración",
          title: "Contexto Backend",
          description:
            "Experiencia práctica conectando aplicaciones frontend con APIs REST, formularios, validaciones y datos persistidos.",
          items: ["Django REST Framework", "PostgreSQL", "APIs REST"],
        },
        {
          label: "Entrega",
          title: "Workflow",
          description:
            "Control de versiones, deploy y herramientas de entorno para llevar proyectos desde desarrollo local hasta producción.",
          items: ["Git", "GitHub", "Vercel", "Docker"],
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia práctica",
      description:
        "Experiencia aplicada en entornos de equipo, proyectos freelance y prácticas colaborativas de desarrollo.",
      items: [
        {
          title: "Frontend / Full Stack Trainee",
          meta: "Startup project - Mar a Oct 2023",
          description:
            "Rol trainee en un equipo de producto en etapa inicial, trabajando junto a un desarrollador senior de Python y colaborando entre producto, UX/UI y desarrollo. Participé sobre la plataforma existente en WordPress y en la transición hacia una solución propia con bases en Django y React.",
          points: [
            "Trabajé en planificación frontend, alineación UI/UX y requerimientos de integración con APIs",
            "Practiqué flujos reales de equipo con Scrum, sprints, pull requests y revisión de código",
            "Entendí cómo estructurar un backend en Django y conectar interfaces frontend con datos de una API",
          ],
        },
        {
          title: "Freelance Web Developer",
          meta: "Proyecto freelance - 2025",
          description:
            "Desarrollé un proyecto freelance para un servicio técnico de celulares, trabajando directamente con el cliente para entender necesidades, ajustar contenido e iterar sobre la interfaz.",
          points: [
            "Gestioné comunicación con cliente, feedback y cambios solicitados",
            "Entregué un proyecto web funcional basado en una necesidad real de negocio",
          ],
        },
        {
          title: "Práctica de desarrollo colaborativo",
          meta: "No Country / Ademass - 2024",
          description:
            "Participé en equipos de aprendizaje y simulación laboral, construyendo proyectos con otros desarrolladores y practicando entregas en equipo.",
          points: [
            "Practiqué planificación de tareas, comunicación de equipo y responsabilidades compartidas",
            "Trabajé metodologías de equipo, comunicación, coordinación y manejo de feedback",
          ],
        },
      ],
    },
    contact: {
      name: "Lucas Bernaola",
      role: "Frontend Developer",
      description:
        "Disponible para posiciones frontend y proyectos remotos. Me adapto a equipos distribuidos y distintas zonas horarias.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV",
      email: "Email",
    },
  },
} as const;
