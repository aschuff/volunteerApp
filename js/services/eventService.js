module.exports = function(app) {

    app.factory('EventService', ['$http', function($http) {
        let eventArray = [];

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/events.json'
        }).then(function(response) {
            console.table('events:', response);
            let eventList = response.data
            angular.copy(eventList, eventArray)
        })
        return {
            getEvents: function() {
                return eventArray;
            }
        };
    }]);
};
