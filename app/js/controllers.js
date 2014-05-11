'use strict';

/* Controllers */
var p = new Point(1,2);



app.controller('pointCtrl', function($scope, $http, pathService){

	$scope.points=dummyPoints;
	$scope.line = [];

	var update = function(newPoints, newLine) {
		if(newLine.length > 0) {
			$scope.playseq=pathService.computePlaylist(newPoints, newLine, 60);
			startSongWithDuration($scope.playseq[0].id, $scope.playseq[0].duration);
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
	
	$scope.addNewSongToGraph = function(id, titre, link, duration)
	{
		alert("ninja "+id);	
		var newSong = {
                    x:100,
                    y:100,
                    label:titre,
                    id:id,
                    link:link,
                    duration:duration
                };
         $scope.points.push(newSong);
		 $scope.$apply();
	};
	

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