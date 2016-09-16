(function ($) {




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


    var jcarousel = $('.jcarouselSmall');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 1083) {
                width = width / 4;
            } else if (width >= 803) {
                width = width / 3;
            }
            else if (width >= 537) {
                width = width / 2;
            }
            else if (width <= 536) {
                width = width;
            }


            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true
        });


    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,

            item: function (page) {
                if (page <= 3) {
                    return '<a href="#' + page + '">' + '</a>';
                }

            }
        });


    //ANCHOR

    $(".menuTop").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //SMALL MENU


//small menu
    var openButton = $('#openButton');
    var menu = $('.menuTop');

    openButton.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });


})(jQuery);