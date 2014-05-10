'use strict';

/* Controllers */
var p = new Point(1,2);

app.controller('pointCtrl', function($scope, pathService){
    pathService.computePlaylist();
    $scope.song= [
    ];
});
