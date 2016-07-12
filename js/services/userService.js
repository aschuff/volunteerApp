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
