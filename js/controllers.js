var aqtControllers = angular.module('aqtControllers', []);

aqtControllers.controller('NavController', ['$scope', '$rootScope','$location', function($scope, $rootScope, $location){

    $scope.goBack = function(){
    	window.history.back();
    }   
	$rootScope.toggleOverlay = function(){
		$rootScope.hideOverlay = !$rootScope.hideOverlay;
	}    
    $scope.hideStoryNav = "true";
	$scope.showStoryNav=function(){
		$scope.hideStoryNav = "false";
	}
    $scope.goHome = function (hash) { 
        $location.path(hash); 
    }
}]);

aqtControllers.controller('OverlayController', ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.hideOverlay = "true";
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

aqtControllers.controller('MainController', ['$scope','$location',function($scope, $location){	
}]);
