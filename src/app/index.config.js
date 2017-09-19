(function() {
  'use strict';



  angular
    .module('PMT-AdminPanel')
    .config(httpProvider)
      /** @ngInject */

  // HTTP INTERCEPTOR
   /** @ngInject */
   function httpProvider($httpProvider) {     
    $httpProvider.defaults.transformRequest = function(data) {
              var query = '', name, value;
              if (data instanceof Object) {
                  for(var key in data) {
                      query += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';                   
                  }
                  query = query.substring(0, query.length - 1);
                  return query;
              } else {                
                return data;
              }      
            };
      $httpProvider.interceptors.push('httpRequestInterceptor');  
      $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    
}



})();

