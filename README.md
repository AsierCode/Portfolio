
# Portafolio de Desarrollador - Asier Nuñez

¡Bienvenido al repositorio de mi portafolio personal! Esta web ha sido diseñada para mostrar mis habilidades, proyectos y experiencia como desarrollador full-stack.

**Puedes ver la web en vivo aquí:** [Enlace a tu portafolio desplegado - si lo tienes]

## Sobre Mí - Asier Nuñez

Soy **Asier Nuñez**, un **Desarrollador Full Stack y Creador de Soluciones Digitales Innovadoras**.

Me especializo en el desarrollo de software full-stack con experiencia tanto en aplicaciones móviles (Android/iOS) como web. Mis principales herramientas incluyen Kotlin, Java, Python y JavaScript, y pongo un fuerte énfasis en la UI/UX, la creación y consumo de APIs, la gestión de bases de datos y el despliegue en plataformas cloud como AWS.

Soy una persona práctica, con gran capacidad de adaptación y siempre orientado a la calidad del software. Poseo un nivel B2 de inglés, lo que me permite trabajar en entornos internacionales. Disfruto enormemente creando y mejorando aplicaciones, explorando nuevas tecnologías y aplicándolas para construir soluciones que generen un impacto positivo. Valoro la colaboración en equipos ágiles y dinámicos, y mi objetivo es que mis desarrollos no solo funcionen, sino que lo hagan de manera óptima y eficiente.

### Contacto y Perfiles Sociales
*   **Email:** [asierngcode@gmail.com](mailto:asierngcode@gmail.com)
*   **LinkedIn:** [asier-nuñez-garcia](https://www.linkedin.com/in/asier-nu%C3%B1ez-garcia/)
*   **GitHub:** [asiercode](https://github.com/asiercode)
*   **Descargar CV:** [Mi Currículum Vitae](${process.env.CV_URL || 'https://firebasestorage.googleapis.com/v0/b/foodieclub-49432.firebasestorage.app/o/recipe_images%2FCV%20asierNG.pdf?alt=media&token=826c483c-1d54-470e-9be4-3f8d9bc39301'})

*(Nota: El CV se obtiene de una URL en `constants.ts`. Si usas una variable de entorno para el CV, ajústala según sea necesario o reemplaza `process.env.CV_URL` con la URL directa si no está configurada como variable de entorno en el contexto de este README.)*

## Características del Portafolio

Este sitio web está construido para ser moderno, interactivo y completamente responsive. Algunas de sus características clave son:

*   **Diseño Atractivo y Moderno:** Interfaz de usuario limpia y profesional con animaciones sutiles.
*   **Multilingüe:** Soporte para Español e Inglés, permitiendo a los usuarios cambiar de idioma fácilmente.
*   **Totalmente Responsive:** Adaptable a cualquier tamaño de pantalla, desde móviles hasta escritorios.
*   **Secciones Detalladas:**
    *   **Inicio (Hero):** Una bienvenida impactante con mi nombre y tagline.
    *   **Sobre Mí:** Una descripción más detallada de mi perfil profesional, mis pasiones y mi forma de trabajar.
    *   **Formación:** Detalles sobre mi educación y certificaciones.
    *   **Experiencia Profesional:** Un resumen de mis roles anteriores y responsabilidades.
    *   **Habilidades:** Un listado categorizado de mis competencias técnicas (Desarrollo Móvil, Web, Bases de Datos, Cloud & DevOps, Diseño y Habilidades Blandas).
    *   **Proyectos:** Una galería de mis proyectos más destacados, con descripciones, tecnologías utilizadas, y enlaces a demos en vivo y repositorios de código.
    *   **Contacto:** Un formulario o información para ponerse en contacto conmigo fácilmente.
*   **Navegación Fluida:** Menú de navegación claro y funcional, con scroll suave entre secciones.
*   **Botón "Volver Arriba":** Para facilitar la navegación en páginas largas.
*   **Preloader:** Una animación de carga para mejorar la experiencia inicial del usuario.
*   **Animación Divertida:** Un pequeño gatito que se asoma de vez en cuando en la esquina inferior izquierda, ¡un toque de personalidad!

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando un stack moderno de tecnologías front-end:

*   **React:** Biblioteca de JavaScript para construir interfaces de usuario interactivas.
*   **TypeScript:** Superset de JavaScript que añade tipado estático para un desarrollo más robusto.
*   **Tailwind CSS:** Framework CSS "utility-first" para un diseño rápido y personalizable.
*   **HTML5 y CSS3:** Para la estructura y estilos base.
*   **ES6+ JavaScript:** Utilizando las últimas características de JavaScript.

## Cómo Empezar (Desarrollo Local)

Si deseas ejecutar este proyecto localmente:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/asiercode/tu-repositorio-del-portafolio.git
    cd tu-repositorio-del-portafolio
    ```
    *(Reemplaza `tu-repositorio-del-portafolio` con el nombre real de tu repositorio)*

2.  **Instala las dependencias:**
    Este proyecto utiliza `htm` para importar módulos ES directamente en el navegador sin un paso de compilación tradicional para desarrollo simple. Asegúrate de que tu servidor local sirva los archivos correctamente. Para una configuración más compleja, considera herramientas como Vite o Create React App.

3.  **Configura las variables de entorno (si aplica):**
    Si el proyecto utiliza variables de entorno (por ejemplo, para una API Key de Gemini), asegúrate de crear un archivo `.env` y configurarlas. Actualmente, la API Key se espera en `process.env.API_KEY` para el SDK de `@google/genai`.

4.  **Abre `index.html` en tu navegador:**
    Puedes usar una extensión de servidor en vivo para tu editor de código (como Live Server en VS Code) o simplemente abrir el archivo `index.html` directamente en tu navegador.

---

¡Gracias por visitar mi portafolio y su repositorio! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
