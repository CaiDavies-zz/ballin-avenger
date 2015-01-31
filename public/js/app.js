window.Todos = Ember.Application.create();

Todos.Router.map(function() {
  // put your routes here
});

// Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
//   firebase: new Firebase('https://glaring-torch-5894.firebaseio.com/')
// });

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];
