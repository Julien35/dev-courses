(function() {
  'use strict';

  angular
    .module('forecastApp')
    .controller('MainController', MainController);

  function MainController(forecastService) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.value = 'ok';
    vm.fiveDay = [];
    vm.getMeteo = getMeteo;

    getMeteo();

    function getMeteo() {
      vm.value = 'hello';
      // console.log(forecastService);
      return forecastService.then(function(data) {
        vm.fiveDay = data;
        // console.log(vm.fiveDay.data);
        vm.fiveDay = vm.fiveDay.data;
        // console.log(vm.fiveDay);
        // return vm.fiveDay.data;
      });

    }

  }

})();
