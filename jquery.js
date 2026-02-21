/**
 * PRÁCTICA 11: INTERACTIVIDAD WEB CON JQUERY
 * Nombre y Apellidos: Ricardo Ávila
 * 
 * MISIONES COMPLETADAS:
 * 0. Preparación del Entorno - [COMPLETADO]
 * 1. Selección de Elementos $(selector) - [COMPLETADO]
 * 2. Adición y Supresión del DOM - [PENDIENTE]
 * 3. Gestión de Eventos .on() - [PENDIENTE]
 * 4. Animaciones y Transiciones - [PENDIENTE]
 * 5. Conectores (jQuery UI) - [PENDIENTE]
 */

$(function() {
    console.log("Misión 1: Selección de elementos cargada correctamente.");
    
    // Misión 1.1: Selección por etiqueta - Cambiamos el color de los subtítulos de historia
    $('.historia-section h3').css('color', '#c8102e'); 

    // Misión 1.2: Selección por clase - Resaltamos las tarjetas de destino con un borde dorado
    $('.destino-card').css('border-bottom', '4px solid #d4a520');

    // Misión 1.3: Selección por ID - Añadimos una sombra al título principal del hero
    $('#hero h1').css('text-shadow', '2px 2px 10px rgba(0,0,0,0.5)');

    // Misión 1.4: Selector avanzado (:first) - Cambia el color del primer enlace del menú
    $('.nav-list li:first a').css('color', '#d4a520');
});
