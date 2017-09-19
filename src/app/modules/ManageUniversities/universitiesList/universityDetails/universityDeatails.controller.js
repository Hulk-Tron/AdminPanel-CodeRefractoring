/* recommended */

angular
.module('ManageUniversities.UniversitiesLists')
.controller('UniversitiyDetailsController', UniversitiyDetailsController);

UniversitiyDetailsController.$inject = ['httpFactory','$stateParams'];

function UniversitiyDetailsController(httpFactory,$stateParams) {
    var vm = this
    // SETTING UNIVERSITY ID 
    var university_id = $stateParams.uni_id

    // CALLING FUNCTIONS 
    getUniversityDetail()
    getUniversityPaymentDetails()
    getInstCountryPayMethods()
    // CALLING FUNCTIONS 

    // GET UNIVERSITY DETAILS 
    function getUniversityDetail() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','Institute/'+university_id)
    .then(function(response) {
    vm.instituteDetails = response.data;
    return true 
    });}




    // GET UNIVERSITY PAYMENT METHODS  
    function getUniversityPaymentDetails() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','InstitutePaymentMethods/'+university_id)
    .then(function(response) {
    vm.institutePayMethods = response.data;
    return true 
    });
}




     // GET UNIVERSITY PAYMENT METHODS  
     function getInstCountryPayMethods() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','GetInstitutePaymentMethods?instituteid='+university_id)
    .then(function(response) {
    vm.institutePayMethods = response.data;
    return true 
    });
    }






}