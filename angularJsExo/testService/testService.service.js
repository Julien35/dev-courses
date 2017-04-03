(function() {
  'use strick';

  angular
    .module('testService')
    .service('mainHomeService', mainHomeService);

  function mainHomeService($timeout, $http, $q) {

    // variable name such as vm, which stands for ViewModel
    var vm = this;

    vm.testService = testService;
    vm.config = {
      IsPlaying: false,
      son: 'assets/audio/son.ogg',
      tempo: 4,
    };
    vm._newTempo = vm.config.tempo;

    //Object service retourné dans mainHomeController
    // var service = {
    //   config: config,
    //   tempoValue: tempoValue
    // };
    // return service;

    // console.log("service : ", service);


    //////////////////////

    // functions

    function testService() {
      return "je suis la fonction testService";
    }



  }

})();
