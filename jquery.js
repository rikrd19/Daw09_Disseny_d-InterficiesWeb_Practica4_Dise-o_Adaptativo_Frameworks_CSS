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
    
    // Función para actualizar el color dorado según la página activa
    function updateActiveLink() {
        const path = window.location.pathname;
        const isContacto = path.includes('contacto.html');
        
        // Limpiamos estilos previos
        $('#nav-home, #nav-contact').css('color', '');
        
        if (isContacto) {
            $('#nav-contact').css('color', '#d4a520'); // Dorado en Contacto
        } else {
            $('#nav-home').css('color', '#d4a520');    // Dorado en Inicio
        }
    }

    // Misión 1: Selección de Elementos y Cambios Visuales
    // -------------------------------------------------------------
    $('.historia-section h3').css('color', '#c8102e'); 
    $('.destino-card').css('border-bottom', '4px solid #d4a520');
    $('#hero h1').css('text-shadow', '2px 2px 10px rgba(0,0,0,0.5)');
    
    // Aplicamos el resaltado inicial dinámico
    updateActiveLink();

    // Misión 2: Adición y Supresión del DOM (Favoritos)
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
    
    // Toggle del Panel de Favoritos
    if ($('.favoritos-controls').length > 0) {
        $('<button id="toggle-favoritos" class="btn btn-secondary" style="margin-bottom: 20px; width: 100%;">Ocultar Panel Favoritos</button>')
            .insertBefore('.favoritos-controls');

        $('#toggle-favoritos').on('click', function() {
            $('.favoritos-controls, #lista-favoritos').slideToggle(600, function() {
                const isVisible = $('.favoritos-controls').is(':visible');
                $('#toggle-favoritos').text(isVisible ? "Ocultar Panel Favoritos" : "Mostrar Panel Favoritos");
            });
        });
    }

    // Efecto de teclado ESC
    $('#nuevo-destino').on('keyup', function(e) {
        if (e.key === "Escape") {
            $(this).val('');
            $('<div id="feedback-teclado" style="color: #d4a520; margin-top: 5px; font-weight: bold;">Campo limpiado con éxito.</div>')
                .insertAfter(this).fadeOut(2000, function() { $(this).remove(); });
        }
    });

    // Efecto de foco
    $('#nuevo-destino').on('focus', function() {
        $(this).css('background-color', '#fff9e6');
    }).on('blur', function() {
        $(this).css('background-color', 'white');
    });

    // Animación del Hero
    $('.hero-title').animate({
        fontSize: "4rem",
        opacity: 1
    }, 1500);

    // Misión 5: Conectores (jQuery UI) - Datepicker
    // -------------------------------------------------------------
    if ($('.contact-form').length > 0) {
        if ($('#datepicker').length === 0) {
            const dateField = `
                <div class="form-group">
                    <label id="label-date" for="datepicker">Fecha Tentativa de Viaje *</label>
                    <input type="text" id="datepicker" name="fecha" placeholder="Selecciona una fecha" required aria-required="true" 
                           style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; width: 100%;">
                </div>`;
            $(dateField).insertBefore('#btn-send').parent().find('.form-group:last').css('margin-bottom', '15px');
        }
        
        $('#datepicker').datepicker({
            dateFormat: "dd/mm/yy",
            showAnim: "slideDown",
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        });
    }

    // --- INTEGRACIÓN DE LÓGICA DE PRÁCTICAS ANTERIORES (TRADUCCIÓN Y MENÚ) ---
    // -------------------------------------------------------------
    
    // Menú Hamburguesa con jQuery
    $('#hamburger-menu').on('click', function() {
        const $nav = $('#main-nav, #main-nav-links');
        $nav.toggleClass('is-active');
        const expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
    });

    $('nav a').on('click', function() {
        $('#main-nav, #main-nav-links').removeClass('is-active');
        $('#hamburger-menu').attr('aria-expanded', 'false');
    });

    // Lógica de Traducción
    const translations = {
        "nav-home": { es: "Inicio", ca: "Inici", en: "Home" },
        "nav-history": { es: "Historia", ca: "Història", en: "History" },
        "nav-destinations": { es: "Destinos", ca: "Destins", en: "Destinations" },
        "nav-contact": { es: "Contacto", ca: "Contacte", en: "Contact" },
        "contact-title": { es: "Contacta con Nosotros", ca: "Contacta amb Nosaltres", en: "Contact Us" },
        "label-date": { es: "Fecha Tentativa de Viaje *", ca: "Data Tentativa de Viatge *", en: "Tentative Travel Date *" }
    };

    function setLanguage(lang) {
        for (const id in translations) {
            const $el = $(`#${id}`);
            if ($el.length > 0) {
                $el.html(translations[id][lang]);
            }
        }
        localStorage.setItem("userLang", lang);
        
        // Mantener el color dorado correcto tras traducir
        updateActiveLink();
    }

    $('#selector-idiomas').on('click', 'button', function() {
        const lang = $(this).data('lang');
        if (lang) setLanguage(lang);
    });

    // Cargar preferencia guardada
    const savedLang = localStorage.getItem("userLang") || "es";
    setLanguage(savedLang);

});
