$(document).ready(function () { // cuando esta preparado el documento.
    $window = $(window); // como llama Jquery al elemento.

    $('#intro').height($window.height()); // intro es la 1 imagen > alto.
    $window.scroll(function () { //tengo en cuenta el movimiento del scroll de los otros 3 div con la clase background > each es por cada elemento.
        $('div.background').each(function (index, item) {
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed')); // eje coordenadas - es para arriba. y segun la velocidad declarada se va moviendo.
            const coords = '50%' + yPos + 'px'; // x > 50% y posic. y sale dinamicamente segun valor // velocidad (data-speed).
            $scroll.css({ backgroundPosition: coords }); // se aplica por css.

        }) // fin de la tercera funcion.
    }) // fin de la segunda funcion.

}) // fin de la funcion .