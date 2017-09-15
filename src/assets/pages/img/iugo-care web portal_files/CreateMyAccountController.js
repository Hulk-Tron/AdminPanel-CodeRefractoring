/**
 * Created by invision on 27/04/2017.
 */
(function() {
  'use strict';

  angular
    .module('iugoPortal')
    .controller('CreateMyAccountController', CreateMyAccountController);

  /** @ngInject */

                   // CREATE MY ACCCOUNT CONTROLLER  START
  function CreateMyAccountController($timeout) {
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
