'use strict';

/* Controllers */
var p = new Point(1,2);



app.controller('pointCtrl', function($scope, $http, pathService){

	$scope.points=dummyPoints;
	$scope.line = [];

	var update = function(newPoints, newLine) {
		if(newLine.length > 0) {
			$scope.playseq=pathService.computePlaylist(newPoints, newLine, 60);
		}
	}

	$scope.$watch('points', function(newVal, oldVal) {
		console.log("r")
		update(newVal, $scope.line);
    }, true);

    $scope.$watch('line', function(newVal) {
		update($scope.points, newVal);
    }, true);
	

//	$scope.line=constList;
	
	$scope.addNewSongToGraph(id, titre, link, duration)
	{
		
	}
	

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