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
