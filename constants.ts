import React from 'react';
import { PersonalInfo, SkillCategory, Project, NavLink, EducationEntry, ExperienceEntry, LocalizedContent, Language } from './types';
import { CodeIcon, MobileIcon, DatabaseIcon, CloudIcon, DesignIcon, BrainIcon } from './components/IconComponents'; // Removed BriefcaseIcon, AcademicCapIcon as they are used within sections

const COMMON_PERSONAL_INFO_NAME = "Asier Nuñez"; // Proper name, likely no translation
const COMMON_PERSONAL_INFO_EMAIL = "asierngcode@gmail.com";
const COMMON_PERSONAL_INFO_LINKEDIN = "https://www.linkedin.com/in/asier-nu%C3%B1ez-garcia/";
const COMMON_PERSONAL_INFO_GITHUB = "https://github.com/asiercode";
const COMMON_PERSONAL_INFO_CV_URL = "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2FCV%20asierNG.pdf?alt=media&token=826c483c-1d54-470e-9be4-3f8d9bc39301";
const COMMON_PERSONAL_INFO_PROFILE_IMAGE = "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2Fpfp.jpeg?alt=media&token=8823e239-963c-4686-86a0-4bc905374348";
const COMMON_PERSONAL_INFO_PHONE = "+34 644905827";

const esContent: Omit<LocalizedContent, 'UI_STRINGS'> = {
  PERSONAL_INFO: {
    name: COMMON_PERSONAL_INFO_NAME,
    tagline: "Desarrollador Full Stack | Creador de Soluciones Digitales Innovadoras",
    description: "Desarrollador de software full-stack con experiencia en apps móviles (Android/iOS) y web. Especializado en Kotlin, Java, Python y JavaScript, con un fuerte enfoque en UI/UX, APIs, bases de datos y despliegue en AWS. Soy práctico, adaptable, orientado a la calidad y cuento con un nivel B2 de inglés. \n\nDisfruto creando y mejorando aplicaciones móviles y web. Trabajo con una amplia gama de lenguajes y tecnologías, incluyendo Kotlin, Java, Python, JavaScript (Node.js), HTML, y CSS. Mi experiencia abarca el diseño de interfaces (UI/UX), la integración de APIs, el análisis de datos y la gestión de bases de datos con SQL, además de despliegue de aplicaciones en AWS. Me considero un profesional autodidacta, con rápida adaptación a nuevas tecnologías y un enfoque práctico para la resolución de problemas. Valoro la colaboración en entornos ágiles y dinámicos, siempre con el objetivo de que mis desarrollos no solo funcionen, sino que lo hagan de manera óptima y eficiente.\n\nSiempre buscando aprender y aplicar nuevas tecnologías para crear soluciones que impacten positivamente.",
    email: COMMON_PERSONAL_INFO_EMAIL,
    linkedinUrl: COMMON_PERSONAL_INFO_LINKEDIN,
    githubUrl: COMMON_PERSONAL_INFO_GITHUB,
    cvUrl: COMMON_PERSONAL_INFO_CV_URL,
    profileImageUrl: COMMON_PERSONAL_INFO_PROFILE_IMAGE,
    phone: COMMON_PERSONAL_INFO_PHONE,
    location: "Madrid",
  },
  EDUCATION_DATA: [
    {
      degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "CDM FP",
      years: "2023 - 2025",
      description: "Formación enfocada en el desarrollo de aplicaciones para diversas plataformas, incluyendo móviles y escritorio.",
    },
    {
      degree: "Grado Medio en Sistemas Microinformáticos y Redes",
      institution: "CDM FP",
      years: "2021 - 2023",
      description: "Conocimientos en hardware, software, sistemas operativos y redes locales.",
    },
  ],
  EXPERIENCE_DATA: [
     {
      company: "Cadit Spain",
      role: "Desarrollo de Software",
      years: "2025",
      description: [
        "Desarrollo de aplicaciones de escritorio para la gestión de inversiones.",
        "Integración con sistemas IBM i (anteriormente AS/400).",
        "Utilización de RPG y Java en el desarrollo."
      ],
    },
    {
      company: "Neuronic",
      role: "Desarrollo Web",
      years: "2023",
      description: [
        "Desarrollo de landing pages a través de WordPress.",
        "Puesta en marcha y optimización para motores de búsqueda (SEO)."
      ],
    },
  ],
  SKILLS_DATA: [
    {
      name: "Desarrollo Móvil",
      icon: React.createElement(MobileIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "Kotlin" }, { name: "Java" }, { name: "Android Nativo" }, { name: "Jetpack Compose"} ],
    },
    {
      name: "Desarrollo Web",
      icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "JavaScript (ES6+)" }, { name: "TypeScript" }, { name: "Node.js (Express)" }, { name: "React / Next.js" }, { name: "Spring Boot" }, { name: "HTML5" }, { name: "CSS3 / Tailwind CSS" }, { name: "Python (Django/Flask)" } ],
    },
    {
      name: "Bases de Datos",
      icon: React.createElement(DatabaseIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "SQL (PostgreSQL, MySQL)" }, { name: "NoSQL (MongoDB, Firebase)" } ],
    },
    {
      name: "Cloud & DevOps",
      icon: React.createElement(CloudIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "AWS (EC2, S3, RDS, Lambda, Amplify)" }, { name: "Docker" }, { name: "Git / GitHub Actions" } ],
    },
    {
      name: "Diseño y Otros",
      icon: React.createElement(DesignIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "Diseño UI/UX (Figma)" }, { name: "APIs RESTful" }, { name: "Metodologías Ágiles (Scrum)" } ],
    },
    {
      name: "Habilidades Blandas",
      icon: React.createElement(BrainIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "Autodidacta y Proactivo" }, { name: "Adaptabilidad Rápida" }, { name: "Resolución Creativa de Problemas" }, { name: "Colaboración y Comunicación Efectiva" } ],
    },
  ],
  PROJECTS_DATA: [
    {
      id: "project-1",
      title: "FoodieClub",
      description: "FoodieClub es una red social para móviles Android, centrada en el intercambio y descubrimiento de recetas de comida. Desarrollada nativamente con Kotlin y Jetpack Compose, utiliza Firebase para la autenticación y base de datos en tiempo real. El backend se apoya en una API REST construida con Spring Boot y MySQL, todo desplegado en AWS para asegurar escalabilidad y disponibilidad.",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Spring Boot", "MySQL", "AWS", "API Rest"],
      imageUrl: "https://i.postimg.cc/VLGmNnMt/Proyecto-nuevo.png",
      liveUrl: "#",
      repoUrl: "https://github.com/AsierCode/FoodieClub",
    },
    {
      id: "project-2",
      title: "MyNextGame",
      description: "MyNextGame es una aplicación web dinámica, desarrollada con React, TypeScript y Vite, diseñada para simplificar la búsqueda de tu próximo videojuego. Conéctate a una extensa base de datos a través de una API externa y explora títulos, filtra por género, plataforma o popularidad, y accede a información detallada para tomar la mejor decisión y sumergirte en tu siguiente aventura digital.",
      technologies: ["React", "TypeScript", "API", "Vite"],
      imageUrl: "https://i.postimg.cc/gjnPN4XC/image.png",
      liveUrl: "https://mynextgame.netlify.app/",
      repoUrl: "https://github.com/AsierCode/MyNextGameProject",
    },
  ],
  NAV_LINKS: [
    { href: "#hero-section", label: "Inicio" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#education", label: "Formación" },
    { href: "#experience", label: "Experiencia" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ],
};

const enContent: Omit<LocalizedContent, 'UI_STRINGS'> = {
  PERSONAL_INFO: {
    name: COMMON_PERSONAL_INFO_NAME,
    tagline: "Full Stack Developer | Creator of Innovative Digital Solutions",
    description: "Full-stack software developer with experience in mobile (Android/iOS) and web apps. Specialized in Kotlin, Java, Python, and JavaScript, with a strong focus on UI/UX, APIs, databases, and AWS deployment. I am practical, adaptable, quality-oriented, and have a B2 level of English.\n\nI enjoy creating and improving mobile and web applications. I work with a wide range of languages and technologies, including Kotlin, Java, Python, JavaScript (Node.js), HTML, and CSS. My experience covers interface design (UI/UX), API integration, data analysis, and database management with SQL, as well as application deployment on AWS. I consider myself a self-taught professional, quickly adapting to new technologies with a practical approach to problem-solving. I value collaboration in agile and dynamic environments, always aiming for my developments to not only work but to do so optimally and efficiently.\n\nAlways looking to learn and apply new technologies to create solutions that have a positive impact.",
    email: COMMON_PERSONAL_INFO_EMAIL,
    linkedinUrl: COMMON_PERSONAL_INFO_LINKEDIN,
    githubUrl: COMMON_PERSONAL_INFO_GITHUB,
    cvUrl: COMMON_PERSONAL_INFO_CV_URL,
    profileImageUrl: COMMON_PERSONAL_INFO_PROFILE_IMAGE,
    phone: COMMON_PERSONAL_INFO_PHONE,
    location: "Madrid",
  },
  EDUCATION_DATA: [
    {
      degree: "Higher National Diploma in Multiplatform Application Development",
      institution: "CDM FP",
      years: "2023 - 2025",
      description: "Training focused on developing applications for various platforms, including mobile and desktop.",
    },
    {
      degree: "Vocational Training in Microcomputer Systems and Networks",
      institution: "CDM FP",
      years: "2021 - 2023",
      description: "Knowledge in hardware, software, operating systems, and local networks.",
    },
  ],
  EXPERIENCE_DATA: [
    {
      company: "Cadit Spain",
      role: "Software Development",
      years: "2025",
      description: [
        "Development of desktop applications for investment management.",
        "Integration with IBM i systems (formerly AS/400).",
        "Use of RPG and Java in development."
      ],
    },
    {
      company: "Neuronic",
      role: "Web Development",
      years: "2023",
      description: [
        "Development of landing pages using WordPress.",
        "Implementation and optimization for search engines (SEO)."
      ],
    },
  ],
  SKILLS_DATA: [ // Skill names are often kept in English or are proper nouns, but category names can be translated
    {
      name: "Mobile Development",
      icon: React.createElement(MobileIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "Kotlin" }, { name: "Java" }, { name: "Native Android" }, { name: "Jetpack Compose"} ],
    },
    {
      name: "Web Development",
      icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "JavaScript (ES6+)" }, { name: "TypeScript" }, { name: "Node.js (Express)" }, { name: "React / Next.js" }, { name: "Spring Boot" }, { name: "HTML5" }, { name: "CSS3 / Tailwind CSS" }, { name: "Python (Django/Flask)" } ],
    },
    {
      name: "Databases",
      icon: React.createElement(DatabaseIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "SQL (PostgreSQL, MySQL)" }, { name: "NoSQL (MongoDB, Firebase)" } ],
    },
    {
      name: "Cloud & DevOps",
      icon: React.createElement(CloudIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "AWS (EC2, S3, RDS, Lambda, Amplify)" }, { name: "Docker" }, { name: "Git / GitHub Actions" } ],
    },
    {
      name: "Design & Others",
      icon: React.createElement(DesignIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "UI/UX Design (Figma)" }, { name: "RESTful APIs" }, { name: "Agile Methodologies (Scrum)" } ],
    },
    {
      name: "Soft Skills",
      icon: React.createElement(BrainIcon, { className: "w-8 h-8 text-sky-400" }),
      skills: [ { name: "Self-Taught & Proactive" }, { name: "Quick Adaptability" }, { name: "Creative Problem Solving" }, { name: "Effective Collaboration & Communication" } ],
    },
  ],
  PROJECTS_DATA: [
    {
      id: "project-1",
      title: "FoodieClub",
      description: "FoodieClub is a social network for Android mobile devices, focused on sharing and discovering food recipes. Natively developed with Kotlin and Jetpack Compose, it uses Firebase for authentication and real-time database. The backend is supported by a REST API built with Spring Boot and MySQL, all deployed on AWS to ensure scalability and availability.",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Spring Boot", "MySQL", "AWS", "API Rest"],
      imageUrl: "https://i.postimg.cc/VLGmNnMt/Proyecto-nuevo.png",
      liveUrl: "#",
      repoUrl: "https://github.com/AsierCode/FoodieClub",
    },
    {
      id: "project-2",
      title: "MyNextGame",
      description: "MyNextGame is a dynamic web application, developed with React, TypeScript, and Vite, designed to simplify the search for your next video game. Connect to an extensive database via an external API and explore titles, filter by genre, platform, or popularity, and access detailed information to make the best decision and dive into your next digital adventure.",
      technologies: ["React", "TypeScript", "API", "Vite"],
      imageUrl: "https://i.postimg.cc/gjnPN4XC/image.png",
      liveUrl: "https://mynextgame.netlify.app/",
      repoUrl: "https://github.com/AsierCode/MyNextGameProject",
    },
  ],
  NAV_LINKS: [
    { href: "#hero-section", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
};

export const CONTENT_BY_LANG: Record<Language, LocalizedContent> = {
  es: {
    ...esContent,
    UI_STRINGS: {
      APP_TITLE_SUFFIX: `Portafolio de Desarrollador - ${COMMON_PERSONAL_INFO_NAME}`,
      HERO_GREETING: "Hola, soy",
      SEE_MY_PROJECTS: "Ver Mis Proyectos",
      DOWNLOAD_CV: "Descargar CV",
      CONTACT_ME: "Contactar",
      ABOUT_ME_TITLE: "Sobre Mí",
      PROFILE_IMG_ALT: (name) => `Foto de perfil de ${name}`,
      PROFILE_IMG_BROKEN_ALT: "Imagen de perfil no disponible",
      EDUCATION_TITLE: "Formación Académica",
      EXPERIENCE_TITLE: "Experiencia Profesional",
      SKILLS_TITLE: "Mis Habilidades",
      PROJECTS_TITLE: "Mis Proyectos Destacados",
      PROJECT_CARD_TECHNOLOGIES: "Tecnologías:",
      PROJECT_CARD_VIEW_DEMO: "Ver Demo",
      PROJECT_CARD_SOURCE_CODE: "Código Fuente",
      CONTACT_TITLE: "Ponte en Contacto",
      CONTACT_SUBTITLE: "¿Tienes alguna pregunta, una propuesta de proyecto o simplemente quieres saludar? ¡No dudes en contactarme!",
      SEND_EMAIL_BTN: "Envíame un Email",
      CONTACT_PHONE_LABEL: (phone) => `Llamar ${phone}`,
      CONTACT_LOCATION_LABEL: (location) => `Ubicación: ${location}`,
      CONTACT_SOCIAL_PROMPT: "O encuéntrame en mis redes:",
      FOOTER_COPYRIGHT: (year, name) => `© ${year} ${name}. Todos los derechos reservados.`,
      FOOTER_MADE_WITH: "Hecho con ❤️ y React, TypeScript & Tailwind CSS.",
      BACK_TO_TOP_ARIA: "Volver arriba",
      MENU_ARIA_LABEL: "Abrir menú",
      CLOSE_MENU_ARIA_LABEL: "Cerrar menú",
      GITHUB_PROFILE_ARIA: "Perfil de GitHub",
      LINKEDIN_PROFILE_ARIA: "Perfil de LinkedIn",
      EMAIL_ME_ARIA: "Envíame un correo",
      CURRENT_LANGUAGE_NAME: "Español",
      SWITCH_TO_LANGUAGE_NAME: "Inglés",
      LANGUAGE_TOGGLE_BUTTON_TEXT: (switchToLang) => `${switchToLang.toUpperCase()}`,
    }
  },
  en: {
    ...enContent,
    UI_STRINGS: {
      APP_TITLE_SUFFIX: `Developer Portfolio - ${COMMON_PERSONAL_INFO_NAME}`,
      HERO_GREETING: "Hi, I'm",
      SEE_MY_PROJECTS: "View My Projects",
      DOWNLOAD_CV: "Download CV",
      CONTACT_ME: "Contact Me",
      ABOUT_ME_TITLE: "About Me",
      PROFILE_IMG_ALT: (name) => `Profile picture of ${name}`,
      PROFILE_IMG_BROKEN_ALT: "Profile image unavailable",
      EDUCATION_TITLE: "Education",
      EXPERIENCE_TITLE: "Professional Experience",
      SKILLS_TITLE: "My Skills",
      PROJECTS_TITLE: "My Featured Projects",
      PROJECT_CARD_TECHNOLOGIES: "Technologies:",
      PROJECT_CARD_VIEW_DEMO: "View Demo",
      PROJECT_CARD_SOURCE_CODE: "Source Code",
      CONTACT_TITLE: "Get in Touch",
      CONTACT_SUBTITLE: "Have a question, a project proposal, or just want to say hello? Feel free to contact me!",
      SEND_EMAIL_BTN: "Send Me an Email",
      CONTACT_PHONE_LABEL: (phone) => `Call ${phone}`,
      CONTACT_LOCATION_LABEL: (location) => `Location: ${location}`,
      CONTACT_SOCIAL_PROMPT: "Or find me on my networks:",
      FOOTER_COPYRIGHT: (year, name) => `© ${year} ${name}. All rights reserved.`,
      FOOTER_MADE_WITH: "Made with ❤️ and React, TypeScript & Tailwind CSS.",
      BACK_TO_TOP_ARIA: "Back to top",
      MENU_ARIA_LABEL: "Open menu",
      CLOSE_MENU_ARIA_LABEL: "Close menu",
      GITHUB_PROFILE_ARIA: "GitHub Profile",
      LINKEDIN_PROFILE_ARIA: "LinkedIn Profile",
      EMAIL_ME_ARIA: "Email Me",
      CURRENT_LANGUAGE_NAME: "English",
      SWITCH_TO_LANGUAGE_NAME: "Spanish",
      LANGUAGE_TOGGLE_BUTTON_TEXT: (switchToLang) => `${switchToLang.toUpperCase()}`,
    }
  }
};

// Default export of constants is no longer needed as components will get them from App context or props.
// Exporting individual constants is also deprecated.
// Export only CONTENT_BY_LANG and Language type.
export { Language }; // Exporting Language type from here for convenience if needed elsewhere, though it's in types.ts
