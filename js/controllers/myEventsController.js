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
