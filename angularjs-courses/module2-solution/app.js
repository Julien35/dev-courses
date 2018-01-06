(function () {
    'use strict';

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.buy = ShoppingListCheckOffService.getBuy();
        console.log('toBuy.buy : ', toBuy.buy);

        toBuy.buyItem = function (itemID) {
            ShoppingListCheckOffService.buyItem(itemID);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.bought = ShoppingListCheckOffService.getBought();
        console.log('alreadyBought.bought : ', alreadyBought.bought);
    }

    function ShoppingListCheckOffService() {
        var vm = this;
        vm.buy = [
            {
                name: "cookies",
                quantity: 10
            }, {
                name: "ron miel",
                quantity: 2
            }, {
                name: "boîte d'olives",
                quantity: 1
            }, {
                name: "pimenton",
                quantity: 2
            }, {
                name: "vin",
                quantity: 4
            }
        ];
        vm.bought = [];

        var service = {
            buyItem: buyItem,
            getBuy: getBuy,
            getBought: getBought

        };
        return service;

        function removeItem(itemIndex) {
            return vm.buy.splice(itemIndex, 1);
        }

        function buyItem(itemIndex) {
            var itemBought = removeItem(itemIndex)[0];
            vm.bought.push(
                {
                    name: itemBought.name,
                    quantity: itemBought.quantity
                }
            );
            console.log('vm.buy :', vm.buy);
            console.log('vm.bought :', vm.bought);
        }

        function getBuy() {
            return vm.buy;
        }

        function getBought() {
            return vm.bought;
        }
    }

    angular
        .module('ShoppingList', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

})();