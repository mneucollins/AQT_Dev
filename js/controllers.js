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
    $rootScope.currentscreen = "";
}]);

aqtControllers.controller('OverlayController', ['$scope', '$rootScope','$location', function($scope, $rootScope, $location, $http){
	$rootScope.hideOverlay = "true";
	$scope.whereaminow="I am here";
	$scope.currentscreen = $rootScope.currentscreen;

/*	$scope.getOverlayText($screen){
		$restserver='http://localhost/PhpstormProjects/AQT_Meta/index.php/rest_test/';
		$restcall = $restserver+'overlay/'+$screen;
		$http.get($restcall)
			.then(function(response) {
    			$scope.overlayText = response.data.overlay_text;
	    	}, function(response){
    			$scope.overlayText = "something went wrong";
    		});
		}*/
}]);

aqtControllers.controller('HomeController',['$scope', '$http', function($scope, $http){
	$scope.hideAbout="true";
	$scope.toggleInfoAbout=function(){
		$scope.hideAbout = !$scope.hideAbout;
	}
	$scope.goExplore=function(){}
	$scope.hideMenu = "true";
	$scope.toggleMenu=function(){
		$scope.hideMenu = !$scope.hideMenu;
	}
	$scope.hideMyQuilt = "true";
	$scope.toggleInfoMyQuilt=function(){
		$scope.hideMenu = !$scope.hideMenu;
	}
	$http.get("local_data/help_home.json")
		.then(function(response) {
    		// $scope.overlay = response.data.overlay;
    		$scope.heading=response.data.heading;
			$scope.subheading=response.data.subheading;
			$scope.body = response.data.body;

    	}, function(response){
    		$scope.body = "something went wrong";
    	});
}]);


aqtControllers.controller('MainController', ['$scope','$location',function($scope, $location){
	$scope.hideOverlay="true";
    $scope.goTo = function (hash) { $location.path(hash); }
      	$scope.change = function() {
  			$http.get("http://aqt/AQTMeta/index.php/rest_test/overlay/main/format/html")
			.then (function(response){
				$scope.jsontext=response.data;
				$scope.overlaytext = $sce.trustAsHtml(response.data.overlay_text);
			});
  		}
    }
]);

aqtControllers.controller('ExploreMainController', ['$scope','$location',function($scope, $location){	
	$scope.goExplore = function(hash) {
		$location.path(hash);
	}
}]);

aqtControllers.controller('ExploreQuiltController', ['$scope','$location',function($scope, $location){	
	$scope.goRandom = function(hash) {
		$location.path(hash);
	}
}]);

aqtControllers.controller('MyQuiltController', ['$scope','$location',function($scope, $location){	
}]);


aqtControllers.controller('RandomSelectionController', ['$scope','$location','$http',function($scope, $location, $http){	
	$http.get("http://mneucollins.org/AQTMeta/index.php/r_quiltpanel/random_panels/format/json")
		.then (function(response) {
			// $scope.panels = response.data;
			panelList = response.data;

			angular.forEach(panelList, function(panelObj, panelListKey){
				console.log(panelObj);
				var aImageName = panelObj.image_name.split(".");
				panelObj.buttonImg = "_sm/" + aImageName[0] + "_sm." + aImageName[1];
			});
			$scope.panels = panelList;
		});
	
	$scope.imagepath = "http://mneucollins.org/AQTMeta/resources/images/panels";
	$scope.goExplore = function(hash) {
	$location.path(hash);
	}
}]);


aqtControllers.controller('ScratchPadController', ['$scope','$location','$http', '$sce', function ($scope, $location, $http, $sce) {
		$http.get("http://aqt/AQTMeta/index.php/rest_test/overlay/main/format/html")
			.then (function(response){
				$scope.jsontext=response.data;
				$scope.body = $sce.trustAsHtml(response.data.overlay_text);
		});
		$scope.whereami = $location.url() + " " + $location.path();
}]);

