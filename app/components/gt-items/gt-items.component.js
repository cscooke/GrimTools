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
  //,

  function () {
    // TODO: read from file
    var items = {
      'rare': {
        'helm': [
          {name: 'Milton\'s Casque'}
        ]
      },
      'epic': {
        'helm': [
          {name: 'Faceguard of Perdition'}
        ]
      },
      'legendary': {
        'helm': [
          {name: 'Maw of Despair'}
        ]
      }
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
