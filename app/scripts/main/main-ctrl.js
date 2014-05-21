'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];

    $scope.greeting = "Hello, Famo.us";

    $scope.widthTransitionable = new Transitionable(20);
    $scope.heightTransitionable = new Transitionable(20);

    $scope.clickCenterBox = function(){
      //let's make that background box grow
    }


  });
