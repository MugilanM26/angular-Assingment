(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    var ctrl = this;
    ctrl.lunchItems = '';
    ctrl.message = '';

    ctrl.checkLunch = function () {
      var items = ctrl.lunchItems.split(',').filter(item => item.trim() !== '');
      if (items.length === 0) {
        ctrl.message = 'Please enter data first';
      } else if (items.length <= 3) {
        ctrl.message = 'Enjoy!';
      } else {
        ctrl.message = 'Too much!';
      }
    };
  }

})();
