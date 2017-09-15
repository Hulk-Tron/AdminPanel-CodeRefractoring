(function() {
  'use strict';



  angular
    .module('PMT-AdminPanel')
    .config(config,$ocLazyLoadProvider,httpProvider);
      /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

 




  // LAZY LOADING CONFIG PROVIDER
  /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
  /** @ngInject */
  function $ocLazyLoadProvider($ocLazyLoadProvider) {
     $ocLazyLoadProvider.config($ocLazyLoadProvider);
  }






  // HTTP INTERCEPTOR
   /** @ngInject */
   function httpProvider($httpProvider) {
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.interceptors.push('httpRequestInterceptor');
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
   alert()
    var key, result = [];
      if (typeof data === "string")
          return data;
      for (key in data) {
          if (data.hasOwnProperty(key))
              result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    // Disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    return result.join("&");
  });
}

})();

