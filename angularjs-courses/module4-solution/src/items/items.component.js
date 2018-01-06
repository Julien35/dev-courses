(function () {
    'use strict';

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'src/items/items.template.html',
            bindings: {
                items: '<'
            }
        });

})();