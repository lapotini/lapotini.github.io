jQuery(document).ready(function() {
  jQuery('.jcarousel').jcarousel({
   animation: 'slow',
   wrap: 'circular'
  });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
   });
  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });


  $('.jcarousel')
      .on('jcarousel:create jcarousel:reload', function() {
          var element = $(this),
              width = element.innerWidth();
          // This shows 1 item at a time.
          // Divide `width` to the number of items you want to display,
          // eg. `width = width / 3` to display 3 items at a time.
          element.jcarousel('items').css('width', width + 'px');
      })


         .jcarouselAutoscroll({
             interval: 4000,
             target: '+=1',
             autostart: true
         });






//                              CHECKBOX jQuery


	// проверяем, какие чекбоксы активны и меняем сласс для родительского дива
	$('.decor_checkbox').each(function(){
		 var checkbox = $(this).find('input[type=checkbox]');
		 if(checkbox.prop("checked")){
       $(this).addClass("check_active");
     }
   });

	// при клике по диву, делаем проверку
	 $('.decor_checkbox').on('click', function(){
	   var checkbox = $(this).find('input[type=checkbox]');
	  	// если чекбокс был активен
		 if(checkbox.prop("checked")){
			// снимаем класс с родительского дива
			 $(this).removeClass("check_active");
			// и снимаем галочку с чекбокса
			  checkbox.prop("checked", false);
		// если чекбокс не был активен
		  }else{
			// добавляем класс родительскому диву
			  $(this).addClass("check_active");
			// ставим галочку в чекбоксе
			  checkbox.prop("checked", true);
		   }
	  });





 });

// menu //
 document.addEventListener('DOMContentLoaded', function() {

  var items = document.getElementsByClassName('parent');
  var subMenu = document.getElementsByClassName('menu__sub');
  // var childItems = subMenu[0].getElementsByTagName('*');
 // console.log(childItems[0])
  for(var i = 0; i < items.length; i++){
    items[i].addEventListener('mouseover', showMenu);
  }
  function showMenu(e){
     for(var i = 0; i < items.length; i++){

       if (e.target == items[i]){
         this.classList.add("active");
          subMenu[i].style.visibility = 'visible';
          slideAnimation(subMenu[i]);
        }
      }
   }





  for(var y = 0; i < items.length; y++){
    items[i].addEventListener('mouseout', hideMenu);
  }

      function hideMenu(event) {

       var item = isParent(this, event.relatedTarget);
         if (!item){

            // var subMenu_active = event.target.getElementsByClassName("menu__sub");
            // console.log(event.target.parentNode);
            for (var i = 0; i < subMenu.length; i++) {
                subMenu[i].style.visibility = 'hidden';
                this.classList.remove("active");
                hideAnimation(subMenu[i]);
            }
         }
       }

       function isParent(refNode, otherNode) {
         	var parent = otherNode.parentNode;
         	do {
         		if (refNode == parent) {
         			return parent;
         		} else {
         			parent = parent.parentNode;
            }
         	} while (parent);
         	return null;
       }



       function slideAnimation(el){
         var topPosition = 150;

         var time = 0;
         var fps = 25;

         var interval = setInterval (function(){
           time += 1
           topPosition -= 1;

           el.style.top = topPosition + '%';

           if (topPosition === 100){
             clearInterval(interval);
           }
         }, 200/fps);
       }



       function hideAnimation(elem){
         var topPosition = 100;
         var opacityChange = el.style.opacity;
         var time = 0;
         var fps = 25;

         var interval = setInterval (function(){
           time += 1
           topPosition += 1;

           elem.style.top = topPosition + '%';

           if (topPosition === 150){
             clearInterval(interval);
           }
         }, 200/fps);
       }




});







/*       SELECT   ////////                        */
(function($) {
$(function() {

  $('select').styler({
		selectVisibleOptions: 4
	});


});
})(jQuery);


//
//
// (function($) {
// $(function() {
// var _dropdown;
// var settings = {autoReinitialise: true};
// $('input, select').styler({
// selectSearch: true,
// onFormStyled: function(){
// _dropdown = $('.jq-selectbox__dropdown');
// _dropdown.find('ul').wrap('<div class="scroll-pane" />');
// },
// onSelectOpened: function(){
// var _ul = $(this).find('.jq-selectbox__dropdown ul');
// var height = _ul.height();
// var _srollPane = _dropdown.find('.scroll-pane');
// _srollPane.height(height);
// _ul.css('max-height', 'none');
// _srollPane.jScrollPane(settings);
// }
// });
// });
// })(jQuery);
