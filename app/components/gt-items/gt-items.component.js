angular.module('grimTools.items', [
  'ngRoute'
])

.config([
  '$routeProvider',

  function ($routeProvider) {
    $routeProvider.when('/items/:slot', {
      template: '<gt-items></gt-items>'
    });
  }
])

.factory('gtItems', [
  '$resource',

  function ($resource) {
    var items = {
      'rare': $resource('/data/rare.json').get(),
      'epic': $resource('/data/epic.json').get(),
      'legendary': $resource('/data/legendary.json').get()
    };

    return {
      getQualities: function () {
        return Object.keys(items);
      },
      getItems: function (quality, slot) {
        return items[quality][slot];
      }
    };
  }
])

.component('gtItems', {
  templateUrl: '/components/gt-items/gt-items.partial.html',
  controller: [
    '$routeParams',
    '$location',
    'gtItems',
    'gtInventory',

    function ($routeParams, $location, gtItems, gtInventory) {
      var ctrl = this;

      ctrl.slot   = $routeParams.slot;
      ctrl.items  = gtItems;

      ctrl.equip = function (item) {
        gtInventory.equip(ctrl.slot, item);

        $location.path('/inventory');
      };
    }
  ]
})
