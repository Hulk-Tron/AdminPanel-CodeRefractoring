
//authenticationFactory.js

// AUTH FACTORY 
angular
.module('Authentication.login')
.factory('authFactory', authFactory);

authFactory.$inject = ['$auth','$http'];

// AUTH FACTORY START 
function authFactory($auth) {

    return {
        getAuth: getAuth
    };

                // AUTH SUCESSFULL 
    function getAuth(adminCredentials) {
        // AUTHENTICATION DATA OBJECT 
        var authenticationDataObject = {
            username: adminCredentials.username,
            password: adminCredentials.password,
            grant_type: "password",
            InstituteID: 0,
            type: "Admin"
        };

        return $auth.login(authenticationDataObject)
        .then(authSuccessfull)
        .catch(authFailed);

                // AUTH SUCCESFULL 
        function authSuccessfull(response) {
        return response.data.results;
        }

                // AUTH FAILED 
    function authFailed(error) {

    }}
}
// AUTH FACTORY END 