# CiviTEC Landing Page

Landing page B2B para comercializar CiviTEC — Sistema de Gestión Municipal Integral para municipios argentinos.

## Descripción

Este sitio presenta **dos productos diferenciados**:

1. **CiviTEC Desktop** (ruta `/`): Sistema de escritorio completo con 18 módulos integrados para la gestión municipal integral
2. **Portal del Contribuyente** (ruta `/portal`): Portal web para que los contribuyentes consulten sus deudas e informes online

## Stack Tecnológico

- **Angular**: 20.x con componentes standalone
- **Angular Router**: Para navegación entre páginas
- **Tailwind CSS**: 3.4 para estilos utilitarios
- **Lucide Angular**: Para iconografía (reemplazo de Feather Icons)
- **TypeScript**: lenguaje principal

## Instalación Rápida

```bash
# Instalar dependencias
npm install

# Desarrollo
ng serve --port 4200

# Build para producción
ng build --configuration production
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── pages/               # Páginas principales
│   │   ├── home-page/       # Landing principal (Sistema Desktop)
│   │   └── portal-page/     # Portal del Contribuyente
│   ├── components/          # Componentes reutilizables
│   │   ├── navbar/          # Barra de navegación (Portal)
│   │   ├── hero/            # Hero section (Portal)
│   │   ├── solucion/        # Propuesta de valor (Portal)
│   │   ├── features/        # Características (Portal)
│   │   ├── como-funciona/   # Cómo funciona (Portal)
│   │   ├── screenshots/     # Galería (Portal)
│   │   ├── beneficios/      # Beneficios (Portal)
│   │   ├── contacto/        # Contacto (Portal)
│   │   └── footer/          # Pie de página (Portal)
│   ├── app.routes.ts        # Configuración de rutas
│   ├── app.component.*      # Contenedor principal con router-outlet
│   └── app.config.ts        # Configuración con provideRouter
├── assets/
│   ├── logo.png             # Logo CiviTEC
│   └── screenshots/         # Placeholders para reemplazar
├── styles.css               # Tailwind + estilos globales
└── index.html
```

## Rutas Disponibles

### Ruta Principal (`/`) - CiviTEC Desktop

Landing principal que presenta el **Sistema de Gestión Municipal Integral**:

- **Hero**: Presentación del sistema desktop con 18 módulos
- **Módulos**: Grid 3x6 con los 18 módulos del sistema (Catastro, Inmobiliario, Automotores, Comercio, THPS, TyS, TAP, TyC, JZF, GIP, CCV, Cementerio, Tesorería, Contabilidad, Compras, Obras Públicas, Servicios Varios, API CiviTEC)
- **Características**: 6 features clave del sistema (Interfaz intuitiva, Informes personalizados, Seguridad integral, etc.)
- **Beneficios**: 4 beneficios para municipios (Gestión integral, Aumento de recaudación, Transparencia, Escalabilidad)
- **Contacto**: Email y WhatsApp

### Ruta Portal (`/portal`) - Portal del Contribuyente

Landing del producto complementario **Portal del Contribuyente** (contenido original):

- Hero, Solución, Features, Beneficios, Cómo Funciona, Screenshots, Contacto

> **Nota**: Esta ruta está funcional pero el acceso está oculto por defecto. Se puede acceder directamente mediante `/portal` hasta decidir si se incluye en la navegación principal.

## Navegación

### Landing Principal (/)
- **Navbar fijo**: Links de ancla a secciones (Módulos, Características, Beneficios, Contacto)
- **Scroll suave**: Navegación con `scrollIntoView({ behavior: 'smooth' })`
- **Responsive**: Diseño adaptativo para desktop, tablet y móvil

### Portal del Contribuyente (/portal)
- **Single Page**: Navegación por anclas con scroll-snap
- **Barra de navegación**: Links a secciones internas

## Animaciones

- **Scroll Reveal**: elementos se animan al entrar en viewport (slideUp 0.6s)
- **Delays progresivos**: cada elemento tiene un pequeño delay escalonado
- **CSS custom**: `@keyframes slideUp` + `@keyframes fadeIn`

## Placeholders de Imágenes

Todos los placeholders son divs grises con texto descriptivo. **Antes de publicar**, reemplazar con:

| Ubicación | Archivo | Referencia |
|---|---|---|
| Hero | `assets/screenshots/dashboard.png` | Panel principal de módulos |
| Solución | `assets/screenshots/login.png` | Pantalla de login |
| Cómo funciona | `assets/screenshots/deudas.png` | Vista de deudas |
| Galería 1-4 | `assets/screenshots/` | dashboard, deudas, detalle-cuota, perfil |

## Datos de Contacto (Placeholders)

Reemplazar antes de publicar:

- **Email**: `contacto@civitec.com.ar`
- **WhatsApp**: `+549 379 4000000` → Link: `https://wa.me/5493794000000`

## Colores (Tailwind)

```js
// tailwind.config.js
colors: {
  brand: {
    primary: '#1B96C4',    // Azul principal
    dark: '#1F2937',       // Gris oscuro (footer)
  }
}
```

## Deploy en Google

### Google Cloud Storage (Sitio estático)

```bash
# 1. Build
ng build --configuration production

# 2. Crear bucket (si no existe)
gsutil mb gs://civitec-landing

# 3. Copiar archivos
gsutil -m cp -r dist/civitec-landing/browser/* gs://civitec-landing/

# 4. Configurar CORS y hosting (opcional)
gsutil cors set cors.json gs://civitec-landing
```

### Firebase Hosting (Recomendado - más simple)

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Inicializar
firebase init hosting

# 3. Build
ng build --configuration production

# 4. Deploy
firebase deploy --only hosting
```

## Desarrollo Local

```bash
# Iniciar servidor
ng serve --port 4200

# Abrir en navegador
http://localhost:4200

# Verificar responsive
DevTools → toggle device toolbar → 375px (mobile), 768px (tablet)
```

## Build Producción

```bash
# Build optimizado
ng build --configuration production

# Salida: dist/civitec-landing/browser/
# - index.html (gzipped)
# - main-*.js (tree-shaken)
# - styles-*.css (minified)
# - polyfills-*.js
```

## Módulos del Sistema CiviTEC

Para información detallada sobre todos los módulos, consultar el archivo `/MODULOS_CIVITEC.md` en la raíz del proyecto.

**Módulos principales:**
- **Gestión Tributaria**: Catastro, Inmobiliario, Automotores, Comercio, THPS, TyS, TAP
- **Administración**: Tesorería, Contabilidad, Compras, Obras Públicas
- **Legales**: Juzgado de Faltas (JZF), Convenios y Juicios (GIP)
- **Servicios**: Cementerio, Transporte y Carnet (TyC), Cuentas Corrientes Varias (CCV), Servicios Varios
- **Integración**: API CiviTEC

## Checklist Pre-Publicación

- [ ] Reemplazar todos los placeholders de imágenes
- [ ] Actualizar email y WhatsApp de contacto reales
- [ ] Verificar links de navegación funcionan en ambas rutas
- [ ] Probar en mobile (375px, 768px, 1024px)
- [ ] Verificar que todos los botones CTA funcionan
- [ ] Test en navegadores: Chrome, Firefox, Safari, Edge
- [ ] Revisar Core Web Vitals (Lighthouse) para ambas rutas
- [ ] Prueba de contacto: email y WhatsApp
- [ ] Decidir si mostrar acceso a `/portal` en navegación o mantenerlo oculto

## Arquitectura de Componentes

Todos los componentes son **standalone** (sin módulos):

```typescript
@Component({
  selector: 'app-xxx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xxx.component.html',
  styleUrl: './xxx.component.css'
})
export class XxxComponent {}
```

## CSS & Tailwind

- **Global**: `src/styles.css` (animaciones + Tailwind directives)
- **Componentes**: estilos CSS vacíos (usar clases Tailwind en templates)
- **Colores brand**: acceder vía `text-brand-primary`, `bg-brand-dark`, etc.

## Notas de Mantenimiento

1. **Logo**: copiar desde `civitec-municipal-frontend/src/assets/logo-loading.png`
2. **Screenshots**: crear carpeta `src/assets/screenshots/` con imágenes reales
3. **Contenido**: actualizar textos en archivos `.html` de cada componente
4. **Link anclas**: usar `scrollToSection()` en navbar + botones CTA

---

**Generado con Angular 20 + Tailwind 3.4 | Español Argentino | B2B Landing Page**
