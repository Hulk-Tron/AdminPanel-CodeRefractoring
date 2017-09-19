(function() {
  'use strict';
  angular
    .module('PMT-AdminPanel',
     [

      //  AUTHENTICATION MODULE 
       'Authentication',
       
      //  MANAGE UNIVERSITIES 
       'ManageUniversities',

       'satellizer',
       
       'ngAnimate',
       
       'ngCookies',
       
       'ngTouch',
       
       'ngSanitize',

       'ui-notification',
       
       'ngMessages',
       
       'ngAria', 
       
       'restangular',

        'ui.router',
       
       'ui.bootstrap',
       
       'toastr',

       "ui.bootstrap.modal",

      //  "oc.lazyLoad",

       "ngSanitize",

       'LocalStorageModule',

       'ui.select',

      //  'ui.tinymce',

      //  'ngTagsInput',

      //  'datatables',
      //  ,

      //  'datatables.bootstrap'


      //  'ceibo.components.table.export',

      //  'angularModalService',

       'angularUtils.directives.dirPagination'

      //  'xeditable',

      //  "checklist-model",

      //  'smart-table',

      //  'ng-sweet-alert',

      //  'textAngular',

      //  'validation.match'
       
      ]);
})();
