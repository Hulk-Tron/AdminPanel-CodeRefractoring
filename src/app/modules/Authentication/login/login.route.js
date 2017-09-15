
//login.route.js

(function() {
    'use strict';  
    angular
      .module('Authentication.login')
      .config(routerConfig);
      /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/modules/Authentication/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        });
  
      $urlRouterProvider.otherwise('/');
    }
  
  })();