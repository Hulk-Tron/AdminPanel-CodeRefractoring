
//login.route.js

(function() {
    'use strict';  
    angular
      .module('ManageUniversities.UniversitiesLists')
      .config(routerConfig);
      /** @ngInject */
    function routerConfig($stateProvider) {
      $stateProvider
  
        // UNIVERSITIES LIST ROUTE 
      .state('home.universitiesLists', {
              url: '/universitiesLists',
              templateUrl: 'app/modules/ManageUniversities/universitiesList/universitiesList.html',
              controller: 'UniversitiesListController',
              data: {pageTitle: 'Universities', requiredLogin: true},              
              controllerAs: 'uniLists'
        })

        // VIEW UNIVERSITY DETAILS ROUTE 
        .state('home.viewUniversityDetail', {
          url: '/universityDetails/:uni_id',
          templateUrl: 'app/modules/ManageUniversities/universitiesList/universityDetails/universityDetails.html',
          controller: 'UniversitiyDetailsController',
          data: {pageTitle: 'Universitiy Details', requiredLogin: true},              
          controllerAs: 'uniDetails'
    })



        // EDIT UNIVERSITY ROUTE  
        .state('home.editUniversity', {
          url: '/editUniversity/:uni_id',
          templateUrl: 'app/modules/ManageUniversities/universitiesList/editUniversity/editUniversity.html',
          controller: 'editUniversityController',
          data: {pageTitle: 'Edit University', requiredLogin: true},              
          controllerAs: 'editUni'
    })
    }
  
  })();