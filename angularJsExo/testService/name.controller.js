(function() {
  'use strict';

  angular
    .module('testService')
    .controller('NameController', NameController);

  function NameController(mainHomeService) {
    var vm = this;

    vm.name = name;
    vm._name = 'Brian';

    console.log(mainHomeService);
    console.log(mainHomeService.config);
    console.log(mainHomeService.config.IsPlaying);

    //////////////////////

    function name(newName) {
      return arguments.length ? (vm._name = newName) : vm._name;
    }

  }
})();
