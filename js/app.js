let app = angular.module('volunteerApp', ['ngRoute']);

// Controllers
require('./controllers/GenEventsController')(app);
require('./controllers/UserController')(app);
require('./controllers/MyEventsController')(app);

// Services
require('./services/EventService')(app);
require('./services/UserService')(app);

// Directives
require('./directives/users')
require('./directives/events')


// Router
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login',
    })
    .when('/login', {
      controller: 'UserController',
      templateUrl: 'templates/loginTemplate.html',
    })
    .when('/events', {
      controller: 'GenEventsController',
      templateUrl: 'templates/generalEventsTemplate.html',
    })
    .when('/myevents', {
      controller: 'MyEventsController',
      templateUrl: 'templates/myEventsTemplate.html',
    });

}]);
