angular.module('airlines-flights', ['aereoDiretivas', 'ngRoute', 'ngResource', 'aereoService'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/aereos', {
            templateUrl: 'partials/principal.html',
            controller: 'AereoController'
        });

        $routeProvider.when('/aereos/info/:codigo', {
            templateUrl: 'partials/info.html',
            controller: 'InfoController'
        });

        $routeProvider.otherwise({redirectTo: '/aereos'});

    });