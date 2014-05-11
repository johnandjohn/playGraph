'use strict';

/* Services */

app.service('pathService', function() {
    var self = {
        dist: function(point1, point2) {
            var dx = point1.x - point2.x;
            var dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        computePlaylist: function(songList, line, duration) {
            //compute distances from the constrain path
            console.log('length',line.length);
            
            var threshold = 60;
            angular.forEach(songList, function(song){
                song.selected = false;
            });
            
            var selection = [];
            angular.forEach(line, function(point){
                 angular.forEach(songList, function(song){
                    var d = self.dist(song, point);
                    if(d < threshold && song.selected !== true){
                        selection.push(song);
                        song.selected = true;
                    }
                });
            });
            return selection;
        }
    };
    return self;
});
