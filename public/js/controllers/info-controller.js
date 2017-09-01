angular.module('airlines-flights')
    .controller('InfoController', function($scope, $routeParams, $resource) {

        $scope.info = {};
        $scope.mensagem = '';

        var recursoAereo = $resource('https://airlinesflights-api.herokuapp.com/aereos/:codigo');

        recursoAereo.get({codigo:$routeParams.codigo}, function (aereo) {
            $scope.info = aereo;
            console.log(aereo);
        })
    });