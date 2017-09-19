/* recommended */

// httpFactory factory
(function ()
{
    'use strict';

angular
.module('PMT-AdminPanel')
.factory('httpFactory',httpFactory);

httpFactory.$inject = ['$http','API'];

function httpFactory($http,API) {
return {
    call: call
};

function call(httpMethod,requestResource,body) {
    return $http[httpMethod](API.base_url+requestResource,body)
        .then(callComplete)
        .catch(callFailed);

    function callComplete(response) {
        return response;
    }

    function callFailed(error) {
        // logger.error('XHR Failed for call.' + error.data);
    }
}
}
})();