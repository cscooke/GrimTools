angular.module('grimTools.home', [
  'ngRoute'
])

.config([
  '$routeProvider',

  function ($routeProvider) {
    $routeProvider.when('/', {
      template: '<grim-home></grim-home>'
    });
  }
])

.component('grimHome', {
  templateUrl: '/components/grim-home/index.partial.html',
  controller: function () {
    //
  }
})
