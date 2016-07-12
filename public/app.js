(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('GenEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {

      // $scope.login = function(){
      //   console.log('all events');
      //
      // }

    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('MyEventsController', ['$scope', '$location', 'UserService', 'EventService', function($scope, $location, UserService, EventService) {

      // $scope.login = function(){
      //   console.log('my events');
      //
      // }

    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('UserController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

      // $scope.login = function(){
      //   console.log('logged in');
      //
      // };

    }]);
};

},{}],4:[function(require,module,exports){
let app = angular.module('volunteerApp', ['ngRoute']);

// Controllers
require('./controllers/GenEventsController')(app);
require('./controllers/UserController')(app);
require('./controllers/MyEventsController')(app);

// Services
require('./services/EventService')(app);
require('./services/UserService')(app);

//router
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

},{"./controllers/GenEventsController":1,"./controllers/MyEventsController":2,"./controllers/UserController":3,"./services/EventService":5,"./services/UserService":6}],5:[function(require,module,exports){
module.exports = function(app){


  app.factory('EventService',['$http', function($http){

    return {

    };
  }]);
};

},{}],6:[function(require,module,exports){
module.exports = function(app){

// this service will handle all user data
  app.factory('UserService', ['$http','$location', function($http, $location){
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