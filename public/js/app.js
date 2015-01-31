// Firebase connection
var myDataRef = new Firebase('https://glaring-torch-5894.firebaseio.com/');
$(document).ready(function(){  

  jQuery.getJSON("https://glaring-torch-5894.firebaseio.com/.json", function(json){
    console.log(json);
  });

});

    

App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
