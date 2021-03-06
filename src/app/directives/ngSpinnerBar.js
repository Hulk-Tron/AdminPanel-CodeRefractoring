/* ngSpinnerBar.js */

/**
 * @desc Spining Bar Directive
 * @example <div acme-sales-customer-info></div>
 */
angular
.module('PMT-AdminPanel')
.directive('ngSpinnerBar', ngSpinnerBar);
function ngSpinnerBar($rootScope) {
    return {
        link: function (scope, element, attrs) {
            // by defult hide the spinner bar
            element.addClass('hide'); // hide spinner bar by default

            // display the spinner bar whenever the route changes(the content part started loading)
            $rootScope.$on('$stateChangeStart', function () {
                element.removeClass('hide'); // show spinner bar
            });

            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function () {
                element.addClass('hide'); // hide spinner bar
                $('body').removeClass('page-on-load'); // remove page loading indicator
                Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu

                // auto scorll to page top
                setTimeout(function () {
                    App.scrollTop(); // scroll to the top on content load
                }
                );
            });

            // handle errors
            $rootScope.$on('$stateNotFound', function () {
                element.addClass('hide'); // hide spinner bar
            });

            // handle errors
            $rootScope.$on('$stateChangeError', function () {
                element.addClass('hide'); // hide spinner bar
            });
        }
    };
}