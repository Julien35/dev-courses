(function () {
    "use strict";

    angular
        .module('public')
        .controller('SignUpController', SignUpController);


    SignUpController.$inject = ['ApiPath', 'MenuService', 'UserSettingService'];
    function SignUpController(ApiPath, MenuService, UserSettingService) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        $ctrl.user = {};

        // for test
        $ctrl.user = {
            firstname: "julien",
            lastname: "B",
            email: "mail@mail.com",
            phone: "1245678",
            menuNumber: "L"
        };
        UserSettingService.saveData($ctrl.user);

        $ctrl.completed = false;

        $ctrl.submit = submit;
        $ctrl.getMenuItems = getMenuItems;


        function submit() {
            console.log($ctrl.user);
            getMenuItems($ctrl.user.menuNumber);
        }

        function getMenuItems(category) {

            var promise = MenuService.getMenuItems(category);
            promise
                .then(function successCallback(response) {
                    console.log("response : ", response);
                    $ctrl.menuItems = response;

                    if (!response.category) {
                        $ctrl.isMenuItems = false;
                    } else {
                        $ctrl.isMenuItems = true;
                        // save data
                        UserSettingService.saveData($ctrl.user);
                    }
                    $ctrl.completed = true;
                })
                .catch(function errorCallback(response) {
                    console.log("Something went terribly wrong. ", response);
                });
        }
    }

})();