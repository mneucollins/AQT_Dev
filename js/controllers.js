var aqtControllers = angular.module('aqtControllers', []);

aqtControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.flashtext = "this could be some context-sensitive quilt factoidtext";
}]);

aqtControllers.controller('StandardsController',[]);

aqtControllers.controller('OverlayController',['$scope', function($scope){
	$scope.hideOverlay="true";
	$scope.toggleOverlay=function(){
		$scope.hideOverlay = !$scope.hideOverlay;
	}
	$scope.hideMenu = "true";
	$scope.toggleMenu=function(){
		$scope.hideMenu = !$scope.hideMenu;
	}
	
}]);
