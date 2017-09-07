(function() {
  'use strict';

  angular
    .module('coderefractoring')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
