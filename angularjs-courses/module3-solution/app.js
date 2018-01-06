(function () {
    'use strict';

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;
        console.log("list directive", list);
    }


    //  eaching out to the server (../menu_items.json) to retrieve the list of all the menu items
    // return promise list of items
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = {
            getMatchedMenuItems: getMatchedMenuItems,
            removeItem: removeItem
        };
        return service;

        function removeItem(itemIndex, itemsList) {
            itemsList.splice(itemIndex, 1);

        }

        function getMatchedMenuItems(searchTerm) {

            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                // process result and only keep items that match
                var itemsList = result.data.menu_items;
                var items = [];

                itemsList.forEach(function (item, index) {
                    // console.log(item);
                    if (item.description.match(searchTerm)) {
                        items.push(item);
                    }
                });

                // return processed items
                return items;
            });
            return response;
        }

    }

    // wrap your search textbox and button as well as the list of found items.
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.getMatchedMenuItems = getMatchedMenuItems;
        narrowItDown.removeItem = removeItem;

        function removeItem(itemIndex) {
            MenuSearchService.removeItem(itemIndex, narrowItDown.found);
        }

        function getMatchedMenuItems(searchTerm) {
            console.log('NarrowItDownController.getMatchedMenuItems(' + searchTerm +
                ')');

            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            promise
                .then(function successCallback(response) {
                    console.log("response : ", response);
                    narrowItDown.found = response;
                })
                .catch(function errorCallback(response) {
                    console.log("Something went terribly wrong. ", response);
                });
        }
    }


    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
})();
