# Guía de Despliegue en Vercel

## Pasos para Desplegar

### 1. Preparar el Repositorio en GitHub

Si aún no has subido tu código a GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Cuida Tus Pies website"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
2. Haz clic en "Add New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite

### 3. Configurar Variables de Entorno

En la pantalla de configuración del proyecto, antes de desplegar:

1. Ve a la sección "Environment Variables"
2. Agrega la variable obligatoria:
   - **Name**: `VITE_APP_ID`
   - **Value**: `app-8csbwkn41kw1`
   - **Environment**: Production, Preview, Development (selecciona todos)

3. Si usas Supabase (opcional), agrega también:
   - **Name**: `VITE_SUPABASE_URL`
   - **Value**: Tu URL de Supabase
   - **Name**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: Tu clave anónima de Supabase

### 4. Configuración del Build (Ya está configurada)

Vercel usará automáticamente la configuración de `vercel.json`:

- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### 5. Desplegar

1. Haz clic en "Deploy"
2. Espera a que Vercel construya y despliegue tu sitio (2-3 minutos)
3. Una vez completado, recibirás una URL de producción

### 6. Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado (ej: `cuidatuspies.cl`)
3. Sigue las instrucciones para configurar los registros DNS

## Verificación Post-Despliegue

Después del despliegue, verifica:

- ✅ El sitio carga correctamente
- ✅ Todas las imágenes se muestran
- ✅ Los botones de WhatsApp funcionan
- ✅ El Meta Pixel de Facebook está activo
- ✅ La navegación smooth scroll funciona
- ✅ El sitio es responsive en móvil y desktop

## Actualizaciones Futuras

Para actualizar el sitio:

1. Haz cambios en tu código local
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. Vercel desplegará automáticamente los cambios

## Solución de Problemas

### Error: "No Output Directory named 'dist' found"

**Solución**: Ya está resuelto. El archivo `vercel.json` y `package.json` están configurados correctamente.

### Error: Build fails

**Solución**: 
1. Verifica que todas las variables de entorno estén configuradas
2. Revisa los logs de build en Vercel para identificar el error específico

### Imágenes no se cargan

**Solución**: 
1. Verifica que todas las imágenes estén en la carpeta `public/`
2. Asegúrate de que los nombres de archivo coincidan exactamente (case-sensitive)

## Contacto

Para soporte adicional, contacta a través de WhatsApp: +56 9 3583 5479

---

© 2025 Cuida Tus Pies
