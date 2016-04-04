angular.module('grimTools.inventory', [
  'ngRoute'
])

.config([
  '$routeProvider',

  function ($routeProvider) {
    $routeProvider.when('/', {
      template: '<gt-inventory></gt-inventory>'
    });
  }
])

.component('gtInventory', {
  templateUrl: '/components/gt-inventory/gt-inventory.partial.html',
  controller: function () {
    //
  }
})
