(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('genEventsController', ['$scope', '$location', 'eventService', function($scope, $location, eventService) {

      // $scope.login = function(){
      //   console.log('all events');
      //
      // }

    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('myEventsController', ['$scope', '$location', 'userService', 'eventService', function($scope, $location, userService, eventService) {

      // $scope.login = function(){
      //   console.log('my events');
      //
      // }

    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('userController', ['$scope', '$location', 'userService', function($scope, $location, userService) {

      // $scope.login = function(){
      //   console.log('logged in');
      //
      // };

    }]);
};

},{}],4:[function(require,module,exports){
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

},{"./controllers/genEventsController":1,"./controllers/myEventsController":2,"./controllers/userController":3,"./services/eventService":5,"./services/userService":6}],5:[function(require,module,exports){
module.exports = function(app){


  app.factory('eventService',['$http', function($http){

    return {

    };
  }]);
};

},{}],6:[function(require,module,exports){
module.exports = function(app){

// this service will handle all user data
  app.factory('userService', ['$http','$location', function($http, $location){
    let currentUser = {};

    return{
    };
    //   serverLogin: function(user,pass){
    //     $http({
    //           method: 'POST',
    //           url: '/login',
    //           data: {
    //             username: user,
    //             password: pass,
    //           }
    //       }).then(function(response) {
    //         console.log("here is whats coming back", response );
    //
    //       })
    //   },
      //
      // getCurrentUser: function() {
      //   console.log("user info", currentUser);
      //   return currentUser
      // },


    // };
  }]);
};

},{}]},{},[4])