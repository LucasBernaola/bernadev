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
      eyebrow: "Next project cards",
      title: "Other projects to shape into case studies",
      description:
        "A compact preview of the projects that can support Health Care Plus without making the homepage feel endless.",
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
      title: "Tools I use to build frontend products",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS Modules"],
        },
        {
          title: "Product UI",
          items: ["Responsive design", "Reusable components", "Accessibility basics"],
        },
        {
          title: "Workflow",
          items: ["Git", "GitHub", "Vercel", "API consumption"],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Practical training and project work",
      items: [
        {
          title: "Freelance Web Development",
          meta: "2025",
          description:
            "Independent web work for companies and entrepreneurs, combining interface development with practical delivery.",
        },
        {
          title: "Ademass Developer Training",
          meta: "Apr - May 2024",
          description:
            "Team practice building a web application while working with communication, planning and shared responsibilities.",
        },
        {
          title: "No Country Work Simulation",
          meta: "Mar - Apr 2024",
          description:
            "Collaborative e-commerce project focused on product workflows, teamwork and agile practice.",
        },
      ],
    },
    lab: {
      eyebrow: "Learning Lab",
      title: "Focused practice without losing the job-search focus",
      items: ["JavaScript problem solving", "React patterns", "API integration"],
    },
    contact: {
      title: "Let's build something useful.",
      description:
        "I am looking for frontend opportunities where I can contribute, keep learning and grow with a real team.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
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
      showcaseDescription: "Flujos medicos, pacientes y pantallas administrativas.",
    },
    featured: {
      eyebrow: "Caso de estudio Health Care Plus",
      title: "Health Care Plus - Sistema de gestion para pacientes y turnos medicos.",
      description:
        "Aplicacion web pensada para simplificar la gestion basica de pacientes y turnos en centros medicos, construida con una arquitectura real de frontend y backend.",
      demo: "Ver Demo",
      repo: "Perfil GitHub",
      galleryLabel: "Pantallas del producto",
      galleryTitle: "Capturas del flujo completo de reserva de turnos",
      hostingNote:
        "La demo online puede tener persistencia limitada por el hosting gratuito del backend. Las capturas muestran el flujo pensado y el alcance del producto.",
      roleLabel: "Rol",
      role: "Desarrollo full-stack del proyecto, arquitectura frontend, integracion con API REST e implementacion responsive",
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
            "Formularios controlados y validaciones basicas",
          ],
        },
        {
          title: "Backend",
          items: [
            "API REST desarrollada con Django REST Framework",
            "Entidades reales: usuarios, pacientes y turnos",
            "Serializers para controlar datos de entrada y salida",
            "Logica de negocio centralizada en el backend",
            "Conexion a base de datos PostgreSQL",
          ],
        },
        {
          title: "Estado actual",
          items: [
            "Frontend desplegado y parcialmente navegable",
            "Backend y base de datos en stand-by por mantenimiento",
            "Estructura preparada para autenticacion y crecimiento futuro",
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
          title: "Confirmacion del turno",
          image: "/images/health-care-plus-confirmation.jpg",
        },
      ],
      problemLabel: "Problema",
      problem:
        "Los centros medicos necesitan herramientas simples para gestionar pacientes y turnos sin volver lentos los procesos cotidianos.",
      solutionLabel: "Solucion",
      solution:
        "Construí una aplicacion funcional alrededor de flujos reales: datos del paciente, solicitud de turnos, seleccion de fecha y confirmacion.",
      impactLabel: "Que demuestra",
      impact:
        "Muestra criterio de producto, estructura de componentes, integracion con API, modelado backend y capacidad para construir mas alla de interfaces estaticas.",
      highlights: [
        "Frontend organizado con vistas, servicios y componentes reutilizables",
        "Integracion con API contemplando estados de carga y error",
        "Formularios y flujos pensados para tareas reales de gestion de turnos",
      ],
    },
    projects: {
      eyebrow: "Proximas cards de proyectos",
      title: "Otros proyectos para convertir en casos",
      description:
        "Una vista compacta de proyectos que pueden acompaniar a Health Care Plus sin hacer que la home se vuelva interminable.",
      items: [
        {
          title: "Sistema de Servicio Tecnico",
          badge: "Mock de producto",
          status: "Borrador",
          description:
            "Interfaz planificada para ordenes de reparacion, clientes, estado de equipos y seguimiento de servicios.",
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
          title: "Practica de Landing Pages",
          badge: "Practica UI",
          status: "Live",
          description:
            "Coleccion pequena de landings para practicar precision visual, secciones reutilizables y comportamiento responsive.",
          image: "/images/p3.png",
          url: "https://chat-gpt-3-landing-page-oz8h5z1ii-lucas-projects-1b3e6bc3.vercel.app/",
          stack: ["React", "CSS", "Vercel"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills Tecnicas",
      title: "Herramientas que uso para construir productos frontend",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS Modules"],
        },
        {
          title: "UI de Producto",
          items: ["Responsive design", "Componentes reutilizables", "Bases de accesibilidad"],
        },
        {
          title: "Workflow",
          items: ["Git", "GitHub", "Vercel", "Consumo de APIs"],
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Formacion practica y trabajo en proyectos",
      items: [
        {
          title: "Freelance Web Development",
          meta: "2025",
          description:
            "Trabajo web independiente para empresas y emprendedores, combinando desarrollo de interfaces con entregas concretas.",
        },
        {
          title: "Ademass Developer Training",
          meta: "Abr - May 2024",
          description:
            "Practica en equipo construyendo una aplicacion web, trabajando comunicacion, planificacion y responsabilidades compartidas.",
        },
        {
          title: "No Country Work Simulation",
          meta: "Mar - Abr 2024",
          description:
            "Proyecto colaborativo de e-commerce enfocado en flujos de producto, trabajo en equipo y practica agil.",
        },
      ],
    },
    lab: {
      eyebrow: "Learning Lab",
      title: "Practica enfocada sin perder de vista la busqueda laboral",
      items: ["Resolucion de problemas JS", "Patrones de React", "Integracion con APIs"],
    },
    contact: {
      title: "Construyamos algo util.",
      description:
        "Estoy buscando oportunidades frontend donde pueda aportar, seguir aprendiendo y crecer con un equipo real.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV",
    },
  },
} as const;
