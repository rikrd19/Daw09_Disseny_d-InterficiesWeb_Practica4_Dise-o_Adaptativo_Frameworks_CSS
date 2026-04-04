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
    
    // Diccionario Completo de Traducciones (Migrado de script.js)
    const translations = {
        // Header Navigation
        "nav-home": { es: "Inicio", ca: "Inici", en: "Home" },
        "nav-history": { es: "Historia", ca: "Història", en: "History" },
        "nav-destinations": { es: "Destinos", ca: "Destins", en: "Destinations" },
        "nav-datos-pr13": { es: "Datos", ca: "Dades", en: "Insights" },
        "nav-contact": { es: "Contacto", ca: "Contacte", en: "Contact" },
        "dropbtn": { es: "Idioma ▼", ca: "Idioma ▼", en: "Language ▼" },

        // Hero Section
        "hero-title": { es: "Descubre Catalunya", ca: "Descobreix Catalunya", en: "Discover Catalonia" },
        "hero-subtitle": { es: "Donde la historia se encuentra con el Mediterráneo", ca: "On la història es troba amb el Mediterrani", en: "Where history meets the Mediterranean" },
        "hero-btn": { es: "Explorar Destinos", ca: "Explorar Destins", en: "Explore Destinations" },

        // History Section
        "history-title": { es: "Tierra de Historia y Tradición", ca: "Terra d'Història i Tradició", en: "Land of History and Tradition" },
        "history-intro": { es: "Catalunya no es solo un destino, es un viaje a través de siglos de historia, cultura y tradición mediterránea.", ca: "Catalunya no és només un destí, és un viatge a través de segles d'història, cultura i tradició mediterrània.", en: "Catalonia is not just a destination, it is a journey through centuries of history, culture, and Mediterranean tradition." },
        "history-h3": { es: "La Senyera: Símbolo de una Nación", ca: "La Senyera: Símbol d'una Nació", en: "The Senyera: Symbol of a Nation" },
        "history-p1": { es: "La bandera de Catalunya, también conocida como <strong>senyera</strong>, fue adoptada como bandera oficial de la comunidad autónoma de Catalunya en el Estatuto de Autonomía de 1979. Sus cuatro barras rojas sobre fondo dorado tienen un origen que se remonta a la Edad Media.", ca: "La bandera de Catalunya, també coneguda com a <strong>senyera</strong>, va ser adoptada com a bandera oficial de la comunitat autònoma de Catalunya en l'Estatut d'Autonomia de 1979. Les seves quatre barres vermelles sobre fons daurat tenen un origen que es remunta a l'Edat Mitjana.", en: "The flag of Catalonia, also known as the <strong>senyera</strong>, was adopted as the official flag of the autonomous community of Catalonia in the Statute of Autonomy of 1979. Its four red bars on a golden background have an origin that dates back to the Middle Ages." },
        "history-p2": { es: "Con el paso del tiempo, el emblema de los reyes de la <em>Corona de Aragón</em> pasó a identificarse con los territorios que gobernaban. Su identificación con el condado de Barcelona y, por extensión, con el <em>Principado de Catalunya</em>, parece originarse también en tiempos de Pedro el Ceremonioso y se prolonga en los siglos posteriores.", ca: "Amb el pas del temps, l'emblema dels reis de la <em>Corona d'Aragó</em> va passar a identificar-se amb els territoris que governaven. La seva identificació amb el comtat de Barcelona i, per extensió, amb el <em>Principat de Catalunya</em>, sembla originar-se també en temps de Pere el Cerimoniós i es prolonga en els segles posteriors.", en: "Over time, the emblem of the kings of the <em>Crown of Aragon</em> came to be identified with the territories they ruled. Its identification with the county of Barcelona and, by extension, with the <em>Principality of Catalonia</em>, seems to also originate in the times of Peter the Ceremonious and continues in subsequent centuries." },
        "history-quote": { es: '"El corazón catalán late en estos colores"', ca: '"El cor català batega en aquests colors"', en: '"The Catalan heart beats in these colors"' },
        "history-p3": { es: "Ya a mediados del siglo XVI, el historiador valenciano Pere Antoni Beuter narra la leyenda de <em>Wifredo el Velloso</em> y los dedos de sangre en su Crónica General de España. Posteriormente, en un poema de 1644, Francesc Fontanella aludía a las barras:", ca: "Ja a mitjans del segle XVI, l'historiador valencià Pere Antoni Beuter narra la llegenda de <em>Guifré el Pilós</em> i els dits de sang a la seva Crònica General d'Espanya. Posteriorment, en un poema de 1644, Francesc Fontanella al·ludia a les barres:", en: "By the mid-16th century, the Valencian historian Pere Antoni Beuter narrates the legend of <em>Wilfred the Hairy</em> and the bloodied fingers in his General Chronicle of Spain. Later, in a 1644 poem, Francesc Fontanella alluded to the bars:" },
        "audio-title": { es: "Himno de Catalunya: Els Segadors", ca: "Himne de Catalunya: Els Segadors", en: "Anthem of Catalonia: Els Segadors" },
        "video-proyecto-title": { es: "Vídeo del proyecto", ca: "Vídeo del projecte", en: "Project video" },
        "video-proyecto-desc": { es: "Mismo vídeo optimizado que en la página de integración (WebM + MP4).", ca: "El mateix vídeo optimitzat que a la pàgina d'integració (WebM + MP4).", en: "Same optimized video as on the integration page (WebM + MP4)." },

        // Fact Cards
        "fact-patrimonio-h4": { es: "Patrimonio", ca: "Patrimoni", en: "Heritage" },
        "fact-patrimonio-p": { es: "9 sitios UNESCO", ca: "9 llocs UNESCO", en: "9 UNESCO sites" },
        "fact-cultura-h4": { es: "Cultura", ca: "Cultura", en: "Culture" },
        "fact-cultura-p": { es: "Cuna del modernismo", ca: "Cuna del modernisme", en: "Cradle of modernism" },
        "fact-costa-h4": { es: "Costa", ca: "Costa", en: "Coast" },
        "fact-costa-p": { es: "580 km de litoral", ca: "580 km de litoral", en: "580 km of coastline" },

        // Provinces Table
        "table-h3": { es: "Las Cuatro Provincias de Catalunya", ca: "Les Quatre Províncies de Catalunya", en: "The Four Provinces of Catalonia" },
        "table-caption": { es: "Información básica sobre las provincias catalanas", ca: "Informació bàsica sobre les províncies catalanes", en: "Basic information about the Catalan provinces" },
        "th-provincia": { es: "Provincia", ca: "Província", en: "Province" },
        "th-capital": { es: "Capital", ca: "Capital", en: "Capital" },
        "th-poblacion": { es: "Población", ca: "Població", en: "Population" },
        "th-superficie": { es: "Superficie (km²)", ca: "Superfície (km²)", en: "Area (km²)" },

        // Destinations Section
        "destinations-title": { es: "Explora Nuestros Destinos", ca: "Explora els Nostres Destins", en: "Explore Our Destinations" },
        "destinations-intro": { es: "De la vibrante Barcelona a las playas de la Costa Brava, cada rincón de Catalunya cuenta una historia única.", ca: "De la vibrant Barcelona a les platges de la Costa Brava, cada racó de Catalunya explica una història única.", en: "From vibrant Barcelona to the beaches of Costa Brava, every corner of Catalonia tells a unique story." },

        // Practica 13 — Chart section (Block A)
        "js-interact-v13-chart-heading": { es: "Turismo en cifras", ca: "Turisme en xifres", en: "Tourism in figures" },
        "js-interact-v13-chart-intro": { es: "Visualización ilustrativa del interés turístico por mes. Usa los botones para cambiar el tipo de gráfico o el conjunto de datos.", ca: "Visualització il·lustrativa de l'interès turístic per mes. Utilitza els botons per canviar el tipus de gràfic o el conjunt de dades.", en: "Illustrative view of monthly tourism interest. Use the buttons to switch chart type or dataset." },
        "js-interact-v13-cycle-data": { es: "Alternar temporada / perfil", ca: "Alternar temporada / perfil", en: "Switch season / profile" },
        "js-interact-v13-canvas-heading": { es: "Experiencia interactiva", ca: "Experiència interactiva", en: "Interactive experience" },
        "js-interact-v13-canvas-intro": { es: "Partículas que reaccionan al cursor (Canvas 2D y requestAnimationFrame). Pasa el ratón por el recuadro.", ca: "Partícules que reaccionen al cursor (Canvas 2D i requestAnimationFrame). Passa el ratolí pel requadre.", en: "Particles react to the cursor (Canvas 2D and requestAnimationFrame). Move the pointer over the frame." },

        // Cards
        "card1-title": { es: "Barcelona", ca: "Barcelona", en: "Barcelona" },
        "card1-desc": { es: "Descubre la obra maestra de Gaudí y el modernismo catalán. La Sagrada Familia, Park Güell y la arquitectura que cambió el mundo.", ca: "Descobreix l'obra mestra de Gaudí i el modernisme català. La Sagrada Família, Park Güell i l'arquitectura que va canviar el món.", en: "Discover Gaudí's masterpiece and Catalan modernism. Sagrada Familia, Park Güell, and the architecture that changed the world." },
        "card2-title": { es: "Pirineos", ca: "Pirineus", en: "Pyrenees" },
        "card2-desc": { es: "Naturaleza en estado puro. Montañas majestuosas, valles verdes y pueblos de piedra. Ideal para senderismo, esquí y desconexión total.", ca: "Natura en estat pur. Muntanyes majestuoses, valls verdes i pobles de pedra. Ideal per a senderisme, esquí i desconnexió total.", en: "Nature in its purest state. Majestic mountains, green valleys, and stone villages. Ideal for hiking, skiing, and total disconnection." },
        "card3-title": { es: "Costa Dorada", ca: "Costa Daurada", en: "Costa Dorada" },
        "card3-desc": { es: "Playas doradas y aguas cristalinas en la costa de Tarragona. Sol, arena fina y el encanto mediterráneo en su máxima expresión.", ca: "Platges daurades i aigües cristal·lines a la costa de Tarragona. Sol, sorra fina i l'encant mediterrani en la seva màxima expressió.", en: "Golden beaches and crystalline waters on the Tarragona coast. Sun, fine sand, and Mediterranean charm at its best." },
        "card4-title": { es: "Patrimonio Histórico", ca: "Patrimoni Històric", en: "Historical Heritage" },
        "card5-title": { es: "Deportes de Montaña", ca: "Esports de Muntanya", en: "Mountain Sports" },
        "card6-title": { es: "Gastronomía", ca: "Gastronomia", en: "Gastronomy" },

        // CTA Section
        "cta-title": { es: "¿Listo para tu aventura catalana?", ca: "A punt per a la teva aventura catalana?", en: "Ready for your Catalan adventure?" },
        "cta-text": { es: "Planifica tu viaje y descubre todo lo que Catalunya tiene para ofrecerte. Historia, cultura, gastronomía y paisajes inolvidables te esperan.", ca: "Planifica el teu viatge i descobreix tot el que Catalunya té per oferir-te. Història, cultura, gastronomia i paisatges inoblidables t'esperen.", en: "Plan your trip and discover everything Catalonia has to offer. History, culture, gastronomy, and unforgettable landscapes await you." },
        "cta-btn-plan": { es: "Planifica tu Viaje", ca: "Planifica el teu Viatge", en: "Plan Your Trip" },
        "cta-btn-learn": { es: "Conoce Más", ca: "Coneix Més", en: "Learn More" },

        // Footer
        "footer-about-h4": { es: "Catalunya Turismo", ca: "Catalunya Turisme", en: "Catalonia Tourism" },
        "footer-about-p": { es: "Descubre la magia del Mediterráneo, la riqueza cultural y la hospitalidad catalana.", ca: "Descobreix la màgia del Mediterrani, la riquesa cultural i l'hospitalitat catalana.", en: "Discover the magic of the Mediterranean, the cultural richness, and Catalan hospitality." },
        "footer-links-h4": { es: "Enlaces Rápidos", ca: "Enllaços Ràpids", en: "Quick Links" },
        "footer-nav-home": { es: "Inicio", ca: "Inici", en: "Home" },
        "footer-nav-history": { es: "Historia", ca: "Història", en: "History" },
        "footer-nav-destinations": { es: "Destinos", ca: "Destins", en: "Destinations" },
        "footer-nav-contact": { es: "Contacto", ca: "Contacte", en: "Contact" },
        "footer-contact-h4": { es: "Contacto", ca: "Contacte", en: "Contact" },
        "footer-follow-h4": { es: "Síguenos", ca: "Segueix-nos", en: "Follow Us" },
        "footer-bottom-p": { es: "&copy; 2025 Catalunya Turismo · Diseñado por Ricardo Avila · ricardo@avila.ws", ca: "&copy; 2025 Catalunya Turisme · Dissenyat per Ricardo Avila · ricardo@avila.ws", en: "&copy; 2025 Catalonia Tourism · Designed by Ricardo Avila · ricardo@avila.ws" },

        // Contact Page Specific
        "contact-title": { es: "Contacta con Nosotros", ca: "Contacta amb Nosaltres", en: "Contact Us" },
        "contact-subtitle": { es: "Estamos aquí para ayudarte a planificar tu aventura catalana. Cuéntanos tus dudas y juntos haremos realidad tu viaje.", ca: "Estem aquí per ajudar-te a planificar la teva aventura catalana. Explica'ns els teus dubtes i junts farem realitat el teu viatge.", en: "We are here to help you plan your Catalan adventure. Tell us your questions and together we will make your trip a reality." },
        "form-h2": { es: "Envíanos un Mensaje", ca: "Envia'ns un Missatge", en: "Send Us a Message" },
        "form-p": { es: "Completa el formulario y nos pondremos en contacto contigo lo antes posible.", ca: "Completa el formulari i ens posarem en contacte amb tu el més aviat possible.", en: "Fill out the form and we will get in touch with you as soon as possible." },
        "label-name": { es: "Nombre Completo *", ca: "Nom Complet *", en: "Full Name *" },
        "label-email": { es: "Correo Electrónico *", ca: "Correu Electrònic *", en: "Email Address *" },
        "label-phone": { es: "Teléfono (opcional)", ca: "Telèfon (opcional)", en: "Phone (optional)" },
        "label-destination": { es: "Destino de Interés", ca: "Destí d'Interès", en: "Destination of Interest" },
        "label-message": { es: "Tu Mensaje *", ca: "El Teu Missatge *", en: "Your Message *" },
        "label-privacy": { es: "Acepto la política de privacidad y el tratamiento de mis datos personales", ca: "Accepto la política de privadesa i el tractament de les meves dades personals", en: "I accept the privacy policy and the processing of my personal data" },
        "btn-send": { es: "Enviar Mensaje", ca: "Enviar Missatge", en: "Send Message" },
        "info-h3": { es: "Información de Contacto", ca: "Informació de Contacte", en: "Contact Information" },
        "info-address": { es: "Dirección:", ca: "Adreça:", en: "Address:" },
        "info-phone": { es: "Teléfono:", ca: "Telèfon:", en: "Phone:" },
        "info-email": { es: "Email:", ca: "Email:", en: "Email:" },
        "info-hours": { es: "Horario:", ca: "Horari:", en: "Hours:" },
        "info-hours-val": { es: "Lunes a Viernes: 9:00 - 18:00<br>Sábados: 10:00 - 14:00", ca: "Dilluns a Divendres: 9:00 - 18:00<br>Dissabtes: 10:00 - 14:00", en: "Monday to Friday: 9:00 - 18:00<br>Saturdays: 10:00 - 14:00" },
        "map-h3": { es: "Encuéntranos", ca: "Troba'ns", en: "Find Us" },
        "btn-back": { es: "← Volver al Inicio", ca: "← Tornar a l'Inici", en: "← Back to Home" },
        "label-date": { es: "Fecha Tentativa de Viaje *", ca: "Data Tentativa de Viatge *", en: "Tentative Travel Date *" },

        // Placeholders & Iframe
        "nombre": { es: "Ej: Juan García", ca: "Ex: Joan Garcia", en: "e.g.: John Smith" },
        "email": { es: "ejemplo@correo.com", ca: "exemple@correu.com", en: "example@email.com" },
        "telefono": { es: "+34 600 123 456", ca: "+34 600 123 456", en: "+34 600 123 456" },
        "mensaje": { es: "Cuéntanos qué tipo de experiencia buscas...", ca: "Explica'ns quin tipus d'experiència busques...", en: "Tell us what kind of experience you are looking for..." },
        "opt-dest-placeholder": { es: "Selecciona un destino", ca: "Selecciona un destí", en: "Select a destination" },
        "info-address-val": { es: "Oficina de Turismo Catalunya<br>Tarragona, España", ca: "Oficina de Turisme Catalunya<br>Tarragona, Espanya", en: "Catalonia Tourism Office<br>Tarragona, Spain" },
        "google-map": {
            es: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9017669209364!2d1.244486815497392!3d41.118884779276836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a425c8b260a9fb%3A0x21762e3c32576d0!2sTarragona%2C%20Catalunya%2C%20España!5e0!3m2!1ses!2ses!4v1707557589220!5m2!1ses!2ses",
            ca: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9017669209364!2d1.244486815497392!3d41.118884779276836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a425c8b260a9fb%3A0x21762e3c32576d0!2sTarragona%2C%20Catalunya%2C%20España!5e0!3m2!1sca!2sca!4v1707557589220!5m2!1sca!2sca",
            en: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9017669209364!2d1.244486815497392!3d41.118884779276836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a425c8b260a9fb%3A0x21762e3c32576d0!2sTarragona%2C%20Catalunya%2C%20España!5e0!3m2!1sen!2sen!4v1707557589220!5m2!1sen!2sen"
        }
    };

    // Función para actualizar el color dorado según la página activa
    function updateActiveLink() {
        const path = window.location.pathname;
        const isContacto = path.includes('contacto.html');
        $('#nav-home, #nav-contact').css('color', '');
        if (isContacto) {
            $('#nav-contact').css('color', '#d4a520');
        } else {
            $('#nav-home').css('color', '#d4a520');
        }
    }

    // Función de Traducción Mejorada (Versión jQuery)
    function setLanguage(lang) {
        for (const id in translations) {
            const $el = $(`#${id}`);
            if ($el.length > 0) {
                const tag = $el.prop("tagName");
                if (tag === "INPUT" || tag === "TEXTAREA") {
                    $el.attr("placeholder", translations[id][lang]);
                } else if (tag === "IFRAME") {
                    $el.attr("src", translations[id][lang]);
                } else {
                    $el.html(translations[id][lang]);
                }
            }
        }
        localStorage.setItem("userLang", lang);
        updateActiveLink(); // Persistencia del color dorado
        window.dispatchEvent(new CustomEvent("catalunya-lang-changed", { detail: { lang } }));
    }

    // Misión 1: Selección de Elementos y Cambios Visuales
    $('.historia-section h3').css('color', '#c8102e'); 
    $('.destino-card').css('border-bottom', '4px solid #d4a520');
    $('#hero h1').css('text-shadow', '2px 2px 10px rgba(0,0,0,0.5)');
    
    // Misiones 2-5: Favoritos, Eventos, Animaciones y Datepicker
    // (Lógica previa mantenida sin cambios)
    $('#btn-anadir').on('click', function() {
        const destino = $('#nuevo-destino').val().trim();
        if (destino !== "") {
            const $nuevoItem = $(`<li style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; display: none;"><span>${destino}</span><button class="btn-eliminar" style="background: #c8102e; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button></li>`);
            $('#lista-favoritos').append($nuevoItem);
            $nuevoItem.fadeIn(800); 
            $('#nuevo-destino').val('').focus();
        }
    });

    $('#lista-favoritos').on('click', '.btn-eliminar', function() {
        const $li = $(this).parent();
        if ($('#dialog-confirm').length === 0) {
            $('<div id="dialog-confirm" title="¿Eliminar destino?"><p>¿Estás seguro de que quieres eliminar este destino de tu lista de favoritos?</p></div>').appendTo('body');
        }
        $("#dialog-confirm").dialog({ modal: true, buttons: { "Eliminar": function() { $(this).dialog("close"); $li.fadeOut(400, function() { $(this).remove(); }); }, "Cancelar": function() { $(this).dialog("close"); } } });
    });

    if ($('.favoritos-controls').length > 0) {
        $('<button id="toggle-favoritos" class="btn btn-secondary" style="margin-bottom: 20px; width: 100%;">Ocultar Panel Favoritos</button>').insertBefore('.favoritos-controls');
        $('#toggle-favoritos').on('click', function() { $('.favoritos-controls, #lista-favoritos').slideToggle(600, function() { const isVisible = $('.favoritos-controls').is(':visible'); $('#toggle-favoritos').text(isVisible ? "Ocultar Panel Favoritos" : "Mostrar Panel Favoritos"); }); });
    }

    $('#nuevo-destino').on('keyup', function(e) { if (e.key === "Escape") { $(this).val(''); $('<div id="feedback-teclado" style="color: #d4a520; margin-top: 5px; font-weight: bold;">Campo limpiado con éxito.</div>').insertAfter(this).fadeOut(2000, function() { $(this).remove(); }); } });

    if ($('.contact-form').length > 0) {
        if ($('#datepicker').length === 0) {
            const dateField = `<div class="form-group"><label id="label-date" for="datepicker">Fecha Tentativa de Viaje *</label><input type="text" id="datepicker" name="fecha" placeholder="Selecciona una fecha" required aria-required="true" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; width: 100%;"></div>`;
            $(dateField).insertBefore('#btn-send').parent().find('.form-group:last').css('margin-bottom', '15px');
        }
        $('#datepicker').datepicker({ dateFormat: "dd/mm/yy", showAnim: "slideDown", dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"], monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] });
    }

    // Menú Hamburguesa
    $('#hamburger-menu').on('click', function() {
        const $nav = $('#main-nav, #main-nav-links');
        $nav.toggleClass('is-active');
        const expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
    });

    // Idioma
    $('#selector-idiomas').on('click', 'button', function() {
        const lang = $(this).data('lang');
        if (lang) setLanguage(lang);
    });

    // Carga inicial
    const savedLang = localStorage.getItem("userLang") || "es";
    setLanguage(savedLang);

    // Custom audio controls (himne) — index.html loads jquery.js, not script.js
    const himneAudio = document.getElementById("himne-audio");
    const playPauseBtn = document.getElementById("play-pause-btn");
    if (himneAudio && playPauseBtn) {
        const playIcon = playPauseBtn.querySelector(".fa-play");
        const pauseIcon = document.createElement("i");
        pauseIcon.className = "fas fa-pause";
        playPauseBtn.appendChild(pauseIcon);
        pauseIcon.style.display = "none";

        $(playPauseBtn).on("click", function () {
            if (himneAudio.paused) {
                himneAudio.play().catch(function () {
                    console.warn("Audio playback failed (missing file, permissions, or browser policy).");
                });
                if (playIcon) playIcon.style.display = "none";
                pauseIcon.style.display = "inline";
                playPauseBtn.setAttribute("aria-label", "Pausar");
            } else {
                himneAudio.pause();
                if (playIcon) playIcon.style.display = "inline";
                pauseIcon.style.display = "none";
                playPauseBtn.setAttribute("aria-label", "Reproducir");
            }
        });

        himneAudio.addEventListener("ended", function () {
            if (playIcon) playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
            playPauseBtn.setAttribute("aria-label", "Reproducir");
        });
    }

});






