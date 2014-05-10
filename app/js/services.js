'use strict';

/* Services */

app.service('pathService', function() {
    var self = {
        dist: function(point1, point2) {
            var dx = point1.x - point2.x;
            var dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        computePlaylist: function(songList, constrainList, duration) {
            //compute distances from the constrain path
            var songListCopy = songList.slice(0);
            var maxDistOverall = Number.MIN_VALUE;
            angular.forEach(songListCopy, function(song){
                song.minDist = Number.MAX_VALUE;
                for(var i=0; i<constrainList.length;i++){
                    var point = constrainList[i];
                    var d = self.dist(song, point);
                    if(d < song.minDist){
                        song.minDist = d;
                        song.closest = point;
                        song.closestIndex = i;
                    }
                }
                if(song.minDist > maxDistOverall){
                    maxDistOverall = song.minDist;
                }
            });
            //select the songs
            var selection = [];
            var tuning = .5;
            songListCopy.sort(function(song){
                console.log(song.minDist, (tuning + tuning*Math.random())*song.minDist)
                return (tuning + tuning*Math.random())*song.minDist;}
            );
            while(duration > 0 && songListCopy.length > 0){
                var removed = songListCopy.splice(0, 1);
                selection.push(removed[0]);
                duration -= 10;
            }
            selection.sort(function(item){ return item.closestIndex;});
            return selection;
        }
    };
    return self;
});
