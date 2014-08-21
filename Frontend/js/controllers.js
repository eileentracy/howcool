'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'TemperatureService', function($scope, TemperatureService) {
    TemperatureService.getTemps()
        .then(
            function( data ) {
                console.log(data)
            }
        )
    ;
  }]);
