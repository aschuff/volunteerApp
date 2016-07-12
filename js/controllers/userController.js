module.exports = function(app) {
    app.controller('UserController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
      $scope.currentUser = UserService.getUsers();
      // $scope.login = function(){
      //   console.log('logged in');
      //
      // };

    }]);
};
