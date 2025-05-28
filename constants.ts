
import { PersonalInfo, SkillCategory, Project, NavLink, EducationEntry, ExperienceEntry } from './types'; // TestimonialEntry removed
import { CodeIcon, MobileIcon, DatabaseIcon, CloudIcon, DesignIcon, BrainIcon, BriefcaseIcon, AcademicCapIcon } from './components/IconComponents';
import React from 'react';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Asier Nuñez",
  tagline: "Desarrollador Full Stack | Creador de Soluciones Digitales Innovadoras",
  description: "Desarrollador de software full-stack con experiencia en apps móviles (Android/iOS) y web. Especializado en Kotlin, Java, Python y JavaScript, con un fuerte enfoque en UI/UX, APIs, bases de datos y despliegue en AWS. Soy práctico, adaptable, orientado a la calidad y cuento con un nivel B2 de inglés. \n\nDisfruto creando y mejorando aplicaciones móviles y web. Trabajo con una amplia gama de lenguajes y tecnologías, incluyendo Kotlin, Java, Python, JavaScript (Node.js), HTML, y CSS. Mi experiencia abarca el diseño de interfaces (UI/UX), la integración de APIs, el análisis de datos y la gestión de bases de datos con SQL, además de despliegue de aplicaciones en AWS. Me considero un profesional autodidacta, con rápida adaptación a nuevas tecnologías y un enfoque práctico para la resolución de problemas. Valoro la colaboración en entornos ágiles y dinámicos, siempre con el objetivo de que mis desarrollos no solo funcionen, sino que lo hagan de manera óptima y eficiente.\n\nSiempre buscando aprender y aplicar nuevas tecnologías para crear soluciones que impacten positivamente.",
  email: "asierngcode@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/asier-nu%C3%B1ez-garcia/", 
  githubUrl: "https://github.com/asiercode", 
  cvUrl: "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2FCV%20asierNG.pdf?alt=media&token=826c483c-1d54-470e-9be4-3f8d9bc39301", // Path updated
  profileImageUrl: "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2Fpfp.jpeg?alt=media&token=8823e239-963c-4686-86a0-4bc905374348", 
  phone: "+34 644905827",
  location: "Madrid",
};

export const EDUCATION_DATA: EducationEntry[] = [
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
];

export const EXPERIENCE_DATA: ExperienceEntry[] = [
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
];


export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Desarrollo Móvil",
    icon: React.createElement(MobileIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "Kotlin" },
      { name: "Java" },
      { name: "Android Nativo" },
      { name: "Jetpack Compose"}
    ],
  },
  {
    name: "Desarrollo Web",
    icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Node.js (Express)" },
      { name: "React / Next.js" },
      { name: "Spring Boot" },
      { name: "HTML5" },
      { name: "CSS3 / Tailwind CSS" },
      { name: "Python (Django/Flask)" },
    ],
  },
  {
    name: "Bases de Datos",
    icon: React.createElement(DatabaseIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "SQL (PostgreSQL, MySQL)" },
      { name: "NoSQL (MongoDB, Firebase)" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: React.createElement(CloudIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda, Amplify)" },
      { name: "Docker" },
      { name: "Git / GitHub Actions" },
    ],
  },
  {
    name: "Diseño y Otros",
    icon: React.createElement(DesignIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "Diseño UI/UX (Figma)" },
      { name: "APIs RESTful" },
      { name: "Metodologías Ágiles (Scrum)" },
    ],
  },
  {
    name: "Habilidades Blandas",
    icon: React.createElement(BrainIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { name: "Autodidacta y Proactivo" },
      { name: "Adaptabilidad Rápida" },
      { name: "Resolución Creativa de Problemas" },
      { name: "Colaboración y Comunicación Efectiva" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
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
];

// TESTIMONIALS_DATA removed

export const NAV_LINKS: NavLink[] = [
  { href: "#hero-section", label: "Inicio" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#education", label: "Formación" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  // { href: "#testimonials", label: "Testimonios" }, // Removed
  { href: "#contact", label: "Contacto" },
];
