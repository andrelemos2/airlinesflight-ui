angular.module('airlines-flights').controller('AereoController', function($scope, recursoAereo) {
    
    $scope.aereos = {};
    
    recursoAereo.query(function(aereos) {
        $scope.aereos = aereos;
    }, function(erro) {
        console.log(erro);
    });
});