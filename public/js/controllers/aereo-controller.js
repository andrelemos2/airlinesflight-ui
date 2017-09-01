angular.module('airlines-flights').controller('AereoController', function($scope, $rootScope, $resource) {
    
    var recursoAereo = $resource('https://airlinesflights-api.herokuapp.com/aereos');
    $scope.aereos = {};
    $rootScope.info = {
        aereos: {}
    }
    
    recursoAereo.query(function(aereos) {
        $scope.aereos = aereos;
        $rootScope.info.aereos = aereos;
    }, function(erro) {
        console.log(erro);
    });
});