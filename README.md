# 🏛️ Catalunya Turismo - Landing Page Adaptativa

**Práctica 4 - Diseño Adaptativo y Frameworks CSS**  
**Autor:** Ricardo Avila  
**Centro:** Ilerna  
**Curso:** DAW09 - Diseño de Interfaces Web

---

## 📋 Descripción del Proyecto

Landing page turística de Catalunya diseñada con un objetivo concreto: **captar la atención del visitante y guiarlo hacia la acción de planificar su viaje**. 

Este proyecto implementa tres versiones diferentes del mismo diseño utilizando distintas técnicas de maquetación CSS:
- ✅ **Versión Flexbox** (CSS Flexbox puro)
- ✅ **Versión Grid** (CSS Grid Layout)
- ✅ **Versión Framework** (Bootstrap personalizado)

---

## 🎯 Paso 1 - Diseño de la Landing Page

### **Propósito Principal**
Atraer turistas interesados en Catalunya y guiarlos hacia el contacto para planificar su viaje.

### **Público Objetivo**
- Turistas nacionales e internacionales (25-55 años)
- Viajeros culturales interesados en historia y patrimonio
- Personas que buscan experiencias auténticas mediterráneas

### **Lenguaje y Estilo Visual**
- **Emociones:** Descubrimiento, aventura, herencia cultural, experiencia auténtica
- **Colores:** Rojo (#c8102e) y Dorado (#d4a520) - colores de la senyera catalana
- **Tipografía:** Moderna, limpia y legible (Segoe UI)
- **Estilo:** Profesional pero accesible, con énfasis en imágenes impactantes

### **Estructura de Contenidos**

#### 1️⃣ **Header**
- Logo de Catalunya
- Navegación: Inicio | Historia | Destinos | Contacto
- Selector de idioma (ES/CAT)

#### 2️⃣ **Hero Section** (Sección Principal)
- Título principal: "Descubre Catalunya"
- Subtítulo: "Donde la historia se encuentra con el Mediterráneo"
- **CTA Primario:** "Explorar Destinos" (bajo compromiso)
- Imagen de fondo panorámica

#### 3️⃣ **Reseña Histórica**
- Historia de la senyera (bandera catalana)
- Poema histórico de Francesc Fontanella (1644)
- Imágenes: Bandera y mapa histórico
- Quick facts: Patrimonio UNESCO, cultura, costa
- Tabla de las 4 provincias catalanas

#### 4️⃣ **Destinos** (Grid/Flex Adaptativo)
Tarjetas con 4 destinos principales:
- **Barcelona:** Sagrada Familia, modernismo de Gaudí
- **Costa Brava:** Calas y pueblos mediterráneos
- **Pirineos:** Naturaleza, montaña, senderismo
- **Tarragona:** Ruinas romanas, patrimonio UNESCO

#### 5️⃣ **CTA Secundario** (Conversión Final)
- Título: "¿Listo para tu aventura catalana?"
- **CTAs Fuertes:** "Planifica tu Viaje" + "Conoce Más"
- Fondo con gradiente de colores catalanes

#### 6️⃣ **Footer**
- Información de Catalunya Turismo
- Enlaces rápidos
- Datos de contacto: Tarragona, +34 650 900 945
- Redes sociales
- Copyright © 2025

#### 📄 **Página de Contacto**
- Formulario de contacto con selector de destino
- Información de contacto completa
- Mapa de Google Maps (Tarragona)
- Layout 2 columnas: Formulario + Info

---

## 🏗️ Paso 2 - Maquetación Adaptativa

### **Tecnologías Utilizadas**
- HTML5 semántico (`<header>`, `<section>`, `<article>`, `<footer>`)
- CSS3 con diseño responsive (Mobile First)
- Media queries: 768px (tablet), 480px (móvil)

### **Patrones de Diseño Implementados**
- ✅ **Column Drop:** Las tarjetas de destinos se apilan en móvil
- ✅ **Mostly Fluid:** El layout se adapta gradualmente
- ✅ **Sticky Header:** Navegación fija al hacer scroll

### **Características de Accesibilidad**
- Atributos `alt` en todas las imágenes
- `aria-label` en enlaces de redes sociales
- Etiquetas `<label>` asociadas a inputs
- Estructura de headings semántica (h1 → h2 → h3)
- Contraste de colores WCAG AA

### **Optimización de Performance**
- `loading="lazy"` en imágenes (carga diferida)
- `scroll-behavior: smooth` para navegación fluida
- Imágenes optimizadas (peso máximo recomendado)

---

## 🎨 Paso 3 - Tres Versiones del Layout

### **📍 Versión 1: Flexbox Puro** (Rama: `version-flex`)
**Ubicación actual:** `main` branch (versión por defecto)

**Implementación:**
```css
.destinos-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.destino-card {
  flex: 1 1 calc(50% - 30px);
  min-width: 300px;
  max-width: 500px;
}
```

**Ventajas:**
- ✅ Control fino sobre alineación y espaciado
- ✅ Flexible y fácil de entender
- ✅ Perfecto para componentes lineales
- ✅ Buen soporte en navegadores antiguos

**Responsive:**
- Desktop (>1200px): 4 columnas
- Tablet (768-1200px): 2 columnas
- Móvil (<768px): 1 columna

---

### **📍 Versión 2: CSS Grid** (Rama: `version-grid`)
**Estado:** Pendiente de desarrollo

**Implementación propuesta:**
```css
.destinos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
```

**Ventajas:**
- ✅ Layout bidimensional más potente
- ✅ Menos código para layouts complejos
- ✅ `auto-fit` hace responsive automático
- ✅ Control preciso de filas y columnas

---

### **📍 Versión 3: Bootstrap 5** (Rama: `version-bootstrap`)
**Estado:** Pendiente de desarrollo

**Implementación propuesta:**
```html
<div class="row g-4">
  <div class="col-12 col-md-6 col-lg-3">
    <!-- Tarjeta -->
  </div>
</div>
```

**Personalización:**
- Colores de marca catalana (rojo y dorado)
- Tipografía customizada
- Componentes de Bootstrap: cards, buttons, forms, navbar

**Ventajas:**
- ✅ Desarrollo más rápido
- ✅ Sistema de grid probado (12 columnas)
- ✅ Componentes predefinidos
- ✅ Documentación extensa

**Desventajas:**
- ❌ Código más pesado (~180KB CSS)
- ❌ Clases muy específicas de Bootstrap
- ❌ Puede parecer genérico sin personalización

---

## 📂 Estructura de Archivos

```
📦 Proyecto
├── 📄 index.html              # Página principal (landing page)
├── 📄 contacto.html           # Página de contacto
├── 📄 style.css               # Estilos principales
├── 📄 README.md               # Este archivo (documentación)
├── 🖼️ BanderCatal.png         # Bandera de Catalunya
├── 🖼️ generCatalu.png         # Logo Catalunya
├── 🖼️ Mapa.png                # Mapa histórico de Catalunya
└── 📐 WireFrame-DAW9.drawio   # Wireframe del diseño (Draw.io)
```

### **Archivos Eliminados**
- ❌ `Els-Segadors-Himne-Nacional-de-Catalunya.mp3` → Audio autoplay (mala práctica UX)
- ❌ `lineasBandera.png` → Imagen decorativa no utilizada en el diseño final

---

## 🚀 Paso 4 - Publicación y Git

### **Estrategia de Ramas**

```bash
# Estructura de ramas
main (version-flex) ← Versión por defecto
├── version-flex     ← Flexbox puro
├── version-grid     ← CSS Grid
└── version-bootstrap ← Bootstrap personalizado
```

### **Comandos Git para Crear Ramas**

```bash
# Crear rama Flexbox (ya en main)
git checkout -b version-flex
git add .
git commit -m "Versión Flexbox: Layout con display flex y flex-wrap"
git push origin version-flex

# Crear rama Grid
git checkout main
git checkout -b version-grid
# Modificar CSS para usar Grid
git add .
git commit -m "Versión Grid: Layout con CSS Grid y auto-fit"
git push origin version-grid

# Crear rama Bootstrap
git checkout main
git checkout -b version-bootstrap
# Integrar Bootstrap y personalizar
git add .
git commit -m "Versión Bootstrap: Framework con personalización catalana"
git push origin version-bootstrap
```

### **Pull Request - Versión Elegida**

**Versión seleccionada:** `version-flex` → `main`

**Justificación:**
- ✅ Código más limpio y mantenible
- ✅ Mejor adaptación móvil (control total)
- ✅ Peso ligero sin dependencias externas
- ✅ Flexibilidad para ajustes futuros
- ✅ Compatible con todos los navegadores modernos

---

## 🌐 GitHub Pages

**URL de publicación:** `https://[usuario].github.io/[repositorio]`

**Configuración:**
1. Ir a Settings → Pages
2. Source: Branch `main` (o la rama elegida)
3. Folder: `/` (root)
4. Save

**Versión publicada:** Flexbox (main branch)

---

## 📊 Comparativa de Versiones

| Característica | Flexbox | Grid | Bootstrap |
|---------------|---------|------|-----------|
| **Complejidad** | Media | Baja | Baja |
| **Peso CSS** | ~15KB | ~15KB | ~180KB |
| **Responsive** | Manual | Auto | Clases |
| **Mantenibilidad** | Alta | Alta | Media |
| **Flexibilidad** | Alta | Muy Alta | Media |
| **Curva aprendizaje** | Media | Media | Baja |
| **Personalización** | Total | Total | Limitada |

---

## 🎓 Conceptos Aprendidos

### **HTML5 Semántico**
- Uso correcto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Mejora el SEO y la accesibilidad

### **CSS Flexbox**
- `flex-wrap` para layouts que se adaptan
- `justify-content` y `align-items` para alineación
- `flex: 1 1 calc()` para dimensionamiento flexible

### **CSS Grid** (próxima versión)
- `grid-template-columns` con `repeat()` y `auto-fit`
- `gap` para espaciado uniforme
- Layout bidimensional (filas y columnas)

### **Responsive Design**
- Mobile First approach
- Media queries estratégicas (768px, 480px)
- Imágenes responsive con `max-width: 100%`
- Viewport meta tag

### **Accesibilidad (a11y)**
- Atributos ARIA
- Estructura de headings lógica
- Contraste de colores
- Formularios accesibles

### **Performance**
- Lazy loading de imágenes
- Optimización de assets
- CSS minimalista y eficiente

---

## 🎨 Paleta de Colores

**Colores principales** (inspirados en la senyera catalana):

```css
/* Rojo Catalán */
--rojo-catalan: #c8102e;
--rojo-hover: #a00d25;

/* Dorado Catalán */
--dorado-catalan: #d4a520;
--dorado-hover: #b8941c;

/* Neutros */
--blanco: #ffffff;
--gris-claro: #f9f9f9;
--gris-medio: #666666;
--gris-oscuro: #333333;
--negro-footer: #2c2c2c;
```

---

## 📝 Instrucciones de Uso

### **Visualizar el Proyecto Localmente**

**Opción 1: Abrir directamente**
```bash
# Navegar a la carpeta
cd /ruta/al/proyecto

# Abrir index.html en navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Opción 2: Servidor local (recomendado)**
```bash
# Python 3
python3 -m http.server 8000

# O con npm
npx http-server

# Abrir en navegador:
# http://localhost:8000
```

### **Cambiar entre Versiones**

```bash
# Ver todas las ramas
git branch -a

# Cambiar a versión Grid
git checkout version-grid

# Cambiar a versión Bootstrap
git checkout version-bootstrap

# Volver a Flexbox
git checkout version-flex
```

---

## 🖼️ Imágenes Requeridas

### **Especificaciones Técnicas**

| Tipo | Dimensiones | Formato | Peso Máx |
|------|-------------|---------|----------|
| Hero Background | 1920x1080px | JPG | 300KB |
| Tarjetas Destinos | 800x600px | JPG | 150KB |
| Logo | 200x200px | PNG | 50KB |
| Histórica | 1200x800px | JPG | 200KB |

### **Lista de Imágenes a Buscar** (Unsplash/Pexels)

1. ✅ **Hero:** Panorámica Catalunya (Montserrat, Barcelona skyline)
2. ✅ **Barcelona:** Sagrada Familia o Park Güell
3. ✅ **Costa Brava:** Cala con agua turquesa
4. ✅ **Pirineos:** Montañas con nieve o valle verde
5. ✅ **Tarragona:** Anfiteatro romano o acueducto
6. ✅ **Historia:** Bandera senyera (ya disponible: BanderCatal.png)
7. ✅ **Mapa:** Mapa histórico (ya disponible: Mapa.png)

**Búsquedas recomendadas:**
```
- "Barcelona Sagrada Familia"
- "Costa Brava beach aerial"
- "Catalan Pyrenees mountains"
- "Tarragona roman amphitheatre"
- "Catalunya landscape"
```

---

## ✅ Checklist de Requisitos

### **Paso 1 - Diseño (2 pts)**
- [x] Propósito principal definido
- [x] Público objetivo identificado
- [x] Contenidos esenciales seleccionados
- [ ] Wireframe en Figma/Canva (pendiente por estudiante)

### **Paso 2 - Maquetación (2.5 pts)**
- [x] Header con logo y navegación
- [x] Hero con imagen/texto destacado
- [x] Zona de contenido en rejilla adaptativa
- [x] Footer con enlaces y redes sociales
- [x] Diseño atractivo y coherente

### **Paso 3 - Tres Versiones (4.5 pts)**
- [x] Versión Flexbox (1.5 pts) - EN MAIN
- [ ] Versión Grid (1.5 pts) - PENDIENTE
- [ ] Versión Framework (1.5 pts) - PENDIENTE

### **Paso 4 - Publicación (1 pt)**
- [ ] Ramas creadas (version-flex, version-grid, version-bootstrap)
- [ ] Commits en cada rama
- [ ] Push a GitHub
- [ ] Pull Request de versión elegida → main
- [ ] GitHub Pages publicado
- [ ] README actualizado con versión mostrada

---

## 🔮 Próximos Pasos

1. **Wireframe:** Crear wireframe en Figma/Canva documentando el diseño actual
2. **Imágenes:** Descargar y reemplazar placeholders con fotos reales de Unsplash
3. **Versión Grid:** Crear rama y modificar CSS para usar Grid Layout
4. **Versión Bootstrap:** Crear rama, integrar Bootstrap 5 y personalizar
5. **Git:** Crear commits, push y pull requests
6. **GitHub Pages:** Publicar versión final
7. **Documentación:** Actualizar README con versión publicada

---

## 📚 Referencias y Recursos

### **Frameworks CSS**
- [Bootstrap 5](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [Foundation](https://get.foundation/)

### **Imágenes Gratuitas**
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### **Diseño**
- [Figma](https://www.figma.com/)
- [Canva](https://www.canva.com/)

### **CSS Grid & Flexbox**
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### **Accesibilidad**
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)

---

## 👨‍💻 Autor

**Ricardo Avila**  
Estudiante de Desarrollo de Aplicaciones Web (DAW)  
Ilerna - Diseño de Interfaces Web (DAW09)

📧 Email: ricardo@avila.ws  
📍 Tarragona, Catalunya, España

---

## 📄 Licencia

Este proyecto es un trabajo académico realizado para la asignatura de Diseño de Interfaces Web.  
Uso educativo únicamente.

---

**Última actualización:** 29 de octubre de 2025  
**Versión actual:** 1.0 (Flexbox) - Branch `main`
