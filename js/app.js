let app = angular.module('volunteerApp', ['ngRoute']);

// Controllers
require('./controllers/genEventsController')(app);
require('./controllers/userController')(app);
require('./controllers/myEventsController')(app);

// Services
require('./services/eventService')(app);
require('./services/userService')(app);

//router
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login',
    })
    .when('/login', {
      controller: 'userController',
      templateUrl: 'templates/loginTemplate.html',
    })
    .when('/events', {
      controller: 'genEventsController',
      templateUrl: 'templates/generalEventsTemplate.html',
    })
    .when('/myevents', {
      controller: 'myEventsController',
      templateUrl: 'templates/myEventsTemplate.html',
    });

}]);
