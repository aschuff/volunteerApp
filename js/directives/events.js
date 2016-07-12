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
