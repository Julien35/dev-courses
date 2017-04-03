(function() {
  'use strict';

  angular
    .module('forecastApp')
    .controller('MainController', MainController);

  // variable name such as vm, which stands for ViewModel
  // var vm = this;
  // vm.MainController = MainController;

  function MainController($scope, forecast) {
    var vm = this;
    forecast.success(function(data) {
      $scope.fiveDay = data;
    });
  }

})();
