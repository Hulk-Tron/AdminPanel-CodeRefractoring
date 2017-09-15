/* propsFilter.js */

/**
 * @desc Spining Bar Directive
 * @example <div acme-sales-customer-info></div>
 */
angular
.module('PMT-AdminPanel')
.directive('enterKeyPressEvent', enterKeyPressEvent);
function enterKeyPressEvent() {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
}