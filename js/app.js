var AQT = angular.module('AQT', [
	'ngRoute',
	'ui.bootstrap',
	'aqtControllers'
]);

AQT.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'partials/home.html',
		controller: 'HomeController'
	})
	.when('/standards', {
		templateUrl:'partials/standards.html',
		controller: 'StandardsController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);
