(function ($) {



//MODALNOE


    $(".callbackModal_bg").on('click', function(){	// Событие клика на затемненный фон
        $(".callbackModal").fadeOut(800);	// Медленно убираем всплывающее окно
    });

    $(".callback").on('click', function() {
        $(".callbackModal").fadeIn(800); // Медленно выводим изображение
    });

//MODALNOE



//SLIDER

    var slider = $('#jcarousel');
    slider
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();


            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 12000,
            target: '+=1',
            autostart: true
        });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });



    //ANCHOR

    $("#menuTop").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


 //SMALL MENU


//small menu
    var openButton = $('#openButton');
    var menu = $('#menuTop');

    openButton.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });



    //MAP

    YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
        map.setCenter(new YMaps.GeoPoint(36.625, 54.205), 14);
        map.addOverlay(new YMaps.Placemark(new YMaps.GeoPoint(36.625, 54.205)));
    });



})(jQuery);