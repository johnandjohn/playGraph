'use strict';

/* Controllers */
var p = new Point(1,2);

app.controller('pointCtrl', ['$scope', '$http', function($scope, $http){
	$scope.points=dummyPoints;

	/*$http.get('data.json').then( function (response) {
		console.log(response.data.points);
		$scope.points=JSON.parse(response.data.points);
    });*/
}]);
