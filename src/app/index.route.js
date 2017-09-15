(function() {
  'use strict';

  angular
    .module('PMT-AdminPanel')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$authProvider, API) {
    $authProvider.loginUrl = API.auth_url;
    $authProvider.tokenName = 'access_token';

    // $stateProvider
    //   // .state('home', {
    //   //   url: '/',
    //   //   templateUrl: 'app/main/main.html',
    //   //   controller: 'MainController',
    //   //   controllerAs: 'main'
    //   // });

    // $urlRouterProvider.otherwise('/login');
  }

})();
