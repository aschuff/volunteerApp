module.exports = function(app) {
    app.controller('UserController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
      $scope.currentUser = UserService.getUsers();
      $scope.username = UserService.getUsername();

      $scope.name = '';
      $scope.password = '';
      
      $scope.login = function(){
        console.log(`${$scope.name} is logged in `);
        UserService.newUser($scope.name, $scope.password);
        $location.path('/myevents');
      }
    }]);
};
