'use strict';

var cssMagic = angular.module('cssMagic', ['ngRoute']);


cssMagic.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      }).
//      when('/start/:id', {
//        templateUrl: 'views/start.html',
//        controller: 'StartCtrl'
//      }).
      when('/start/circle_rotation', {
        templateUrl: 'views/components/circle_rotation.html',
        controller: 'StartCtrl'
      }).
      when('/start/line_runner', {
        templateUrl: 'views/components/line_runner.html',
        controller: 'StartCtrl'
      }).
      when('/start/running_dots', {
        templateUrl: 'views/components/running_dots.html',
        controller: 'StartCtrl'
      }).
      when('/start/helicopter', {
        templateUrl: 'views/components/helicopter.html',
        controller: 'StartCtrl'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'views/main.html'
      });
  }]);


cssMagic.controller('StartCtrl', function($scope, componentsList) {
  $scope.components = componentsList.list();
});

cssMagic.controller('NavCtrl', function($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  }
});


cssMagic.factory('componentsList', function () {
  var data = [
    {
      id: 'circle_rotation',
      name: 'Circle rotation'
    },
    {
      id: 'line_runner',
      name: 'Line runner'
    },
    {
      id: 'running_dots',
      name: 'Running dots'
    },
    {
      id: 'helicopter',
      name: 'Helicopter'
    }
  ];

  return {
    list: function () {
      return data;
    }
  };
});