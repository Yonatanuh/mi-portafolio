# 🎨 Portafolio Web - Desarrollador de Software

Bienvenido a mi portafolio web profesional desarrollado con tecnologías modernas de frontend. Este proyecto es una demostración de mis habilidades como desarrollador Full Stack y mi pasión por la ciberseguridad.

## 📋 Tabla de Contenidos

- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Funciona](#-cómo-funciona)
- [Instalación y Uso](#-instalación-y-uso)
- [Características](#-características)
- [Estructura de Componentes](#-estructura-de-componentes)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Contacto](#-contacto)

## 🛠️ Tecnologías Utilizadas

Este portafolio está construido utilizando las siguientes tecnologías modernas:

### Framework y Lenguajes

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **JavaScript/TypeScript** - Lenguaje de programación principal
- **JSX** - Sintaxis de JavaScript extendida para React

### Herramientas y Librerías

- **Vite** - Herramienta de construcción rápida para proyectos modernos
- **Tailwind CSS** - Framework de CSS utility-first para estilos rápidos
- **PostCSS** - Procesador de CSS para transformar estilos con JavaScript

### Desarrollo y Linting

- **ESLint** - Linter de JavaScript para mantener código de calidad
- **React Hooks** - Patrón de componentes funcionales modernos

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── About.jsx       # Sección "Sobre Mí"
│   │   ├── Contact.jsx     # Sección de contacto
│   │   ├── Hero.jsx        # Sección principal (Hero)
│   │   ├── Projects.jsx    # Sección de proyectos
│   │   └── Skills.jsx      # Sección de habilidades
│   ├── App.css             # Estilos específicos de la aplicación
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos globales e importación de Tailwind
│   └── main.jsx            # Punto de entrada de la aplicación
├── public/                 # Archivos públicos estáticos
├── package.json           # Dependencias y scripts del proyecto
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind CSS
├── postcss.config.js      # Configuración de PostCSS
├── eslint.config.js       # Configuración de ESLint
└── README.md              # Este archivo
```

## 🚀 Cómo Funciona

### Arquitectura de React

Este portafolio utiliza una **arquitectura basada en componentes**, donde cada sección de la página es un componente independiente y reutilizable:

1. **Componente Principal (App.jsx)**: Coordina todos los componentes y maneja la navegación global
2. **Componentes de Sección**: Cada sección (Hero, About, Skills, Projects, Contact) es un componente independiente
3. **Gestión de Estado**: Uso de `useState` y `useEffect` para manejar interacciones y eventos del navegador

### Flujo de Trabajo

```
1. El usuario navega a la página
2. main.jsx renderiza el componente App
3. App.jsx renderiza todos los componentes de sección
4. Cada componente renderiza su HTML con Tailwind CSS
5. El usuario interactúa con la página (navegación, formularios, etc.)
```

### Tailwind CSS Utility-First

En lugar de escribir CSS personalizado complejo, utilizo **clases utility** de Tailwind que me permiten:

- Estilizar elementos directamente en el JSX
- Mantener un diseño consistente
- Crear diseños responsivos fácilmente
- Reducir el tiempo de desarrollo

Ejemplo:

```jsx
<div className="bg-gray-900 text-white p-6 rounded-lg hover:bg-gray-800 transition">
  Contenido
</div>
```

## 📦 Instalación y Uso

### Requisitos Previos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Pasos de Instalación

1. **Clona o descarga el proyecto**

   ```bash
   cd "c:\Users\HP\OneDrive\Documentos\paginas web de pruebas\mi-portafolio"
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique)

### Comandos Disponibles

| Comando           | Descripción                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con hot-reload     |
| `npm run build`   | Crea una versión de producción optimizada           |
| `npm run preview` | Previsualiza la versión de producción localmente    |
| `npm run lint`    | Ejecuta ESLint para verificar la calidad del código |

## ✨ Características

### Diseño Responsivo

- ✅ Funciona perfectamente en móviles, tablets y escritorio
- ✅ Menú de navegación adaptativo (hamburguesa en móviles)
- ✅ Grid responsivo para las tarjetas de proyectos

### Interactividad

- ✅ Navegación suave entre secciones
- ✅ Efectos hover en botones y tarjetas
- ✅ Animaciones CSS fluidas
- ✅ Formulario de contacto funcional

### Estética

- ✅ Tema oscuro moderno (dark mode por defecto)
- ✅ Gradientes y efectos visuales
- ✅ Tipografía clara y legible
- ✅ Colores consistentes (azul, púrpura, verde)

### Performance

- ✅ Carga rápida gracias a Vite
- ✅ Código optimizado y minificado
- ✅ Imágenes y recursos optimizados

## 🧩 Estructura de Componentes

### Hero.jsx

La sección principal que presenta al desarrollador. Incluye:

- Saludo personalizado
- Descripción profesional
- Botones de llamada a la acción
- Enlaces a redes sociales
- Efectos de fondo animados

### About.jsx

Sección sobre mí que explica:

- Historia personal
- Valores profesionales
- Misión y visión

### Skills.jsx

Muestra las habilidades técnicas con barras de progreso:

- **Frontend**: React, JavaScript, Tailwind CSS, HTML, CSS
- **Backend**: Node.js, Express, Python, SQL/NoSQL
- **Seguridad**: Ciberseguridad, Análisis de Riesgos, Auditoría

### Projects.jsx

Muestra los proyectos destacados con:

- Tarjetas con información del proyecto
- Tecnologías utilizadas
- Enlaces a código y demo
- Estado del proyecto

### Contact.jsx

Formulario de contacto que incluye:

- Información de contacto
- Formulario HTML funcional
- Enlaces a redes profesionales

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `tailwind.config.js` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6', // Cambia este color
      secondary: '#8b5cf6', // Y este
    }
  }
}
```

### Actualizar Información Personal

1. **Nombre y descripción**: Edita `src/components/Hero.jsx`
2. **Sobre mí**: Edita `src/components/About.jsx`
3. **Proyectos**: Edita `src/components/Projects.jsx`
4. **Habilidades**: Edita `src/components/Skills.jsx`
5. **Contacto**: Edita `src/components/Contact.jsx`

### Agregar Nuevas Secciones

1. Crea un nuevo archivo en `src/components/Nombre.jsx`
2. Importa el componente en `App.jsx`
3. Agrega el componente en el JSX
4. Crea un botón de navegación en el `nav`

## 🚢 Despliegue

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Inicia sesión:

   ```bash
   vercel login
   ```

3. Despliega:
   ```bash
   vercel
   ```

### Opción 2: Netlify

1. Arrastra la carpeta `dist` a Netlify
2. O usa Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Opción 3: GitHub Pages

1. Instala `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Agrega en `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Despliega:
   ```bash
   npm run deploy
   ```

## 📝 Notas Técnicas

### ¿Por qué React?

React es ideal para portafolios porque:

- Componentes reutilizables
- Estado predecible
- Gran ecosistema
- Fácil de mantener y escalar

### ¿Por qué Tailwind CSS?

Tailwind permite:

- Desarrollo extremadamente rápido
- Diseño consistente
- Fácil personalización
- Tamaño de bundle pequeño

### ¿Por qué Vite?

Vite ofrece:

- Inicio de servidor instantáneo
- Hot Module Replacement (HMR) rápido
- Optimización automática para producción
- Soporte moderno para ES modules

## 🤝 Contribuciones

Este es un proyecto personal, pero si tienes sugerencias o mejoras, no dudes en crear un issue o pull request.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para detalles.

## 📞 Contacto

- **Email**: tu-email@example.com
- **LinkedIn**: linkedin.com/in/tu-perfil
- **GitHub**: github.com/tu-usuario
- **Twitter**: twitter.com/tu-usuario

---

**¡Gracias por visitar mi portafolio!** 🚀

_Desarrollado con ❤️ usando React, Tailwind CSS y Vite_
