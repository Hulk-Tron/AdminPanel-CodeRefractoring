/* recommended */

angular
.module('ManageUniversities.UniversitiesLists')
.controller('UniversitiesListController', UniversitiesListController);

UniversitiesListController.$inject = ['httpFactory'];

function UniversitiesListController(httpFactory) {
    var vm = this
    vm.title = "asdasdasd"
    // CALLING GETALLUNIVERSITES FUNCTION TO GET DATA
    getAllUniversities()
    
    function getAllUniversities() {
    // UNIVERSITES LIST ARRAYA SET TO EMPTY
    vm.universitiesList = [];
    // SHOWING LOADING 
    vm.show_loading = true;
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','institute/institutes')
    .then(function(response) {
    vm.show_loading = false;
    vm.universitiesList = response.data;
    return true 
    });
}
}