(function () {
    "use strict";

    angular
        .module('public')
        .controller('MyInfoController', MyInfoController);


    MyInfoController.$inject = ['MenuService', 'info'];
    function MyInfoController(MenuService, info) {
        var $ctrl = this;

        if (info) {
            $ctrl.userInfo = info;
            MenuService.getMenuItems(info.menuNumber)
                .then(function (response) {
                    $ctrl.menuItems = response;
                })
                .catch(function (response) {
                    console.log(response);
                });
        }


    }

})();