(function() {
  'use strict';

  angular
    .module('iugoPortal')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {


    $stateProvider

                                  // LOGIN PAGE  CONTROLLER

  .state('login', {
      url: '/login',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })


                                  // SIGNUP PAGE PAGE ROUTE
  .state('signUp', {
      url: '/signUp',
      templateUrl: 'app/components/signup/signup.html',
      controller: 'SignUpController',
      controllerAs: 'signup'
    })




                                // CREATE MY ACCOUNT PAGE ROUTE
  .state('create-my-account', {
      url: '/createMyAccount',
      templateUrl: 'app/components/create-my-account/create-my-account.html',
      controller: 'CreateMyAccountController',
      controllerAs: 'createAccount'
    })





                                  // LOGIN VERIFICATION PAGE ROUTE
  .state('login-verification', {
      url: '/loginVerification',
      templateUrl: 'app/components/login_verfication/login_verification.html',
      controller: 'LoginVerificationController',
      controllerAs: 'loginverify'
    })


                                        // PARENT LAYOUT
  .state('app', {
      url: '/app',
      abstract: true,
      views : {
        '' : {
          templateUrl : 'app/components/layouts/side_menu/side_menu.html'
        }
      }
    })

  .state('app.dashboard', {
      url: '/dashboard',
         // templateUrl : 'app/components/dashboard/dashboard.html',
         //    controller : 'DashboardController'
      views : {
        '' : {
          templateUrl : 'app/components/dashboard/dashboard.html',
          controller : 'DashboardController'
          }
        ,'search_view' : {
          templateUrl : 'app/components/layouts/search_panel/search_panel.html',
          // controller : 'DashboardController'
        }

      }
  })







    $urlRouterProvider.otherwise('/login');
  }

})();
