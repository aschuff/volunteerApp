module.exports = function(app) {
    app.controller('AllEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {
      $scope.eventList = EventService.getEvents();
    }]);
};
