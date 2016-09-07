

  function Model (data){
    var self = this;

    self.data = data;

    self.addItem = function (item){
      if(item.length === 0){
        return;
      }
      self.data.push(item);
      return self.data;
    };


    self.removeItem = function (item){
      var index = self.data.indexOf(item);
      // if(index === -1){
      //   return;
      // }
      self.data.splice(index, 1);
      return self.data;
    };

     self.editItem = function(item, editedItem){
       var index = self.data.indexOf(item);
       console.log(index);
       if(index === -1){
         return;
       }
       self.data[index] = editedItem;
       return self.data;

      };

  }




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

  }





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




  }



  $(function () {
    var firstToDoList = ['Learn', 'Sleep'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

  });
