$( document ).ready(function() {



    var jcarousel = $('.jcarouselSmall');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 860) {
                width = width / 4;
            } else if (width >= 655) {
                width = width / 3;
            }
            else if (width >= 420) {
                width = width / 2;
            }
            else if (width >= 410) {
                width = width;
            }


            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


    //jcarousel SLIDER
    var pagination = $('.jcarousel-pagination');



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
            interval: 8000,
            target: '+=1',
            autostart: true
        });




    pagination.on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
    })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        });


    pagination.jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '"></a>';
        }
    });



    //jcarousel


    //TABS

    var linkTab = $(".menu-tab__link");
    var textTab = $("#content-tab div");
    var itemTab = $(".menu-tab__item");

    $(textTab).hide().filter(':first').show();
    $(linkTab).removeClass("active").filter(':first').addClass("active");

    $(linkTab).on("click", function () {
        if ($(this).hasClass("active")) {
            return false
        } else {
            $(linkTab).removeClass("active");
            $(this).addClass("active");
            $(textTab).hide().filter(this.hash).fadeIn();
        }
        return false
    });


//TABS
});