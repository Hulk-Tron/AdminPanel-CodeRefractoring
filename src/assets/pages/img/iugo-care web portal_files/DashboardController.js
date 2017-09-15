/**
 * Created by invision on 27/04/2017.
 */

(function() {
  'use strict';

  angular
    .module('iugoPortal')
    .controller('DashboardController', DashboardController);

  /** @ngInject */

  // CREATE MY ACCCOUNT CONTROLLER  STARTs
  function DashboardController($timeout) {
    var vm = this;

    vm.loginCredientials = [];
    vm.classAnimation = '';
    vm.creationDate = 1493291757636;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }



  }
})();

