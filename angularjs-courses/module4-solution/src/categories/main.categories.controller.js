(function () {
    'use strict';

    MainCategoriesListController.$inject = ['MenuDataService', 'categoriesList'];
    function MainCategoriesListController(MenuDataService, categoriesList) {
        var mainList = this;
        mainList.categoriesList = categoriesList;
    }

    angular
        .module('MenuApp')
        .controller('MainCategoriesListController', MainCategoriesListController);

})();