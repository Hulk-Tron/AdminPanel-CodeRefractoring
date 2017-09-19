/* recommended */

angular
.module('Authentication.login')
.controller('LoginController', LoginController);

LoginController.$inject = ['authFactory','$state'];

function LoginController(authFactory,$state) {
    var vm = this
    vm.loginAdmin = loginAdmin
    function loginAdmin(adminCredentials) {
        return authFactory.getAuth(adminCredentials)
        .then(function(data) {
            vm.loginSucessFull = data;
            $state.go('home.universitiesLists')
            return vm.loginSucessFull;
        });

}

// function getAvengers() {

// }
}