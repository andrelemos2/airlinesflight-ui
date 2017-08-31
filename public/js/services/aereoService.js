angular.module('airlines-flights')
.factory('AereoService', AereoService)

function AereoService() {
    this.aereo = {}

    this.setAereo = function (aereo) {
        this.aereo = aereo;
    }

    this.getAereo = function () {
        return this.aereo;
    }
}