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

app.directive('signupbutton', function () {
    return {
        restrict: 'E',
        templateUrl: '<button ng-click="signUp()">Volunteer</button>',
        // replace: true,
    };
});
}
