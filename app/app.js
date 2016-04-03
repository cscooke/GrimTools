angular.module('grimTools', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngRoute',
  'grimTools.home'
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
