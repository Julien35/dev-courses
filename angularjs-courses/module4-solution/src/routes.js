(function () {

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/home.template.html'
            })

            .state('categoriesList', {
                url: '/categories',
                templateUrl: 'src/categories/categories.template.html',
                controller: 'MainCategoriesListController as mainCategories',
                resolve: {
                    categoriesList: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categoriesList.items', {
                url: '/items/{categoryID}',
                templateUrl: 'src/items/items.template.html',
                controller: 'ItemsController as items',
                resolve: {
                    menuData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryID);
                    }]
                }
            });
    }

    angular
        .module('MenuApp')
        .config(RoutesConfig);

})();
