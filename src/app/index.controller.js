(function ()
{
    'use strict';

    angular
        .module('PMT-AdminPanel')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController($rootScope,$auth,$state)
    {
        var vm = this;
        vm.AdminLogout = AdminLogout
        // INTIATING USER IS AUTHENTICATED 
        $rootScope.settings = {
            layout : {}
        }
        $rootScope.settings.layout.pageContentWhite = false;
        $rootScope.settings.layout.pageBodySolid = true;
        $rootScope.settings.layout.pageSidebarClosed = false;
        $rootScope.settings.layout.full_width = false;
        $rootScope.settings.is_authenticated = true;

        // ADMIN LOGOUT FUNCTION 
        function AdminLogout(){
            $auth.logout()
            $state.go('login')
        }
           
    }
})();