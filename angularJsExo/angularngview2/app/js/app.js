angular.module('routerApp', ['ui.router'])
  .config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          views: {
            '': {
              templateUrl: './views/main.html'
            },
            'nav@home': {
              templateUrl: './views/assets/nav.html'
            },
            'body@home': {
              templateUrl: './views/body.html'
            },
            'footer@home': {
              templateUrl: './views/assets/footer.html'
            }
          }
        });
    }
  ]);
