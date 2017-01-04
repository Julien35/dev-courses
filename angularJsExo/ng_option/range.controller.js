(function() {
  'use strict';

  angular
    .module('getterSetterExample')
    .controller('RangeController', RangeController);

  function RangeController() {
    var vm = this;

    vm.newRange = newRange;
    vm._range = '5';
    vm.user = {
      newRange: newRange
    };

    //////////////////////

    function newRange(newRange) {
      // console.log("newRange : ", newRange, " vm._range  :", vm._range);
      // console.log("typeof(newRange) : ", typeof(newRange),
      //   " typeof(vm._range)  :", typeof(vm._range));
      // Note that newName can be undefined for two reasons:
      // 1. Because it is called as a getter and thus called with no arguments
      // 2. Because the property should actually be set to undefined.
      // This happens e.g. if the input is invalid
      return arguments.length ? (vm._range = newRange) : vm._range;
    }

  }
})();
