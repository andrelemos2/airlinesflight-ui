angular.module('airlines-flights').controller('AereoController', function($scope, $resource) {
    
    var recursoAereo = $resource('http://localhost:8080/aereos');
    $scope.aereos = [];
    
    recursoAereo.query(function(aereos) {
        $scope.aereos = aereos;
    }, function(erro) {
        console.log(erro);
    });
});