(function() {
  'use strict';

  angular
    .module('iugoPortal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
