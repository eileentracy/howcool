'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'TemperatureService', function($scope, TemperatureService) {
    $scope.TemperatureService.getTemps()
        .then(
            function( data ) {
                console.log(data)
            }
        )
    ;
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
