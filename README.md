# Práctica 4 - Diseño Adaptativo y Frameworks CSS

Landing page responsive de turismo en Catalunya desarrollada como parte de la asignatura de Diseño de Interfaces Web.

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una landing page profesional y completamente responsive para promocionar el turismo en Catalunya. La página está diseñada para adaptarse a diferentes dispositivos (desktop, tablet y móvil) utilizando técnicas modernas de diseño web.

## Objetivo Principal

Aplicar y comparar diferentes técnicas de maquetación responsive:
- CSS Flexbox
- CSS Grid Layout
- Framework CSS (Bootstrap 5)

## Estructura de la Landing Page

La página está organizada en 6 secciones principales:

1. **Header**: Navegación sticky con logo de Catalunya
2. **Hero Section**: Sección principal con imagen de fondo parallax de la Sagrada Familia
3. **Historia**: Contexto histórico de Catalunya con datos relevantes
4. **Destinos**: 6 tarjetas de destinos turísticos (Barcelona, Pirineos, Costa Dorada, Patrimonio Histórico, Deportes de Montaña, Gastronomía)
5. **Call to Action**: Llamadas a la acción para planificar viaje o contactar
6. **Footer**: Enlaces, información de contacto y redes sociales

## Versiones Implementadas

El proyecto incluye tres implementaciones diferentes en ramas separadas:

### version-flex
Utiliza CSS Flexbox para crear layouts flexibles y componentes dinámicos.

### version-grid
Implementa CSS Grid Layout para estructuras bidimensionales más complejas.

### version-bootstrap
Integra Bootstrap 5 con personalización de colores y tipografías catalanas (dorado y rojo).

## Características Técnicas

- Diseño responsive con breakpoints para móvil (480px), tablet (768px) y desktop (1200px)
- Patrón de diseño: Column Drop (las columnas se apilan en pantallas pequeñas)
- Efecto parallax en la sección hero
- Imágenes optimizadas para web (total: 3.9MB)
- Paleta de colores inspirada en la bandera catalana
- Fuente principal: Montserrat

## Estructura de Archivos

```
proyecto/
├── images/              # Carpeta de imágenes optimizadas
├── index.html           # Página principal
├── contacto.html        # Página de contacto
├── style.css            # Hoja de estilos
└── README.md            # Este archivo
```

## Tecnologías Utilizadas

- HTML5 Semántico
- CSS3 (Flexbox, Grid, Media Queries)
- Bootstrap 5 (rama version-bootstrap)
- Git y GitHub para control de versiones

## Versión Publicada

La versión mostrada en GitHub Pages corresponde a: **version-grid**

### Justificación de la elección:

CSS Grid fue seleccionado como la versión definitiva por las siguientes razones:

- **Control bidimensional superior**: Grid permite controlar filas y columnas simultáneamente, ideal para el layout de 6 tarjetas de destinos
- **Código más limpio y mantenible**: Menos líneas de CSS que Flexbox para lograr el mismo resultado
- **Responsive natural**: Uso de `auto-fit` y `minmax()` para adaptación automática sin media queries complejos
- **Tecnología moderna**: CSS Grid es el estándar actual para layouts complejos en desarrollo web profesional
- **Mejor alineación visual**: Las tarjetas se alinean perfectamente en filas y columnas, creando una cuadrícula armoniosa

Las otras versiones (Flexbox y Bootstrap) están disponibles en sus respectivas ramas del repositorio para comparación.

## Comparativa de Versiones

| Característica | Flexbox | Grid | Bootstrap |
|---------------|---------|------|-----------|
| **Complejidad** | Media | Baja | Baja |
| **Peso CSS** | ~15KB | ~15KB | ~180KB |
| **Responsive** | Manual | Auto | Clases |
| **Mantenibilidad** | Alta | Alta | Media |
| **Flexibilidad** | Alta | Muy Alta | Media |
| **Curva aprendizaje** | Media | Media | Baja |
| **Personalización** | Total | Total | Limitada |

## Autor

Ricardo Ávila
DAW9 - Diseño de Interfaces Web
Práctica 4 - Diseño Adaptativo y Frameworks CSS

## Instalación y Uso

1. Clonar el repositorio
2. Abrir `index.html` en un navegador
3. Para ver otras versiones: hacer checkout a la rama correspondiente

```bash
git clone [URL_DEL_REPOSITORIO]
git checkout version-flex    # Ver versión Flexbox
git checkout version-grid    # Ver versión Grid
git checkout version-bootstrap # Ver versión Bootstrap
```

## Optimizaciones Realizadas

- Imágenes redimensionadas y optimizadas para web
- Hero background: 1.0MB (1920px) - hero-sagrada-familia.jpg
- Tarjetas de destinos: 55-96KB por imagen
- Total de recursos: 3.9MB

## Paleta de Colores

Colores principales inspirados en la senyera catalana:

- Rojo Catalán: #c8102e
- Dorado Catalán: #d4a520
- Blanco: #ffffff
- Gris Claro: #f9f9f9
- Gris Oscuro: #333333

---

**Última actualización:** 29 de octubre de 2025  
**Versión actual:** 1.0 - version-grid

---

**Diseñado por Ricardo Avila** | ricardo@avila.ws
