angular.module('airlines-flights', ['aereoDiretivas', 'ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/aereos', {
            templateUrl: 'partials/principal.html',
            controller: 'AereoController'
        });

        // $routeProvider.when('/aereos/info', {
        //     templateUrl: '<html><body><h1>Andre</h1></body></html>',
        //     controller: 'AereoController'
        // });

        $routeProvider.otherwise({redirectTo: '/aereos'});

    });