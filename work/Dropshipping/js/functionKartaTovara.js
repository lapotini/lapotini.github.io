$( document ).ready(function() {



    var jcarousel = $('.responsiveCarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 660) {
                width = width / 4.03;
            } else if (width >= 455) {
                width = width / 3.03;
            }
            else if (width >= 310) {
                width = width / 2.03;
            }
            else if (width <= 309) {
                width = width-1;
            }


            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });


    $('.responsiveCarousel-control-prev').jcarouselControl({
        target: '-=1'
    });
    $('.responsiveCarousel-control-next').jcarouselControl({
        target: '+=1'
    });









    //jcarousel


    //TABS

    var linkTab = $(".menu-tovar-tab__link");
    var textTab = $("#content-tovar-tab div");
    var itemTab = $(".menu-tovar-tab__item");

    $(textTab).hide().filter(':first').show();
    $(linkTab).removeClass("activeTab").filter(':first').addClass("activeTab");

    $(linkTab).on("click", function () {
        if ($(this).hasClass("activeTab")) {
            return false
        } else {
            $(linkTab).removeClass("activeTab");
            $(this).addClass("activeTab");
            $(textTab).hide().filter(this.hash).fadeIn();
        }
        return false
    });


//TABS

});