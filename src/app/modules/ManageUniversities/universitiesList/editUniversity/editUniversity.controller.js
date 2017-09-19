/* editUniversity.controller.js */

angular
.module('ManageUniversities.UniversitiesLists')
.controller('editUniversityController', editUniversityController);

editUniversityController.$inject = ['httpFactory','$stateParams'];

function editUniversityController(httpFactory,$stateParams) {
    
    var vm = this
    
    // SETTING UNIVERSITY ID 
    var university_id = $stateParams.uni_id





    // CALLING FUNCTIONS 
    getUniversityDetail()
    getCurrenciesList()
    getAllCountryList()
    getAllCountryList()
    // CALLING FUNCTIONS 








    // GET UNIVERSITY DETAILS 
    function getUniversityDetail() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','Institute/'+university_id)
    .then(function(response) {
    vm.instituteDetails = response.data;
    return vm.instituteDetails  
    });}        








    // GET LIST OF CURRENCY  
    function getCurrenciesList() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','currency/currencies')
    .then(function(response) {
    vm.currencies = response.data;
    return vm.currencies
    });}





    // GET LIST OF ALL LIST OF COUNTRIES  
    function getAllCountryList() {
        vm.show_loading = true;
        // CALLING THE HTTP FACTORY FOR GETTING DATA 
        return httpFactory.call('get','Country')
        .then(function(response) {
        vm.countries = response.data;
        return true 
        });}








   // GET LIST OF STATES OF A COUNTRY 
   function getStates($item) {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','State?id='+$item.id)
    .then(function(response) {
    vm.states_ = response.data;
    return true 
    });}








    // GET LIST OF CITIES BY A STATE  
   function getCities($item) {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','City?id=' + $item.id)
    .then(function(response) {
    vm.cities = response.data;
    return true 
    });}


    // CREATE UNIVERSITY  
   function createUniversity(universityData) {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('post','institute/update?id=' + universityData.ID,universityData)
    .then(function() {
    Notification.success("Institute Updated Successfully");        
    return true 
    });}







     // GET ALL PAYMENT METHODS 
    function getAllPaymentMethods() {
           vm.showLoader = true
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get','paymentmethod/paymentmethods')
    .then(function(response) {
        vm.showLoader = false        
        vm.AllPaymentMethods = response
    return true 
    });}
    


            // GET ALL PAYMENT METHODS 
        vm.addNewPaymentMethod = function () {
       vm.showLoader = true
        // CALLING THE HTTP FACTORY FOR GETTING DATA 
        return httpFactory.call('get','paymentmethod/paymentmethods')
        .then(function(response) {
            getInsertedCountries()
            vm.showLoader = false        
            vm.AllPaymentMethods = response
        return true 
        });}








        // POST SELECTED PAYMENT METHODS
        vm.sendSelectedPaymentMethods = function() {
        var selectedPaymentMethodsArray = []
        vm.showLoader = true
        for (var a = 0; a < vm.new.length; a++) {
        selectedPaymentMethodsArray.push(vm.newCountryPaymentMethod[a].id);
        }
        // CALLING THE HTTP FACTORY FOR GETTING DATA 
        return httpFactory.call('get','InstitutePaymentMethods/create?institueid='+ $stateParams.id + "&paymentmethodid=" + JSON.stringify(selectedPaymentMethodsArray))
        .then(function(response) {
        vm.isMethodSelected = true;
        vm.isSaved = true;
        return response; 
        });}

    
    



    

        // ADD PAYMENT METHOD
        vm.AddPaymentMethod = function (paymentMethodName) {
       if (vm.newCountryPaymentMethod.indexOf(paymentMethodName) < 0) {
        return vm.newCountryPaymentMethod.push(paymentMethodName);
       }
        else {
         var index = vm.newCountryPaymentMethod.indexOf(paymentMethodName);
        return vm.newCountryPaymentMethod.splice(index, 1);                    }
        }






    // GET INSERTED COUNTRIES PAYMENT METHOD 
    function getInsertedCountries() {
    // CALLING THE HTTP FACTORY FOR GETTING DATA 
    return httpFactory.call('get',"GetInstitutePaymentMethods?instituteid=" + $stateParams.id)
    .then(function(response) {
    vm.allInsertedCountries = response;
    return vm.allInsertedCountries; 
    });}




    // GET INSERTED COUNTRIES PAYMENT METHOD 
    function getInsertedCountries() {
        // CALLING THE HTTP FACTORY FOR GETTING DATA 
        return httpFactory.call('get',"GetInstitutePaymentMethods?instituteid=" + $stateParams.id)
        .then(function(response) {
        vm.allInsertedCountries = response;
        return vm.allInsertedCountries; 
        });}
        



      
    }
    




//     /**
//      * getInsertedCompany
//      * @param CountryId
//      * @param InstituteId
//      * @desc This function will add country into multi-dimensional array
//      */
//     $scope.getInsertedCompany = function () {
//         $http.get(API.base_url + "GetInstitutePaymentMethods?instituteid=" + $stateParams.id).success(function (response) {
//             $scope.allInsertedCountry = response;
//         }).error(function () {
//             console.log('error getting all countries');
//         });
//     }
//     $scope.getInsertedCompany();
//     $rootScope.settings.is_authenticated = true;
//     $scope.isSaved = false;
//     $scope.payMethodIsEmpty = true;
//     $scope.tags = [];
//     $scope.PaymentMethodsClick = function () {
//         $scope.payMethodIsEmpty = true;
//     }


//     $scope.paymentTypes = ['wire'];

//     $scope.onMethodChange = function (value) {
//         var val = JSON.parse(value);
//         $scope.tags.push(val);
//         // SPLICING FROM newCntryPayAdded DROP DOWN BEGIN
//         for (var a = 0; a < $scope.tags.length; a++) {
//             if ($scope.tags[a].id === val.id) {
//                 $scope.newCntryPayAdded = $scope.newCntryPayAdded.filter(function (el) {
//                     return el.id != val.id
//                 });
//             }
//         }
//         //SPLICING FROM newCntryPayAdded DROP DOWN END
//         if ($scope.newCntryPayAdded.length <= 0) {
//             $scope.payMethodIsEmpty = false;
//         }
//     }
//     $scope.revertPayMethod = function (value) {
//         console.log($scope.newCntryPayAdded);
//         $scope.newCntryPayAdded.push(value);
//         var indexOfPayMethod = $scope.tags.indexOf(value);
//         $scope.tags.splice(indexOfPayMethod, 1);
//         if ($scope.newCntryPayAdded.length <= 0) {
//             $scope.payMethodIsEmpty = false;
//         }
//         else {
//             $scope.payMethodIsEmpty = true;
//         }
//     }
//     /**
//      * deleteCountry
//      * @param id
//      * @desc Delete Country
//      */
//     $scope.deleteCountry = function (cntryid, instid) {
//         $http.get(API.base_url + "InstituteCountryPaymentMethods/delete?institueid=" + instid + "&countryid=" + cntryid).success(function (response) {
//             $scope.getInsertedCompany();
//         }).error(function () {
//             console.log('error deleting country');
//         });
//     }
//     $scope.countryPaymentClick = function () {

//         $scope.errorMsg = 'Please Select Payment Method From "Payments Method" Tabs & Press "Save"';
//         $timeout(function () {
//             $scope.errorMsg = '';
//         }, 2000);
//     }
// }