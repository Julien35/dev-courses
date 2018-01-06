(function () {
    "use strict";

    angular.module('common', [])
    // .constant('ApiPath', 'https://davids-restaurant.herokuapp.com')
        .constant('ApiPath', 'http://www.davidchuschinabistro.com')
        .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
