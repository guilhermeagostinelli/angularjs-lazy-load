define(['angular', 'uppercase', 'angularMocks'], function (angular, uppercase) {
    describe('uppercase', function () {
        beforeEach(module('app'));

        it('should not be null', inject(function ($filter) {
            expect($filter('uppercase')).not.toBeNull();
        }));

        it("Should transform string into upper case", inject(function ($filter) {
            expect($filter('uppercase')('abc')).toBe('ABC');
        }));
    });
});