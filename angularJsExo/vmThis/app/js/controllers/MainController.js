(function() {
  'use strict';

  angular
    .module('vmthis')
    .controller('MainController', MainController);

  // vm = this, see john papa Y034

  function MainController(forecast) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.value = 'ok';
    vm.meteo = [];
    vm.getMeteo = getMeteo;

    getMeteo();

    function getMeteo() {
      vm.value = 'hello';
    }

  }

  // Pas compris à quoi ca sert :)
  // MainController.$inject = [];

})();


// function MainController($scope, forecast) {
//   forecast.success(function(data) {
//     $scope.fiveDay = data;
//   });
// }
