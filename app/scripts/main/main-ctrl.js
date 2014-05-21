'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];

    $scope.greeting = "Hello, Famo.us";

    $scope.BG_SIZE = [20, 10];

    $scope.widthTransitionable = new Transitionable(1);
    $scope.heightTransitionable = new Transitionable(1);
    $scope.opacityTransitionable = new Transitionable(1);

    //let's define our animation's transition
    var transition = {
      duration: 1000, //ms
      curve: Easing.outBounce
    }

    var opacityTransition = {
      duration: 500, //ms
      curve: 'easeOut'
    }

    var _state = false;

    $scope.clickCenterBox = function(){

      if(!_state){
        //let's make that background box grow
        var xScale = window.innerWidth / $scope.BG_SIZE[0];
        var yScale = window.innerHeight / $scope.BG_SIZE[1];
        $scope.widthTransitionable.set(xScale, transition);
        $scope.heightTransitionable.set(yScale, transition, $scope.kickOffOpacityTransition);
      }else{
        $scope.widthTransitionable.set(1, opacityTransition);
        $scope.heightTransitionable.set(1, opacityTransition);
        $scope.opacityTransitionable.set(1, opacityTransition);
      }
      _state = !_state;
    }

    $scope.kickOffOpacityTransition = function(){
      $scope.greeting = "Famo.us/Angular"
      if(!$scope.$$phase)
        $scope.$apply()
      $scope.opacityTransitionable.set(0, opacityTransition)
    }


  });
