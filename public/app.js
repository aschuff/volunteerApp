(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('AllEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {
      $scope.eventList = EventService.getEvents();
    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('MyEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {
      $scope.eventList = EventService.getEvents();
      console.log($scope.eventList);

      // $scope.login = function(){
      //   console.log('my events');
      //
      // }

    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('UserController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
      $scope.currentUser = UserService.getUsers();
      // $scope.login = function(){
      //   console.log('logged in');
      //
      // };

    }]);
};

},{}],4:[function(require,module,exports){
module.exports = function(app) {
app.directive('eventthing', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/events.html',
        scope: {
            eventname: '=info',
        },
        // replace: true,
    };
});
}

},{}],5:[function(require,module,exports){
module.exports = function(app) {
app.directive('userperson', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/users.html',
        scope: {
            userpersonname: '=info',
        },
        // replace: true,
    };
});
}

},{}],6:[function(require,module,exports){
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

},{"./controllers/AllEventsController":1,"./controllers/MyEventsController":2,"./controllers/UserController":3,"./directives/events":4,"./directives/users":5,"./services/EventService":7,"./services/UserService":8}],7:[function(require,module,exports){
module.exports = function(app) {

    app.factory('EventService', ['$http', function($http) {
        let eventArray = [];

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/events.json'
        }).then(function(response) {
            console.log('events:', response);
            let eventList = response.data
            angular.copy(eventList, eventArray)
        })
        return {
            getEvents: function() {
                return eventArray;
            }
        }; 
    }]);
};

},{}],8:[function(require,module,exports){
module.exports = function(app){

// this service will handle all user data
  app.factory('UserService', ['$http', function($http){
        let currentUser = [];

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/users.json'
        }).then(function(response) {
            console.log('users:', response);
            let userList = response.data
            angular.copy(userList, currentUser)
        })
        return {
            getUsers: function() {
                return currentUser;
            }
        };

        // serverLogin: function(username,password){
        //   $http({
        //         method: 'POST',
        //         url: '/login',
        //         data: {
        //           username: username,
        //           password: password,
        //         }
        //     }).then(function(response) {
        //       console.log("here is whats coming back", response );
        //
        //     })
        // },
        //
        // getCurrentUser: function() {
        //   console.log("user info", currentUser);
        //   return currentUser
        // },

    }]);
};

},{}]},{},[6])