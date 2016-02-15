var aqtControllers = angular.module('aqtControllers', []);

aqtControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.flashtext = "this could be some context-sensitive quilt factoidtext";
}]);

aqtControllers.controller('StandardsController',[]);