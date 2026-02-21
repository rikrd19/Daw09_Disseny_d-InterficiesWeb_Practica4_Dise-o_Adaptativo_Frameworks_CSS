/**
 * PRÁCTICA 11: INTERACTIVIDAD WEB CON JQUERY
 * Nombre y Apellidos: Ricardo Ávila
 * 
 * MISIONES COMPLETADAS:
 * 0. Preparación del Entorno - [COMPLETADO]
 * 1. Selección de Elementos $(selector) - [COMPLETADO]
 * 2. Adición y Supresión del DOM - [COMPLETADO]
 * 3. Gestión de Eventos .on() - [COMPLETADO]
 * 4. Animaciones y Transiciones - [COMPLETADO]
 * 5. Conectores (jQuery UI) - [PENDIENTE]
 */

$(function() {
    console.log("Misiones 1-4 cargadas correctamente.");
    
    // Misión 1: Selección de Elementos
    $('.historia-section h3').css('color', '#c8102e'); 
    $('.destino-card').css('border-bottom', '4px solid #d4a520');
    $('#hero h1').css('text-shadow', '2px 2px 10px rgba(0,0,0,0.5)');
    $('.nav-list li:first a').css('color', '#d4a520');

    // Misión 2: Adición y Supresión del DOM
    // -------------------------------------------------------------
    $('#btn-anadir').on('click', function() {
        const destino = $('#nuevo-destino').val().trim();
        if (destino !== "") {
            // Misión 4.1: fadeIn al añadir elemento
            const $nuevoItem = $(`
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; display: none;">
                    <span>${destino}</span>
                    <button class="btn-eliminar" style="background: #c8102e; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>
                </li>
            `);
            $('#lista-favoritos').append($nuevoItem);
            $nuevoItem.fadeIn(800); // Misión 4.1
            $('#nuevo-destino').val('').focus();
        }
    });

    $('#lista-favoritos').on('click', '.btn-eliminar', function() {
        // Misión 4.1: fadeOut al eliminar
        $(this).parent().fadeOut(400, function() { $(this).remove(); }); 
    });

    // Misión 3 y 4: Eventos y Animaciones
    // -------------------------------------------------------------

    // 3.1 Evento de ratón (click) + Misión 4.2 (slide): Toggle para el panel de favoritos
    $('<button id="toggle-favoritos" class="btn btn-secondary" style="margin-bottom: 20px;">Ocultar Panel Favoritos</button>')
        .insertBefore('.favoritos-controls');

    $('#toggle-favoritos').on('click', function() {
        $('.favoritos-controls, #lista-favoritos').slideToggle(600, function() {
            const isVisible = $('.favoritos-controls').is(':visible');
            $('#toggle-favoritos').text(isVisible ? "Ocultar Panel Favoritos" : "Mostrar Panel Favoritos");
        });
    });

    // 3.2 Evento de teclado (keyup) + Feedback: ESC para limpiar campo
    $('#nuevo-destino').on('keyup', function(e) {
        if (e.key === "Escape") {
            $(this).val('');
            // Feedback visual visible en pantalla
            $('<div id="feedback-teclado" style="color: #d4a520; margin-top: 5px;">Campo limpiado con éxito.</div>')
                .insertAfter(this).fadeOut(2000, function() { $(this).remove(); });
        }
    });

    // 3.3 Tercer evento (focus) + Uso de $(this)
    $('#nuevo-destino').on('focus', function() {
        $(this).css('background-color', '#fff9e6'); // Feedback visual al ganar foco
    }).on('blur', function() {
        $(this).css('background-color', 'white');
    });

    // Misión 4.3: .animate() con propiedades personalizadas (al cargar el Hero)
    $('.hero-title').animate({
        fontSize: "4rem",
        opacity: 1
    }, 1500);

});
