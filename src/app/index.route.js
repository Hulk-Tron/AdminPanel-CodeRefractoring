(function() {
  'use strict';

  angular
    .module('PMT-AdminPanel')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$authProvider, API) {
    $authProvider.loginUrl = API.auth_url;
    // $authProvider.httpInterceptor = false;
    $authProvider.tokenName = 'access_token';

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/shared/home/home.html',
        controller: 'IndexController',
        controllerAs: 'index'
      });

    $urlRouterProvider.otherwise('/home/universitiesLists');
  }

})();
