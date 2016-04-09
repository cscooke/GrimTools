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

.filter('capitalize', function () {
  return function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
})
