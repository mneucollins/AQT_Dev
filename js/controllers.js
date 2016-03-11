var aqtControllers = angular.module('aqtControllers', []);

aqtControllers.controller('NavController', ['$scope', '$location', function($scope, $location){
    $scope.hideStoryNav = "true";
	$scope.showStoryNav=function(){
		$scope.hideStoryNav = "false";
	}
    $scope.goHome = function (hash) { 
        $location.path(hash); 
    }
    $scope.goBack = function(){
    	window.history.back();
    }
}]);

aqtControllers.controller('HomeController',['$scope', function($scope){
	$scope.hideAbout="true";
	$scope.toggleInfoAbout=function(){
		$scope.hideAbout = !$scope.hideAbout;
	}
	$scope.goExplore=function(){

	}
	$scope.hideMenu = "true";
	$scope.toggleMenu=function(){
		$scope.hideMenu = !$scope.hideMenu;
	}
	$scope.hideMyQuilt = "true";
	$scope.toggleInfoMyQuilt=function(){
		$scope.hideMenu = !$scope.hideMenu;
	}
}]);

aqtControllers.controller('ExploreController', ['$scope','$location',function($scope, $location){
	
}]);
