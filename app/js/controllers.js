'use strict';

/* Controllers */
var p = new Point(1,2);



app.controller('pointCtrl', function($scope, $http, pathService){
	var constList = [
		{x: 10, y:20},
		{x: 20, y:30},
		{x: 40, y:50},
		{x: 60, y:60},
		{x: 100, y:120},
		{x: 150, y:300},
		{x: 150, y:340}
	];

	var playlist = pathService.computePlaylist(dummyPoints,constList, 60);

//	$scope.line=constList;
	$scope.points=dummyPoints;
	$scope.playlist=playlist;

	$scope.getColor = function(point) {
		if (playlist.indexOf(point) == -1) {
			return "white"
		} else {
			return "red"
		}
	}

	$scope.foo = function (event) {
		console.log("foobar");

		$scope.points.push({
			x: 250,
			y: 250
		});
	};


});