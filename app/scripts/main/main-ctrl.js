'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function($scope, $famous){
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var _size = new Transitionable([100, 100]);
    var _translate = new Transitionable([0, 0, 1]);

    $scope.getSize = function(){
      return _size.get();
    };

    $scope.getTranslate = function(){
      return _translate.get();
    };

    $scope.boundContent = "trivial data binding";


    //Now actually kick off the animations

    //Famo.us Transitionables are 'tween' objects, pretty much simple variables that
    //support `get`ing and `set`ing numeric values, with the ability to interpolate `set`
    //values over time with an optional transition
    _size.set([300, 300], {duration: 2000, curve: 'easeOut'});
    _translate.set([200, 200, 1], {duration: 2000, curve: 'easeOut'});
  });

