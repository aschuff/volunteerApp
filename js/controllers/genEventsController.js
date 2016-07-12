module.exports = function(app) {
    app.controller('GenEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {
      $scope.eventList = EventService.getEvents();
    }]);
};
