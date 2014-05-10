'use strict';

/* Controllers */
var p = new Point(1,2);

app.controller('pointCtrl', function($scope, pathService){
    var constList = [
        {x:1,y:2},
        {x:3,y:2},
        {x:4,y:2}
    ];
    var songs = [
        {x:1,y:0},
        {x:3,y:0},
        {x:4,y:8}
    ];
    pathService.computePlaylist(songs,constList,60);
    $scope.song= [
    ];
});
