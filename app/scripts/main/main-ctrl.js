'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];

    $scope.greeting = "Hello, Famo.us";



    $scope.clickCenterBox = function(){
      alert('ouch')
    }


  });
