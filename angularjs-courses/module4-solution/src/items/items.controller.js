(function () {
    'use strict';

    ItemsController.$inject = ['$stateParams', 'menuData'];
    function ItemsController($stateParams, menuData) {
        var items = this;
        items.menu_items = menuData.menu_items;
    }

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController);

})();