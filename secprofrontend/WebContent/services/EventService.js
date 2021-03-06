(function() {
'use strict';

    angular
        .module('MainApp')
        .factory('EventService', EventService);

    EventService.$inject = ['$http', '$q', '$rootScope'];
    function EventService($http, $q, $rootScope) {
        var BASE_URL = 'http://localhost:10080/secprobackend/event/';
        var service = {};

        service.getAllEvents = getAllEvents;
        service.getEvent = getEvent;
        service.createEvent = createEvent;
        service.updateEvent = updateEvent;

        function getAllEvents() {
            return $http.get(BASE_URL).then(
                function(response) {
                    return response.data;
                },
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        }

        function getEvent(id) {
            return $http.get(BASE_URL + id).then(
                function(response) {
                	$rootScope.selectedEvent = response.data;
                    return response.data;
                },
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        }

        function createEvent(Event) {
            return $http.post(BASE_URL, Event).then(
                getAllEvents,
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        }

        function updateEvent(Event) {
            return $http.put(BASE_URL + Event.eventId, Event).then(
                getAllEvents,
                function(errResponse) {
                    return $q.reject(errResponse);
                }
            );
        }
        
        return service;
    }
})();