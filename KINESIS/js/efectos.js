$(document).ready(function(){

    //Efecto Menu
    $('.menu a').each(function(indexx, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (indexx * 500));
    });

    //Efecto Header
    if( $(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll Elemetos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#helados-nieves').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: acercaDe - 205
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});