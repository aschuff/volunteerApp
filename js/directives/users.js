module.exports = function(app) {
app.directive('userperson', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/users.html',
        scope: {
            userpersonname: '=info',
        },
        // replace: true,
    };
});
}
