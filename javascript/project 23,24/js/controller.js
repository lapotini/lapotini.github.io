define(
  'controller',
  [
    'jquery',
    'tmpl',
    'model',
    'view'
  ],

    function Controller (model, view){
      var self = this;

      view.elements.addButton.on('click', addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
       view.elements.listContainer.on('click', '.item-edit', editItem);



      function addItem (){
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem(){
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);

      }
       function editItem(){
         var item = $(this).attr('data-value');
         var inputText = $(this).siblings($('.text'));
         inputText.removeAttr("disabled");
         inputText.focus();
         view.elements.listContainer.on('blur', '.text', function(){
           inputText.prop('disabled', false);
           var newItem = $(this).val();
           console.log(newItem);
           model.editItem(item, newItem);
           view.renderList(model.data);
         });
       }
      return Controller;
    }


  );
