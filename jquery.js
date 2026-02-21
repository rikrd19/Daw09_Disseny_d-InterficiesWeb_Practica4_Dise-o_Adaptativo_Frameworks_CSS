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
 * 5. Conectores (jQuery UI) - [COMPLETADO]
 */

$(function() {
    console.log("Misiones 1-5 cargadas correctamente.");
    
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
            const $nuevoItem = $(`
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; display: none;">
                    <span>${destino}</span>
                    <button class="btn-eliminar" style="background: #c8102e; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>
                </li>
            `);
            $('#lista-favoritos').append($nuevoItem);
            $nuevoItem.fadeIn(800); 
            $('#nuevo-destino').val('').focus();
        }
    });

    // Misión 2 (Punto Bonus) + Misión 5.2 (Dialog): Eventos delegados y confirmación
    $('#lista-favoritos').on('click', '.btn-eliminar', function() {
        const $li = $(this).parent();
        
        // Creamos el div del diálogo dinámicamente si no existe
        if ($('#dialog-confirm').length === 0) {
            $('<div id="dialog-confirm" title="¿Eliminar destino?"><p>¿Estás seguro de que quieres eliminar este destino de tu lista de favoritos?</p></div>').appendTo('body');
        }

        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Eliminar": function() {
                    $(this).dialog("close");
                    $li.fadeOut(400, function() { $(this).remove(); });
                },
                "Cancelar": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    // Misión 3 y 4: Eventos y Animaciones
    // -------------------------------------------------------------

    $('<button id="toggle-favoritos" class="btn btn-secondary" style="margin-bottom: 20px;">Ocultar Panel Favoritos</button>')
        .insertBefore('.favoritos-controls');

    $('#toggle-favoritos').on('click', function() {
        $('.favoritos-controls, #lista-favoritos').slideToggle(600, function() {
            const isVisible = $('.favoritos-controls').is(':visible');
            $('#toggle-favoritos').text(isVisible ? "Ocultar Panel Favoritos" : "Mostrar Panel Favoritos");
        });
    });

    $('#nuevo-destino').on('keyup', function(e) {
        if (e.key === "Escape") {
            $(this).val('');
            $('<div id="feedback-teclado" style="color: #d4a520; margin-top: 5px;">Campo limpiado con éxito.</div>')
                .insertAfter(this).fadeOut(2000, function() { $(this).remove(); });
        }
    });

    $('#nuevo-destino').on('focus', function() {
        $(this).css('background-color', '#fff9e6');
    }).on('blur', function() {
        $(this).css('background-color', 'white');
    });

    $('.hero-title').animate({
        fontSize: "4rem",
        opacity: 1
    }, 1500);

    // Misión 5: Conectores (jQuery UI)
    // -------------------------------------------------------------
    
    // 5.1 Datepicker: Seleccionar fecha tentativa de viaje en el formulario de contacto
    if ($('#destino').length > 0) {
        // Insertamos el campo de fecha antes del botón de envío
        $('<div class="form-group"><label for="datepicker">Fecha Tentativa de Viaje</label><input type="text" id="datepicker" placeholder="Haz clic para seleccionar fecha" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; width: 100%;"></div>')
            .insertBefore('.contact-form button[type="submit"]');
        
        $('#datepicker').datepicker({
            dateFormat: "dd/mm/yy",
            showAnim: "slideDown",
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        });
    }

});
