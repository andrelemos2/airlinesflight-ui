angular.module('airlines-flights').controller('AereoController', function($scope, $rootScope, $resource) {
    
    var recursoAereo = $resource('http://localhost:8080/aereos');
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