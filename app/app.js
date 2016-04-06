angular.module('grimTools', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngRoute',
  'grimTools.inventory',
  'grimTools.items'
])

.config([
  '$routeProvider',
  '$locationProvider',

  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }
])
