var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {

    $scope.imgsdata = imgsdata;

	$scope.pageindex = 1;
	$scope.pageSize = 6;
	$scope.belles;
	$scope.mainBelleUrl;	
	$scope.getPage =function(pageNum) {

	 	 var currentIndex = (pageNum-1)*$scope.pageSize;
		 var arr = [];
	        for(var i=0; i<$scope.pageSize; i++) {
	            if(currentIndex+i < imgsdata.length) {
	                arr.push(imgsdata[currentIndex+i]);
	            }
	        }

    		$scope.belles = arr;
			$scope.mainBelleUrl = arr[0].lsrc;
	 }
	$scope.getPage($scope.pageindex);
	
    $scope.setBelleImage = function(imageUrl) {
      $scope.mainBelleUrl = imageUrl;
    };

    function isPageIndexValid(pageNum){
	 	if(pageNum<1 || pageNum*$scope.pageSize >= imgsdata.length){
	 		return false;
	 	}else{
	 		return true;
	 	}
    }
    $scope.previous = function() {
    	if(isPageIndexValid($scope.pageindex-1)){
    		$scope.getPage(--$scope.pageindex);
    	}
      
    };

    $scope.next = function() {
    	if(isPageIndexValid($scope.pageindex+1)){
    		$scope.getPage(++$scope.pageindex);
    	}
    };

    $scope.gotoPage = function(pageNum) {
    	if(isPageIndexValid(pageNum)){
    		$scope.getPage(pageNum);
    		$scope.pageindex = pageNum;
    	}else{
    		$scope.pageindex=parseInt(imgsdata.length/$scope.pageSize);
    		$scope.getPage($scope.pageindex);
    	}
    };

    $scope.parseInt = function(num){
    	return parseInt(num);
    }
  }]);