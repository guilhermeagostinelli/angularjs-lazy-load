(function () {
    'use strict';

    define(["resolver"], function () {
        var app = angular.module("app", ["ngRoute", "resolverServices"]);

        /* @ngInject */
        function config($controllerProvider, $provide, $compileProvider, $filterProvider, $routeProvider, resolverProvider) {
            // Replaces default registering method.
            app.controller = $controllerProvider.register;
            app.service = $provide.service;
            app.factory = $provide.factory;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            
            var dependencyResolver = resolverProvider.dependencyResolver();

            function loadDependencies(dependencies) {
                return {
                    load: ["$q", "$rootScope", function ($q, $rootScope) {
                        return dependencyResolver.resolveDeps($q, $rootScope, dependencies);
                    }]
                };
            }

            $routeProvider
                .when('/home', {
                    templateUrl: 'html/views/home.html',
                    controller: 'homeCtrl',
                    resolve: loadDependencies(["homeCtrl"])
                })
                .when('/items', {
                    templateUrl: 'html/views/items.html',
                    controller: 'itemsCtrl',
                    resolve: loadDependencies(["itemsCtrl", "itemsService", "uppercase", "addButton"])
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }

        return app.config(config);
    });
})();