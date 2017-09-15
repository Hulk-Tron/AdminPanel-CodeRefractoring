(function() {
  'use strict';

  angular
    .module('PMT-AdminPanel')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$auth,$state) {
    $rootScope.$state = $state; // state to be accessed from view
    /**
     * This checks if the state is authenticated.
     * if yes then redirect it to the dashboard.
     * otherwise redirect back to login page.
     */
    $rootScope.$on('$stateChangeStart',
        function (event, toState) {
            var requiredLogin = false;
            // check if this state need login
            if (toState.data && toState.data.requiredLogin)
                requiredLogin = true;
            // if yes and if this user is not logged in, redirect him to login page
            if (requiredLogin && !$auth.isAuthenticated()) {
                event.preventDefault();
                $state.go('login');
            } else if (!requiredLogin && $auth.isAuthenticated()) {
              alert()
                if (toState.name == "login") {
                    event.preventDefault();
                    $state.go('list-university');
                }
            }
        });

  }
})();
