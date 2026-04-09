# Práctica 14: Detectando barreras de accesibilidad

**Autor:** Ricardo Ávila  
**Proyecto:** *Descubre Catalunya* (web de turismo cultural sobre Catalunya)

---

## 1. Presentación del proyecto

Mi proyecto integrador es una página promocional de turismo cultural sobre Catalunya: historia de la Senyera, destinos, un bloque con datos interactivos y contenido multimedia (himno y un vídeo del propio proyecto). Va dirigido a personas interesadas en viajar o conocer la cultura catalana, en principio un público general con navegación por móvil u ordenador.

Hasta ahora no había planteado el diseño pensando de forma explícita en usuarios con discapacidad; me centré más en que se viera bien, en la parte responsive y en encajar las prácticas (tabla, gráfico, canvas, vídeo). Esta actividad me ha servido para ver que eso no basta si alguien depende del teclado, del lector de pantalla o no puede oír el audio.

---

## 2. Barreras potenciales (por tipo de limitación)

**Visual**  
Varias imágenes tienen `alt` descriptivo, pero el **vídeo del proyecto** no incluye pistas de subtitulado integradas ni transcripción debajo: quien no vea bien la pantalla o use lector de pantalla no recibe el mensaje hablado del vídeo de forma equivalente. Además, el **gráfico Chart.js** es un `<canvas>`: aunque tiene una etiqueta ARIA, los datos no están expuestos como tabla o texto, así que el contenido numérico es difícil de seguir solo con tecnología de apoyo.

**Auditiva**  
El bloque del himno *Els Segadors* ofrece controles de reproducción, pero **no hay transcripción** de la letra ni indicación escrita de qué se está escuchando más allá del título. El **vídeo** tampoco tiene subtítulos cerrados. Una persona sorda o con audición limitada se pierde la parte emocional e informativa que va solo por el canal sonoro.

**Física**  
La navegación tiene menú hamburguesa y enlaces anclados, pero no he probado a fondo todo el flujo **solo con teclado** (orden del foco, cerrar el desplegable de idioma sin quedar “atrapado”). El apartado interactivo de **partículas en canvas** invita a “pasar el ratón”: quien no use ratón puede no acceder a esa experiencia. Los botones del gráfico parecen clicables, pero convendría verificar tamaño mínimo de área táctil en todos los dispositivos.

**Cognitiva**  
Hay muchas secciones seguidas (historia, favoritos, gráficos, canvas, contacto) y mezcla de tono divulgativo con datos y bloques técnicos. Para alguien que necesita **rutas simples y poco ruido visual**, puede resultar cargante decidir qué leer primero. Parte del texto histórico es denso y en un bloque hay **catalán mezclado con castellano** en las citas, lo que puede dificultar la lectura si hay dislexia o fatiga cognitiva.

**Del habla**  
En mi sitio **no hay ninguna función que dependa solo de la voz** (no hay comandos por micrófono obligatorios). En esta categoría no identifico una barrera relevante para la versión actual del proyecto.

---

## 3. Lo que ya contribuye a la accesibilidad (aunque no fuera el objetivo inicial)

1. Uso de **HTML semántico** (`header`, `main`, `section`, `nav` con lista de enlaces, tabla con `<caption>` y `scope` en cabeceras): ayuda a entender la estructura con lector de pantalla y a saltar bloques.

2. **`meta name="description"`**, `lang` en el documento, **texto alternativo** en logos e imágenes clave, y algunos **atributos ARIA** (por ejemplo en el menú móvil y en secciones del bloque interactivo). Eso mejora orientación y contexto frente a una página hecha solo con `<div>`.

---

## 4. Una mejora concreta antes de la próxima entrega

**Añadir transcripción debajo del vídeo del proyecto y, si es posible, un archivo de subtítulos** (WebVTT) enlazado al `<video>`, más una transcripción o al menos un resumen de la letra junto al reproductor del himno.

**Qué problema resuelve:** las personas **sordas o con pérdida auditiva** podrían seguir el mensaje del vídeo y del himno sin depender del sonido; las personas **ciegas o con baja visión** que usen lector de pantalla tendrían texto equivalente al mensaje hablado del vídeo; y cualquier usuario en un **sitio ruidoso** también se beneficiaría. Es una mejora acotada, alineada con lo visto en clase sobre alternativas al contenido solo auditivo.

---