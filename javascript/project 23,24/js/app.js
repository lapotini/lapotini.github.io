require.config({
    paths: {
       'jquery': 'https://code.jquery.com/ui/1.11.3/jquery-ui.min.js',
       'tmpl': 'tmpl'
    },
    shim: {
      'jquery': {
        exports: 'jQuery'
      },
      'tmpl': {
  			exports: 'tmpl'
  		}
    }

});

require(
  [
    'jquery',
    'tmpl',
    'model',
    'view',
    'controller'
  ],
  function($, tmpl, model, view, controller){
    console.log("model", model);
    console.log("view", view);
    console.log("controller", controller);
    var initToDoList = ['Learn', 'Sleep'];
    var model = new Model(initToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

  }




);
