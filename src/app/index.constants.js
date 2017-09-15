//index.constants.js

(function() {
  'use strict';

  angular
      .module('PMT-AdminPanel')
      .constant('API',{      
          /////////////////         LIVE PRODUCTION SERVER        ////////////////////
          //"base_url": "https://www.paymytuition.com/server/api/",
          //"auth_url": "https://www.paymytuition.com/server/oauth/token",

          /////////////////         LOCAL SERVER        ////////////////////
           // "base_url": "http://172.16.16.123:9090/api/",
           // "auth_url": "http://172.16.16.123:9090/oauth/token",
          //  "base_url": "http://172.16.1.250:9090/api/",
          // "auth_url": "http://172.16.1.250:9090/oauth/token",
          // "base_url": "http://192.168.1.123:9090/api/",
          // "auth_url": "http://192.168.1.123:9090/oauth/token",

          /////////////////         STAGGING  SERVER        ////////////////////
         "base_url": "http://52.60.218.3/server/api/",
         "auth_url": "http://52.60.218.3/server/oauth/token",
      
      
          "UNI_ROLE": "University",
          "ADMIN_ROLE": "Admin",
          "VISTOR_ROLE": "Visitor"
        })
        .constant('PMT-ROLES',{
              "UNI_ROLE": "University",
              "ADMIN_ROLE": "Admin",
              "VISTOR_ROLE": "Visitor"
            })
})();