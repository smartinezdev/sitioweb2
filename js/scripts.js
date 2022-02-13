/*Inicio del evento para navegar en el sitio web*/
$('a.ev-js1[href*="#"]').on('click', function (e) {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
    e.preventDefault();
});

/*Fin del evento para navegar en el sitio web*/

/*Inicio del evento para ir a la parte superior del sitio web dando click al logo*/
$('.logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});

/*Fin del evento para ir a la parte superior del sitio web dando click al logo*/

/*Inicio del evento para cerrar el menú de navegación*/
$('.ev-js2').click(function () {
    $('.navbar-collapse').collapse('hide');
});

/*Fin del evento para cerrar el menú de navegación*/

/*Inicio de las animaciones de la libreria ScrollReveal*/
window.sr = ScrollReveal();

sr.reveal('.logo, .coctel', {
    delay: 300,
    distance: 0,
    duration: 1000,
    interval: 300
});

sr.reveal('.etiqueta-h1, .etiqueta-h3-1, .etiqueta-h3-2', {
    distance: '20px',
    duration: 1500,
    origin: 'top'
});

sr.reveal('.parrafo, .cocteles, .lista', {
    distance: '20px',
    duration: 2000,
    origin: 'top'
});

/*Fin de las animaciones de la libreria ScrollReveal*/