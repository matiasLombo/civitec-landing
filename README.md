# CiviTEC Landing Page

Landing page B2B para comercializar CiviTEC — Portal del Contribuyente para municipios argentinos.

## Stack Tecnológico

- **Angular**: 20.x con componentes standalone
- **Tailwind CSS**: 3.4 para estilos utilitarios
- **Feather Icons**: para iconografía
- **TypeScript**: lenguaje principal
- **No router**: todo en una página con navegación por anclas

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
│   ├── components/          # 13 componentes por sección
│   │   ├── navbar/          # Barra de navegación sticky
│   │   ├── hero/            # Sección principal
│   │   ├── stats/           # 4 métricas clave
│   │   ├── problema/        # Pain points
│   │   ├── solucion/        # Propuesta de valor
│   │   ├── features/        # 6 características
│   │   ├── modulos/         # 8 módulos tributarios
│   │   ├── como-funciona/   # 3 pasos
│   │   ├── screenshots/     # Galería 2x2
│   │   ├── beneficios/      # 4 beneficios municipales
│   │   ├── cliente/         # Referencia Paso de los Libres
│   │   ├── contacto/        # CTA: email + WhatsApp
│   │   └── footer/          # Pie de página
│   ├── app.component.*      # Contenedor principal
│   └── app.config.ts
├── assets/
│   ├── logo.png             # Logo CiviTEC (copiado de frontend)
│   └── screenshots/         # Placeholders para reemplazar
├── styles.css               # Tailwind + animaciones scroll-reveal
└── index.html
```

## Secciones de la Página

| Sección | Componente | Contenido |
|---|---|---|
| Navbar | `NavbarComponent` | Logo + links ancla + botón demo (responsive) |
| Hero | `HeroComponent` | Headline + 2 botones CTA + screenshot placeholder |
| Stats | `StatsComponent` | 4 métricas: 8 módulos, 24/7, 100%, 1 municipio |
| Problema | `ProblemaComponent` | 3 pain points en tarjetas |
| Solución | `SolucionComponent` | Descripción + screenshot login |
| Características | `FeaturesComponent` | 6 tarjetas con emojis |
| Módulos | `ModulosComponent` | Grid 8 módulos con iconografía |
| Cómo Funciona | `ComoFuncionaComponent` | 3 pasos numerados |
| Screenshots | `ScreenshotsComponent` | Galería 2x2 |
| Beneficios | `BeneficiosComponent` | 4 beneficios para el municipio |
| Cliente | `ClienteComponent` | Referencia Paso de los Libres |
| Contacto | `ContactoComponent` | Botones email + WhatsApp |
| Footer | `FooterComponent` | Links + copyright |

## Navegación

- **Desktop**: barra de navegación horizontal con links ancla
- **Mobile**: hamburger menu con opciones deslizables
- **Scroll suave**: todos los botones usan `scrollIntoView({ behavior: 'smooth' })`

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

## Checklist Pre-Publicación

- [ ] Reemplazar todos los placeholders de imágenes
- [ ] Actualizar email y WhatsApp de contacto
- [ ] Verificar links de navegación funcionan
- [ ] Probar en mobile (375px, 768px, 1024px)
- [ ] Verificar que todos los botones CTA funcionan
- [ ] Test en navegadores: Chrome, Firefox, Safari, Edge
- [ ] Revisar Core Web Vitals (Lighthouse)
- [ ] Prueba de contacto: email y WhatsApp

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
