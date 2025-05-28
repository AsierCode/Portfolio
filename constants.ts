
import { PersonalInfo, SkillCategory, Project, NavLink, EducationEntry, ExperienceEntry } from './types';
import { CodeIcon, MobileIcon, DatabaseIcon, CloudIcon, DesignIcon, BrainIcon, BriefcaseIcon, AcademicCapIcon } from './components/IconComponents';
import React from 'react';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Asier Nuñez", // Name generally not translated or handled specially if needed
  taglineEs: "Desarrollador Full Stack | Creador de Soluciones Digitales Innovadoras",
  taglineEn: "Full Stack Developer | Creator of Innovative Digital Solutions",
  descriptionEs: "Desarrollador de software full-stack con experiencia en apps móviles (Android/iOS) y web. Especializado en Kotlin, Java, Python y JavaScript, con un fuerte enfoque en UI/UX, APIs, bases de datos y despliegue en AWS. Soy práctico, adaptable, orientado a la calidad y cuento con un nivel B2 de inglés. \n\nDisfruto creando y mejorando aplicaciones móviles y web. Trabajo con una amplia gama de lenguajes y tecnologías, incluyendo Kotlin, Java, Python, JavaScript (Node.js), HTML, y CSS. Mi experiencia abarca el diseño de interfaces (UI/UX), la integración de APIs, el análisis de datos y la gestión de bases de datos con SQL, además de despliegue de aplicaciones en AWS. Me considero un profesional autodidacta, con rápida adaptación a nuevas tecnologías y un enfoque práctico para la resolución de problemas. Valoro la colaboración en entornos ágiles y dinámicos, siempre con el objetivo de que mis desarrollos no solo funcionen, sino que lo hagan de manera óptima y eficiente.\n\nSiempre buscando aprender y aplicar nuevas tecnologías para crear soluciones que impacten positivamente.",
  descriptionEn: "Full-stack software developer with experience in mobile (Android/iOS) and web apps. Specialized in Kotlin, Java, Python, and JavaScript, with a strong focus on UI/UX, APIs, databases, and AWS deployment. I am practical, adaptable, quality-oriented, and have a B2 level of English. \n\nI enjoy creating and improving mobile and web applications. I work with a wide range of languages and technologies, including Kotlin, Java, Python, JavaScript (Node.js), HTML, and CSS. My experience covers interface design (UI/UX), API integration, data analysis, and database management with SQL, as well as application deployment on AWS. I consider myself a self-taught professional, with rapid adaptation to new technologies and a practical approach to problem-solving. I value collaboration in agile and dynamic environments, always aiming for my developments not only to work but to do so optimally and efficiently.\n\nAlways looking to learn and apply new technologies to create solutions that have a positive impact.",
  email: "asierngcode@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/asier-nu%C3%B1ez-garcia/", 
  githubUrl: "https://github.com/asiercode", 
  cvUrl: "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2FCV%20asierNG.pdf?alt=media&token=826c483c-1d54-470e-9be4-3f8d9bc39301",
  profileImageUrl: "https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2Fpfp.jpeg?alt=media&token=8823e239-963c-4686-86a0-4bc905374348", 
  phone: "+34 644905827",
  location: "Madrid",
};

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degreeEs: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    degreeEn: "Higher National Diploma in Multiplatform Application Development",
    institutionEs: "CDM FP",
    institutionEn: "CDM FP",
    years: "2023 - 2025",
    descriptionEs: "Formación enfocada en el desarrollo de aplicaciones para diversas plataformas, incluyendo móviles y escritorio.",
    descriptionEn: "Training focused on the development of applications for various platforms, including mobile and desktop.",
  },
  {
    degreeEs: "Grado Medio en Sistemas Microinformáticos y Redes",
    degreeEn: "Vocational Training in Microcomputer Systems and Networks",
    institutionEs: "CDM FP",
    institutionEn: "CDM FP",
    years: "2021 - 2023",
    descriptionEs: "Conocimientos en hardware, software, sistemas operativos y redes locales.",
    descriptionEn: "Knowledge in hardware, software, operating systems, and local networks.",
  },
];

export const EXPERIENCE_DATA: ExperienceEntry[] = [
   {
    companyEs: "Cadit Spain",
    companyEn: "Cadit Spain",
    roleEs: "Desarrollo de Software",
    roleEn: "Software Development",
    years: "2025", 
    descriptionEs: [
      "Desarrollo de aplicaciones de escritorio para la gestión de inversiones.",
      "Integración con sistemas IBM i (anteriormente AS/400).",
      "Utilización de RPG y Java en el desarrollo."
    ],
    descriptionEn: [
      "Development of desktop applications for investment management.",
      "Integration with IBM i systems (formerly AS/400).",
      "Use of RPG and Java in development."
    ],
  },
  {
    companyEs: "Neuronic",
    companyEn: "Neuronic",
    roleEs: "Desarrollo Web",
    roleEn: "Web Development",
    years: "2023",
    descriptionEs: [
      "Desarrollo de landing pages a través de WordPress.",
      "Puesta en marcha y optimización para motores de búsqueda (SEO)."
    ],
    descriptionEn: [
      "Development of landing pages using WordPress.",
      "Deployment and search engine optimization (SEO)."
    ],
  },
];


export const SKILLS_DATA: SkillCategory[] = [
  {
    nameEs: "Desarrollo Móvil",
    nameEn: "Mobile Development",
    icon: React.createElement(MobileIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "Kotlin", nameEn: "Kotlin" },
      { nameEs: "Java", nameEn: "Java" },
      { nameEs: "Android Nativo", nameEn: "Native Android" },
      { nameEs: "Jetpack Compose", nameEn: "Jetpack Compose"}
    ],
  },
  {
    nameEs: "Desarrollo Web",
    nameEn: "Web Development",
    icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "JavaScript (ES6+)", nameEn: "JavaScript (ES6+)" },
      { nameEs: "TypeScript", nameEn: "TypeScript" },
      { nameEs: "Node.js (Express)", nameEn: "Node.js (Express)" },
      { nameEs: "React / Next.js", nameEn: "React / Next.js" },
      { nameEs: "Spring Boot", nameEn: "Spring Boot" },
      { nameEs: "HTML5", nameEn: "HTML5" },
      { nameEs: "CSS3 / Tailwind CSS", nameEn: "CSS3 / Tailwind CSS" },
      { nameEs: "Python (Django/Flask)", nameEn: "Python (Django/Flask)" },
    ],
  },
  {
    nameEs: "Bases de Datos",
    nameEn: "Databases",
    icon: React.createElement(DatabaseIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "SQL (PostgreSQL, MySQL)", nameEn: "SQL (PostgreSQL, MySQL)" },
      { nameEs: "NoSQL (MongoDB, Firebase)", nameEn: "NoSQL (MongoDB, Firebase)" },
    ],
  },
  {
    nameEs: "Cloud & DevOps",
    nameEn: "Cloud & DevOps",
    icon: React.createElement(CloudIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "AWS (EC2, S3, RDS, Lambda, Amplify)", nameEn: "AWS (EC2, S3, RDS, Lambda, Amplify)" },
      { nameEs: "Docker", nameEn: "Docker" },
      { nameEs: "Git / GitHub Actions", nameEn: "Git / GitHub Actions" },
    ],
  },
  {
    nameEs: "Diseño y Otros",
    nameEn: "Design & Others",
    icon: React.createElement(DesignIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "Diseño UI/UX (Figma)", nameEn: "UI/UX Design (Figma)" },
      { nameEs: "APIs RESTful", nameEn: "RESTful APIs" },
      { nameEs: "Metodologías Ágiles (Scrum)", nameEn: "Agile Methodologies (Scrum)" },
    ],
  },
  {
    nameEs: "Habilidades Blandas",
    nameEn: "Soft Skills",
    icon: React.createElement(BrainIcon, { className: "w-8 h-8 text-sky-400" }),
    skills: [
      { nameEs: "Autodidacta y Proactivo", nameEn: "Self-taught and Proactive" },
      { nameEs: "Adaptabilidad Rápida", nameEn: "Quick Adaptability" },
      { nameEs: "Resolución Creativa de Problemas", nameEn: "Creative Problem Solving" },
      { nameEs: "Colaboración y Comunicación Efectiva", nameEn: "Collaboration and Effective Communication" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    titleEs: "FoodieClub",
    titleEn: "FoodieClub",
    descriptionEs: "FoodieClub es una red social para móviles Android, centrada en el intercambio y descubrimiento de recetas de comida. Desarrollada nativamente con Kotlin y Jetpack Compose, utiliza Firebase para la autenticación y base de datos en tiempo real. El backend se apoya en una API REST construida con Spring Boot y MySQL, todo desplegado en AWS para asegurar escalabilidad y disponibilidad.",
    descriptionEn: "FoodieClub is a social network for Android mobile devices, focused on sharing and discovering food recipes. Natively developed with Kotlin and Jetpack Compose, it uses Firebase for authentication and real-time database. The backend is supported by a REST API built with Spring Boot and MySQL, all deployed on AWS to ensure scalability and availability.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Spring Boot", "MySQL", "AWS", "API Rest"],
    imageUrl: "https://i.postimg.cc/VLGmNnMt/Proyecto-nuevo.png", 
    liveUrl: "#", 
    repoUrl: "https://github.com/AsierCode/FoodieClub", 
  },
  {
    id: "project-2",
    titleEs: "MyNextGame",
    titleEn: "MyNextGame",
    descriptionEs: "MyNextGame es una aplicación web dinámica, desarrollada con React, TypeScript y Vite, diseñada para simplificar la búsqueda de tu próximo videojuego. Conéctate a una extensa base de datos a través de una API externa y explora títulos, filtra por género, plataforma o popularidad, y accede a información detallada para tomar la mejor decisión y sumergirte en tu siguiente aventura digital.",
    descriptionEn: "MyNextGame is a dynamic web application, developed with React, TypeScript, and Vite, designed to simplify the search for your next video game. Connect to an extensive database via an external API and explore titles, filter by genre, platform, or popularity, and access detailed information to make the best decision and dive into your next digital adventure.",
    technologies: ["React", "TypeScript", "API", "Vite"],
    imageUrl: "https://i.postimg.cc/gjnPN4XC/image.png",
    liveUrl: "https://mynextgame.netlify.app/",
    repoUrl: "https://github.com/AsierCode/MyNextGameProject",
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "#hero-section", labelEs: "Inicio", labelEn: "Home" },
  { href: "#about", labelEs: "Sobre Mí", labelEn: "About Me" },
  { href: "#education", labelEs: "Formación", labelEn: "Education" },
  { href: "#experience", labelEs: "Experiencia", labelEn: "Experience" },
  { href: "#skills", labelEs: "Habilidades", labelEn: "Skills" },
  { href: "#projects", labelEs: "Proyectos", labelEn: "Projects" },
  { href: "#contact", labelEs: "Contacto", labelEn: "Contact" },
];
