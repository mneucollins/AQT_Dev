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

aqtControllers.controller('HomeController',['$scope', '$http', function($scope, $http){
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
	$http.get("json/help_home.json")
		.then(function(response) {
    		$scope.overlay = response.data.overlay;
    	}, function(response){
    		$scope.overlay.body = "something went wrong";
    	});
}]);


aqtControllers.controller('MainController', ['$scope','$location',function($scope, $location){	
    $scope.goTo = function (hash) { 
        $location.path(hash); 
    }
}]);

aqtControllers.controller('ExploreController', ['$scope','$location',function($scope, $location){	

}]);

aqtControllers.controller('MyQuiltController', ['$scope','$location',function($scope, $location){	
}]);

aqtControllers.controller('ScratchPadController', function($scope, $http){
	$scope.displaytext="Text Passed from Scope"	;
	$http.get("local_data/help_home.json")
		.then (function(response){
			$scope.jsontext=response.data;
			$scope.heading = response.data.heading;
			$scope.subhead = response.data.subhead;
			$scope.body = response.data.body;
		});
});

