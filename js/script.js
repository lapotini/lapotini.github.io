
//ACCORDION PANEL------------------------------

$(function() {

    var parent = $('.parent');
    var subList = $('.subList');
    $(parent).removeClass('active').find(subList).hide();


    $(parent).on('click', function () {
        $(this).toggleClass('active').find(subList).slideToggle();

    });

});