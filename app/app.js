angular.module('grimTools', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngRoute',
  'grimTools.inventory'
])

.config([
  '$routeProvider',
  '$locationProvider',

  function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }
])
