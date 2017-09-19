//httpInterceptorService.js

(function ()
{
    'use strict';

    angular
        .module('PMT-AdminPanel')
        .service('httpRequestInterceptor', httpRequestInterceptor);
        httpRequestInterceptor.$inject = ['$q', '$location','$injector'];
        
    /** @ngInject */
    function httpRequestInterceptor($q, $location, $injector) {
        return {

            'responseError': function (rejection) {
                if (rejection.status === 411 || rejection.status === 500 || rejection.status === 404 || rejection.status === 422) {
                    if (typeof rejection.data.error_description !== "undefined") {
                        alert()
                        $injector.get('Notification').error(rejection.data.error_description);
                    } else if (typeof rejection.data.message !== "undefined") {
                        $injector.get('Notification').error(rejection.data.message);
                    }
                    else {
                        $injector.get('Notification').error("Unexpected Error Occured");
                    }
                }
                else if (rejection.status === -1) {
                    $injector.get('Notification').error('No Internet Connection.');
                }
                else if (rejection.status == 401 && rejection.statusText == "Unauthorized") {
                    $injector.get("localStorageService").clearAll();
                    $injector.get("$auth").logout();
                    $injector.get("$state").go('login');
                    $injector.get('Notification').error("Session Expired, Please Login Again");
                }
                return $q.reject(rejection);
            }
        };
    };
})();