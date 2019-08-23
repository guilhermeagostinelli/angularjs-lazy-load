(function() {
    'use strict';

    define(['app'], function (app) {
        /* @ngInject */
        function itemsService() {
            this.itemsList = [
                { name: "A", color: "red" },
                { name: "B", color: "blue"}
            ];
        };
    
        app.service('itemsService', itemsService);
    });
})();