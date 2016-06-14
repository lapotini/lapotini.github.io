$(function($) {
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });


    $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
     });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

});





$(document).ready(function($) {
  var searchButton = $('.search__button');
  var searchInput = $('.search__input');

    searchButton.on('click', function(){
    search(searchInput.val());
  });

    searchInput.on('keydown', function(e) {
    if (event.keyCode == 13) {
      search(searchInput.val());
    }
    });

    // RANDOM QUERY
    var randomSearch = ['flyer', 'Parachuting', 'aircraft', 'ukraine', 'mountain', 'forest' ];
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
      }
      search(randomSearch[randomInteger(0, randomSearch.length-1)]);

     // -RANDOM QUERY

    function search(query){
      var API_KEY = '2612659-a06243bff7542cbcab6fc731d';
      $.ajax({
        url: "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query),
        dataType: 'json',
        success:function(data){
          $('.grid').find($('.gridError')).remove();
          if (data.hits.length > 0){
             //  console.log(data);
             $('.grid').find($('.grid-item')).remove();
             var html = $('#html').html();
             var content = tmpl(html, data);

             $('.grid').isotope({
               layoutMode: 'fitRows',
               itemSelector: '.grid-item'

             });
             $('.grid').append(content);
          }else{
             $('.grid').find($('.grid-item')).remove();
             $('.grid').find($('.gridError')).remove();
              $('.grid').append('<p class="gridError">Nicht gefunden</p>');

          }
        }

      });
   }




});
