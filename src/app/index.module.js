(function() {
  'use strict';
  angular
    .module('PMT-AdminPanel',
     [

      //  AUTHENTICATION MODULE 
       'Authentication',

       'satellizer',
       
       'ngAnimate',
       
       'ngCookies',
       
       'ngTouch',
       
       'ngSanitize',
       
       'ngMessages',
       
       'ngAria', 
       
       'restangular',

        'ui.router',
       
       'ui.bootstrap',
       
       'toastr'
      
      ]);
})();
