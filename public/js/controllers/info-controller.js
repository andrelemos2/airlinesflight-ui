angular.module('airlines-flights')
    .controller('InfoController', function($scope, $routeParams, recursoAereo) {

        $scope.info = {};
        $scope.mensagem = '';

        recursoAereo.get({codigo:$routeParams.codigo}, function (aereo) {
            $scope.info = aereo;
            console.log(aereo);
        })
    });