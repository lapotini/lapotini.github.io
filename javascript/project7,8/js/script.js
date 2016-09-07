
$(function () {

  var linkTab = $(".menu-tab__link");
  var textTab = $("#content-tab div");
  var itemTab = $(".menu-tab__item");

  $(textTab).hide().filter(':first').show();

  $(linkTab).on("click", function(){
    $(linkTab).removeClass("active");
    $(this).addClass("active");
    $(textTab).hide().filter(this.hash).fadeIn();

    return false
  });


  $(itemTab).hover(
    function(){
      $(this).addClass('hover');
    },
    function(){
      $(itemTab).removeClass('hover');
    }
  );

});




//////////////////////////////part 2///////////////////////



$(function () {


  $('.wrapper__boxInput').append('<em></em>');
  var boxLabel = $('.wrapper__boxInput label');
  var boxInput = $('.wrapper__boxInput input');
  var buttonShow = $('.buttonShow');
  $(boxLabel).siblings("em").hide();

  $(boxLabel).on('click', function(){
    var textShow = $(this).find('input').attr('title');
    $(this).siblings("em").text(textShow).toggle();

  });


  $(boxInput).hover(function(){
      var textShow = $(this).attr('title');
      $(this).siblings("em").text(textShow).show();
    },
    function(){
      $(this).siblings("em").hide();
  });



  $(buttonShow).on('click', function(){
    for (var i = 0; i < boxInput.length; i++){
      var textShow = $(boxInput[i]).attr('title');
      $(boxInput[i]).siblings("em").text(textShow).toggle();
    }
  });

});
