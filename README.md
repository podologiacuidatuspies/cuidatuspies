# Cuida Tus Pies - Sitio Web de Podología Profesional

Sitio web profesional para servicios de podología de Laura Núñez Morales.

## 🚀 Despliegue en Vercel

### Configuración Rápida

1. **Conectar Repositorio**
   - Importa tu repositorio de GitHub en Vercel
   - Vercel detectará automáticamente la configuración de `vercel.json`

2. **Variables de Entorno Requeridas**
   - En el panel de Vercel, ve a "Settings" → "Environment Variables"
   - Agrega la siguiente variable obligatoria:
     ```
     VITE_APP_ID=app-8csbwkn41kw1
     ```
   - Variables opcionales (solo si usas Supabase):
     ```
     VITE_SUPABASE_URL=tu_url_de_supabase
     VITE_SUPABASE_ANON_KEY=tu_clave_anon_de_supabase
     ```

3. **Desplegar**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará automáticamente tu sitio

### Configuración del Proyecto

- **Framework**: Vite (React + TypeScript)
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`
- **Node Version**: 20.x

### Características del Sitio

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ 8 imágenes personalizadas de alta calidad (10.8MB)
- ✅ 12 botones de WhatsApp con enlace unificado
- ✅ Meta Pixel de Facebook integrado (ID: 3313023712206281)
- ✅ Supabase configurado (opcional)
- ✅ Navegación suave con smooth scroll
- ✅ Accesibilidad WCAG AA
- ✅ Colores pastel profesionales

### Secciones del Sitio

1. **Header**: Navegación sticky con logo circular
2. **Hero**: Título principal con imagen profesional
3. **Quien Soy**: Biografía de Laura Núñez Morales (20+ años experiencia)
4. **Servicios**: 4 servicios especializados con imágenes
5. **Tarifas**: 3 planes de atención ($25.000 - $30.000)
6. **Beneficios**: 6 beneficios destacados
7. **Productos**: 3 productos podológicos
8. **Ubicación**: Dirección y mapa de consulta
9. **Footer**: Información de contacto y horarios

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- shadcn/ui
- Supabase (opcional)
- Meta Pixel (Facebook)

## Project Directory

```
├── README.md # Documentation
├── components.json # Component library configuration
├── index.html # Entry file
├── package.json # Package management
├── postcss.config.js # PostCSS configuration
├── public # Static resources directory
│   ├── favicon.png # Icon
│   └── images # Image resources
├── src # Source code directory
│   ├── App.tsx # Entry file
│   ├── components # Components directory
│   ├── context # Context directory
│   ├── db # Database configuration directory
│   ├── hooks # Common hooks directory
│   ├── index.css # Global styles
│   ├── layout # Layout directory
│   ├── lib # Utility library directory
│   ├── main.tsx # Entry file
│   ├── routes.tsx # Routing configuration
│   ├── pages # Pages directory
│   ├── services # Database interaction directory
│   ├── types # Type definitions directory
├── tsconfig.app.json # TypeScript frontend configuration file
├── tsconfig.json # TypeScript configuration file
├── tsconfig.node.json # TypeScript Node.js configuration file
└── vite.config.ts # Vite configuration file
```

## Tech Stack

Vite, TypeScript, React, Supabase

## Development Guidelines

### How to edit code locally?

You can choose [VSCode](https://code.visualstudio.com/Download) or any IDE you prefer. The only requirement is to have Node.js and npm installed.

### Environment Requirements

```
# Node.js ≥ 20
# npm ≥ 10
Example:
# node -v   # v20.18.3
# npm -v    # 10.8.2
```

### Installing Node.js on Windows

```
# Step 1: Visit the Node.js official website: https://nodejs.org/, click download. The website will automatically suggest a suitable version (32-bit or 64-bit) for your system.
# Step 2: Run the installer: Double-click the downloaded installer to run it.
# Step 3: Complete the installation: Follow the installation wizard to complete the process.
# Step 4: Verify installation: Open Command Prompt (cmd) or your IDE terminal, and type `node -v` and `npm -v` to check if Node.js and npm are installed correctly.
```

### Installing Node.js on macOS

```
# Step 1: Using Homebrew (Recommended method): Open Terminal. Type the command `brew install node` and press Enter. If Homebrew is not installed, you need to install it first by running the following command in Terminal:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Alternatively, use the official installer: Visit the Node.js official website. Download the macOS .pkg installer. Open the downloaded .pkg file and follow the prompts to complete the installation.
# Step 2: Verify installation: Open Command Prompt (cmd) or your IDE terminal, and type `node -v` and `npm -v` to check if Node.js and npm are installed correctly.
```

### After installation, follow these steps:

```bash
# Step 1: Download the code package
# Step 2: Extract the code package
# Step 3: Open the code package with your IDE and navigate into the code directory
# Step 4: In the IDE terminal, run the command to install dependencies: 
pnpm install

# Step 5: In the IDE terminal, run the command to start the development server: 
pnpm run dev

# Step 6: Build for production:
pnpm run build

# Step 7: Preview production build:
pnpm run preview

# Step 8: Run lint checks:
pnpm run lint
```

### Comandos Disponibles

```bash
# Desarrollo local
pnpm run dev

# Construir para producción
pnpm run build

# Vista previa de producción
pnpm run preview

# Verificar código
pnpm run lint
```

## Información de Contacto

- **WhatsApp**: +56 9 3583 5479
- **Dirección**: Francisco Bilbao 3471, Providencia, Santiago
- **Horarios**: 
  - Lunes a Viernes: 9:00-19:00
  - Sábado: 10:00-14:00
  - Domingo: Cerrado

## Soporte

Para preguntas o soporte técnico, contacta a través de WhatsApp.

---

© 2025 Cuida Tus Pies - Todos los derechos reservados
