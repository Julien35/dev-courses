(function () {
    "use strict";

    angular.module('common')
        .service('UserSettingService', UserSettingService);


    UserSettingService.$inject = ['$window'];
    function UserSettingService($window) {
        var service = {
            getData: getData,
            saveData: saveData
        };

        return service;


        function getData() {
            return JSON.parse($window.sessionStorage.getItem('user'));
        }

        function saveData(data) {
            $window.sessionStorage.setItem('user', JSON.stringify(data));
        }

    }


})();
