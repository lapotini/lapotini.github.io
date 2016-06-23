define(

      'view',
      [
        'jquery',
        'tmpl',
        'model'

      ],


      function View (model){
        var self = this;

        function init(){
          var wrapper = tmpl($('#wrapper-temlate').html());
          $('body').append(wrapper);

          self.elements = {
            input: $('.item-value'),
            addButton: $('.add-button'),
            listContainer: $('.item-List')
          };
          self.renderList(model.data);
        }


        self.renderList = function(data){
          var list = tmpl($('#list-temlate').html(), {data: data});
          self.elements.listContainer.html(list);
        };

        init();

        return View;
      }


  );
