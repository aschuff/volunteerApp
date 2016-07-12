let app = angular.module('volunteerApp', ['ngRoute']);

// Controllers
require('./controllers/AllEventsController')(app);
require('./controllers/UserController')(app);
require('./controllers/MyEventsController')(app);

// Services
require('./services/EventService')(app);
require('./services/UserService')(app);

// Directives
require('./directives/users')(app);
require('./directives/events')(app);


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
      controller: 'AllEventsController',
      templateUrl: 'templates/generalEventsTemplate.html',
    })
    .when('/users', {
      controller: 'UserController',
      templateUrl: 'templates/usersTemplate.html',
    })
    .when('/myevents', {
      controller: 'MyEventsController',
      templateUrl: 'templates/myEventsTemplate.html',
    });

}]);
