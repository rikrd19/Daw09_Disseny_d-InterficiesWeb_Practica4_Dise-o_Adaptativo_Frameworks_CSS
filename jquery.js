/**
 * PRÁCTICA 11: INTERACTIVIDAD WEB CON JQUERY
 * Nombre y Apellidos: Ricardo Ávila
 * 
 * MISIONES COMPLETADAS:
 * 0. Preparación del Entorno - [COMPLETADO]
 * 1. Selección de Elementos $(selector) - [COMPLETADO]
 * 2. Adición y Supresión del DOM - [COMPLETADO]
 * 3. Gestión de Eventos .on() - [PENDIENTE]
 * 4. Animaciones y Transiciones - [PENDIENTE]
 * 5. Conectores (jQuery UI) - [PENDIENTE]
 */

$(function() {
    console.log("Misión 1 y 2 cargadas correctamente.");
    
    // Misión 1: Selección de Elementos
    $('.historia-section h3').css('color', '#c8102e'); 
    $('.destino-card').css('border-bottom', '4px solid #d4a520');
    $('#hero h1').css('text-shadow', '2px 2px 10px rgba(0,0,0,0.5)');
    $('.nav-list li:first a').css('color', '#d4a520');

    // Misión 2: Adición y Supresión del DOM
    // -------------------------------------------------------------
    
    // 2.1 Añadir nuevo elemento (.append)
    $('#btn-anadir').on('click', function() {
        const destino = $('#nuevo-destino').val().trim();
        if (destino !== "") {
            $('#lista-favoritos').append(`
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px;">
                    <span>${destino}</span>
                    <button class="btn-eliminar" style="background: #c8102e; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>
                </li>
            `);
            $('#nuevo-destino').val('').focus();
        }
    });

    // 2.2 Eliminar elementos del DOM (.remove) y Punto Bonus (Evento Delegado)
    $('#lista-favoritos').on('click', '.btn-eliminar', function() {
        $(this).parent().remove(); 
    });
});
