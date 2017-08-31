angular.module('airlines-flights')
    .controller('InfoController', function($scope, $routeParams, $resource) {

        $scope.info = {};
        $scope.mensagem = '';

        var recursoAereo = $resource('http://localhost:8080/aereos/:codigo');

        recursoAereo.get({codigo:$routeParams.codigo}, function (aereo) {
            $scope.info = aereo;
            console.log(aereo);
        })
    });