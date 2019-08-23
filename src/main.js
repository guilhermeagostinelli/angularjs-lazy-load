'use strict';

require.config({
	baseUrl: '.',
	waitSeconds: 30,
	paths: {
		angular: "../node_modules/angular/angular",
		angularRoute: "../node_modules/angular-route/angular-route",
		app: "app",
		resolver: "js/services/resolver",

		addButton: "js/directives/addButton",
		uppercase: "js/filters/uppercase",
		homeCtrl: "js/controllers/homeCtrl",
		itemsCtrl: "js/controllers/itemsCtrl",
		itemsService: "js/services/itemsService"
	},
	shim: {
		'app': {
			deps: ['angular', 'angularRoute']
		},
		'resolver': {
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
		},
	}
});

require(['app', 'resolver'], function () {
	angular.bootstrap(document, ['app'], {
		strictDi: false
	});
});