'use strict';

/* Controllers */
var p = new Point(1, 2);



app.controller('pointCtrl', function($scope, $http, pathService, musicPlayer) {

    $scope.points = dummyPoints;
    $scope.line = [];

    var update = function(newPoints, newLine) {
        if (newLine.length > 0) {
            $scope.playseq = pathService.computePlaylist(newPoints, newLine, 60);
            musicPlayer.startSongWithDuration($scope.playseq[0].id, $scope.playseq[0].duration);
        }
    };

    $scope.$watch('points', function(newVal) {
        update(newVal, $scope.line);
    }, true);

    $scope.$watch('line', function(newVal) {
        update($scope.points, newVal);
    }, true);


//	$scope.line=constList;

    $scope.addNewSongToGraph = function(newSong)
    {
        newSong.x = 100;
        newSong.y = 100;
        $scope.points.push(newSong);
    };
});

app.controller('searchCtrl', function($scope) {

    $scope.points = dummyPoints;
    $scope.line = [];

});