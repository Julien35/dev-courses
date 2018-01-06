(function () {
    'use strict';

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory
        };

        return service;

        function getAllCategories() {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                // process result and only keep categories
                return result.data;
            });
            return response;
        }

        function getItemsForCategory(categoryShortName) {

            var response = $http({
                method: "GET",
                url: ApiBasePath + '/menu_items.json',
                params: {
                    category: categoryShortName
                }
            }).then(function (result) {
                // process result and only keep items
                return result.data;
            });
            return response;
        }
    }

    angular
        .module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

})();