(function() {
  'use strict';

  angular
    .module('getterSetterExample')
    .controller('RangeNumberController', RangeNumberController);

  function RangeNumberController() {
    var vm = this;

    vm.newRangeNumber = newRangeNumber;
    vm._rangeNumber = 5;
    vm.user = {
      newRangeNumber: newRangeNumber
    };

    //////////////////////

    function newRangeNumber(newRangeNumber) {
      // console.log("newRangeNumber : ", newRangeNumber, " vm._rangeNumber  :",
      //   vm._rangeNumber);
      // console.log("typeof(newRangeNumber) : ", typeof(newRangeNumber),
      //   " typeof(vm._rangeNumber)  :", typeof(vm._rangeNumber));

      if (typeof(newRangeNumber === 'string')) {
        newRangeNumber = parseInt(newRangeNumber, 10);
      }
      // Note that newName can be undefined for two reasons:
      // 1. Because it is called as a getter and thus called with no arguments
      // 2. Because the property should actually be set to undefined.
      // This happens e.g. if the input is invalid
      return arguments.length ? (vm._rangeNumber = newRangeNumber) : vm._rangeNumber;
    }

  }
})();
