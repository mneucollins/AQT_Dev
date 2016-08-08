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
	.when('/main',{
		templateUrl:'partials/main.html'
	})
	.when('/explore_main',{
		templateUrl:'partials/explore_main.html'
	})
	.when('/my_quilt',{
		templateUrl:'partials/my_quilt.html'
	})
	.when('/explore_the_quilt',{
		templateUrl:'partials/explore_the_quilt.html'
	})	
	
	.when('/scratchpad',{
		templateUrl:'partials/scratchpad.html'
	})

	.otherwise({
		redirectTo: '/home'
	});
}]);