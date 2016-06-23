
$( document ).ready(function() {


  $(function() {
      $('.jcarousel').jcarousel({
          // Configuration goes here
           animation: 'slow',
            wrap: 'circular'
      });

    $('.jcarousel')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true
        });

            $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
              $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
              $(this).removeClass('active');
            });


          $('.jcarousel-pagination').jcarouselPagination({
              item: function(page) {
                  return '<a href="#' + page + '"></a>';
              }
          });

      });




//ACCORDION PANEL------------------------------

$(function() {

  var head = $('.panelHead');
  var content = $('.panelContent');
  $(head).removeClass('active').siblings(content).hide();


  $(head).on('click', function() {


    if ($(this).hasClass('active')) {
        $(this).removeClass('active').siblings(content).slideUp();
        // $(this).css({backgroundColor: 'white', color:'black'});
    } else{
        $(head).removeClass('active').siblings(content).slideUp();
        $(this).addClass('active').siblings(content).slideDown();
        // $(this).css({backgroundColor: '#f4b60d', color:'white'});
      }




   });






 });


 });
