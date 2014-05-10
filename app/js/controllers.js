'use strict';

/* Controllers */
var p = new Point(1,2);

app.controller('pointCtrl', function($scope, $http, pathService){
	var constList = [
		{x: 10, y:20},
		{x: 100, y:50},
		{x: 100, y:200}
	];
	pathService.computePlaylist(dummyPoints,constList, 60);
	$scope.points=dummyPoints;

	/*$http.get('data.json').then( function (response) {
		console.log(response.data.points);
		$scope.points=JSON.parse(response.data.points);
    });*/
});