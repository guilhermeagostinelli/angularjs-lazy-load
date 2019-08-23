(function () {
    'use strict';

    define(['app'], function (app) {
        /* @ngInject */
        function homeCtrl($scope) {
            $scope.helloMessage = "Welcome!";
        };

        app.controller('homeCtrl', homeCtrl);
    });
})();