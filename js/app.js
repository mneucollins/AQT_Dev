var AQT = angular.module('AQT', [
	'ngRoute',
	'ui.bootstrap',
	'aqtControllers'
]);

AQT.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'partials/home.html',
		controller: 'HomeController'
	})
	.when('/standards', {
		templateUrl:'partials/standards.html',
		controller: 'StandardsController'
	})
	.when('/explore',{
		templateUrl:'partials/explore.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
	
}]);
