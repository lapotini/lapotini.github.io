require.config({
    paths: {
       'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery',
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
    //console.log("model", model);
    //console.log("view", view);
    //console.log("controller", controller);
    var initToDoList = ['Learn', 'Sleep'];
    var model = new model(initToDoList);
    var view = new view(model);
    var controller = new controller(model, view);

  }




);
