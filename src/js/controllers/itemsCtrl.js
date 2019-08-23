(function() {
    'use strict';

    define(['app'], function (app) {
        /* @ngInject */
        function itemsCtrl($scope, itemsService) {
            $scope.items = itemsService.itemsList;
        };
    
        app.controller('itemsCtrl', itemsCtrl);
    });
})();