define(['angular', 'addButton', 'angularMocks'], function (angular, addButton) {
    describe('addButton', function () {
        beforeEach(module('app'));

        var $compile, $rootScope, scope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            // Note: when matching, the injector unwraps the underscores around the parameter names.
        }));

        it('Replaces the element with the appropriate content', function () {
            $rootScope.title = "Adicionar Item";
            var element = $compile('<add-button title="{{::title}}"></add-button>')($rootScope);
            // Fire all the watches, thus evaluating all scope expressions.
            $rootScope.$digest();
            expect(element.html()).toContain('<button ng-click="add()" class="ng-binding">' + $rootScope.title + '</button>');
        });

        it('Adds an item to the list correctly', function () {
            scope.items = [];
            scope.title = "Adicionar Item";
            scope.itemToBeAdded = { 'name': 'My Item', 'color': 'green' };
            var element = $compile(angular.element('<add-button id="addButton" list="items" item-to-be-added="itemToBeAdded" title="{{::title}}"></add-button>'))(scope);
            scope.$digest();
            element[0].querySelector('button').click();
            expect(scope.items.length).toBe(1);
            expect(scope.items[0]).toBe(scope.itemToBeAdded);
        });
    });
});