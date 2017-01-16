(function() {
  'use strict';

  angular
    .module('vmthis')
    .controller('MainController', MainController);

  // vm = this, see john papa Y034
  function MainController(forecastService) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.value = 'ok';
    vm.meteo = [];
    vm.getMeteo = getMeteo;

    getMeteo();

    function getMeteo() {
      vm.value = 'hello';
      console.log(forecastService);
      return forecastService.then(function(data) {
        vm.meteo = data;
        // return vm.meteo;
      });
    }

  }

  // Utile si fonction dans le service
  // MainController.$inject = [];

})();


// function MainController($scope, forecast) {
//   forecast.success(function(data) {
//     $scope.fiveDay = data;
//   });
// }
