(function ($) {

//small menu
    var openButton = $('#openButton');
    var menu = $('.smallMenu');

    openButton.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

})(jQuery);