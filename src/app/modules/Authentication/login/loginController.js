/* recommended */

angular
.module('Authentication.login')
.controller('LoginController', LoginController);

LoginController.$inject = ['authFactory'];

function LoginController(authFactory) {
    var vm = this
    vm.loginAdmin = loginAdmin
    function loginAdmin(adminCredentials) {
    alert()
        return authFactory.getAuth(adminCredentials)
        .then(function(data) {
            vm.avengers = data;
            return vm.avengers;
        });
    // return getAvengers().then(function() {
    //     logger.info('Activated Avengers View');
    // });
}

// function getAvengers() {

// }
}