angular.module('aereoDiretivas', [])
.directive('minhaTabela', function() {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    };

    ddo.templateUrl = 'js/directives/aereo-painel.html';

    return ddo;
});