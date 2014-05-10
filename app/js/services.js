'use strict';

/* Services */

app.service('pathService', function() {
    var self = {
        dist: function(point1, point2) {
            var dx = point1.x - point2.x;
            var dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        computePlaylist: function(songList, constrainList) {
            angular.forEach(songList, function(song){
                var min = Number.MAX_VALUE;
                angular.forEach(constrainList, function(point){
                    var d = dist(song, point);
                });
            });
        }
    };
    return self;
});
