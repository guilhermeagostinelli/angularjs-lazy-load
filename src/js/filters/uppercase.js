(function () {
    'use strict';

    define(['app'], function (app) {
        /* @ngInject */
        function uppercase() {
            return function (input, option) {
                return input.toUpperCase();
            }
        };

        app.filter('uppercase', uppercase);
    });
})();