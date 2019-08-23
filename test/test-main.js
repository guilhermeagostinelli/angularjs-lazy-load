var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
    baseUrl: '/base/',
    deps: allTestFiles,
    callback: window.__karma__.start,
    paths: {
        angular: '/base/node_modules/angular/angular',
        angularRoute: '/base/node_modules/angular-route/angular-route',
        angularMocks: '/base/node_modules/angular-mocks/angular-mocks',
        app: "/base/dist/app",
        resolver: "/base/dist/js/services/resolver",
        
        addButton: "/base/dist/js/directives/addButton",
        uppercase: "/base/dist/js/filters/uppercase",
		homeCtrl: "/base/dist/js/controllers/homeCtrl",
		itemsCtrl: "/base/dist/js/controllers/itemsCtrl",
		itemsService: "/base/dist/js/services/itemsService"
    },
    shim: {
        'angular': {
            exports: 'angular' 
        },
        'angularMocks': {
            deps: ['angular']
        },
        'app': {
			deps: ['angular', 'angularRoute']
		},
		'resolver': {
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
        }
    }
});