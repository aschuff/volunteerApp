module.exports = function(app) {
    app.controller('AllEventsController', ['$scope', '$location', 'EventService', function($scope, $location, EventService) {
      $scope.eventList = EventService.getEvents();

      $scope.signUp = function(){
        console.log('signed up');
      };
    }]);
};


// PAGINATION DOESN'T WORK ON FOUNDATION THINGS
// $scope.pageNumber = 1;
// $scope.itemsPerPage = 10;
//
// $scope.eventList = EventService.getEvents($scope.pageNumber, $scope.itemsPerPage);
//
// $scope.prev = function () {
//     $scope.pageNumber = $scope.pageNumber - 1;
//     $scope.eventList = EventService.getEvents($scope.pageNumber, $scope.itemsPerPage);
// };
// $scope.next = function () {
//     $scope.pageNumber = $scope.pageNumber + 1;
//     $scope.eventList = EventService.getEvents($scope.pageNumber, $scope.itemsPerPage);
// };
