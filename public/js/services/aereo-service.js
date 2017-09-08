angular.module('aereoService', ['ngResource'])
.factory('recursoAereo', function($resource){
    return $resource('https://airlinesflights-api.herokuapp.com/aereos/:codigo');
});