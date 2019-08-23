(function () {
  'use strict';

  define(['app'], function (app) {
    /* @ngInject */
    function addButton() {
      return {
        restrict: 'E',
        scope: {
          title: '@',
          list: '=',
          itemToBeAdded: '='
        },
        template: '<button ng-click="add()">{{::title}}</button>',
        // templateUrl: 'html/directives/addButton.html',
        link: function(scope, elem, attrs, ctrl) {
          scope.add = function() {
            scope.list.push(scope.itemToBeAdded);
          };
        }
      };
    }
    
    app.directive('addButton', addButton);
  });
})();