(function() {
  'use strict';

  angular
    .module('getterSetterExample')
    .controller('NumberController', NumberController);

  function NumberController() {
    var vm = this;

    vm.newNumber = newNumber;
    vm._number = 3;
    vm.user = {
      newNumber: newNumber
    };

    //////////////////////

    function newNumber(newNumber) {
      // console.log("newNumber : ", newNumber, " vm._number  :", vm._number);
      // console.log("typeof(newNumber) : ", typeof(newNumber),
      //   " typeof(vm._number)  :", typeof(vm._number));
      // Note that newName can be undefined for two reasons:
      // 1. Because it is called as a getter and thus called with no arguments
      // 2. Because the property should actually be set to undefined.
      // This happens e.g. if the input is invalid
      return arguments.length ? (vm._number = newNumber) : vm._number;
    }

  }
})();
