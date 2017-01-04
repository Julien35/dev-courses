'use strict';

/**
 * @ngdoc overview
 * @name coursExoApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstAppApp', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  });
