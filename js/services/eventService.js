module.exports = function(app) {

    app.factory('EventService', ['$http', function($http) {
        let eventArray = [];

        $http({
            method: 'GET',
            url: 'http://localhost:7000/api/events'
        }).then(function(response) {
            console.log('events:', response);
            let eventList = response.data
            angular.copy(eventList, eventArray)
        })
        return {
            getEvents: function() {
                return eventArray
            }
        };
    }]);
};

// PAGINATION DOESN'T WORK
// getEvents: function(pageNum, perPage) {
//   let start = (pageNum - 1) * perPage;
//     return eventArray.slice(start, start + perPage);
// }
