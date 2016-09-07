
(function($){

  $.fn.myCarousel = function(options){

    var defaults = {
      slideSpeed: 500,
      widthElementParam: 100
    };


    var settings = $.extend(defaults, options);


    var buttonPrev = $('.button_prev');
    var buttonNext = $('.button_next');
    var carouselList = $('.carousel-list');
    var carouselCount = $('.carousel-list').find('li').length;


    var slide = 0;
    var widthElement = defaults.widthElementParam;
    var maxPosition = - ((1 + carouselCount - 4) * widthElement);
    var minPosition = 0;
    var maxPositionLeft = - ((carouselCount- 4) * widthElement);

    buttonNext.on('click', function(){
      slide -= widthElement * defaults.slideCount;
      if (slide <= maxPosition) {
        slide = 0;
      }
      carouselList.animate({ left : slide + "px"}, settings.slideSpeed);
    });

    buttonPrev.on('click', function(){
      slide += widthElement * defaults.slideCount;
      if (slide > minPosition) {
        slide = maxPositionLeft;
      }
      carouselList.animate({ left : slide + "px"}, settings.slideSpeed);
    });


  return this;

  }

})(jQuery);
