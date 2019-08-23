(function () {
    'use strict';

    define([], function () {
        function resolver() {
            this.dependencyResolver = function () {
                /* @ngInject */
                function resolveDeps($q, $rootScope, deps) {
                    return $q(function (resolve) {
                        require(deps, function () {
                            resolve();
                            $rootScope.$apply();
                        });
                    });
                };
                return {
                    resolveDeps: resolveDeps
                };
            }
            this.$get = function () {
                return this;
            }
        };

        angular.module('resolverServices', []).provider('resolver', resolver);
    });
})();