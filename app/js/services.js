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
                song.selected = false;
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
            angular.forEach(songListCopy, function(song){
                song.rand = (tuning + tuning*Math.random())*song.minDist;
            });
            songListCopy.sort(function(a,b){return a.rand-b.rand;});
            //take from the sorted list util we reach the desired duration
            while(duration > 0 && songListCopy.length > 0){
                var removed = songListCopy.splice(0, 1);
                selection.push(removed[0]);
                duration -= 10;
                removed[0].selected = true;
            }
            
            selection.sort(function(a,b){ return a.closestIndex-b.closestIndex;});

            //clean points
            angular.forEach(songList, function(song) {
                delete song.minDist;
                delete song.closest;
                delete song.closestIndex;
                delete song.rand;
            });

            return selection;
        }
    };
    return self;
});
