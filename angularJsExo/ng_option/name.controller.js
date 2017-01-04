(function() {
  'use strict';

  angular
    .module('getterSetterExample')
    .controller('NameController', NameController);

  function NameController() {
    var vm = this;

    vm.name = name;
    vm._name = 'Brian';
    vm.user = {
      name: name
    };

    //////////////////////

    function name(newName) {
      // console.log("newName : ", newName, " vm._name  :", vm._name);
      // Note that newName can be undefined for two reasons:
      // 1. Because it is called as a getter and thus called with no arguments
      // 2. Because the property should actually be set to undefined.
      // This happens e.g. if the input is invalid
      return arguments.length ? (vm._name = newName) : vm._name;
    }

  }
})();
