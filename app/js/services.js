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
            while(duration > 0 && songListCopy.length > 0){
                //randomly select one song
                var index = Math.floor(Math.random()*songListCopy.length);
                var song = songListCopy[index];
                var tuneParameter = 1.00;
                var ratio = song.minDist/(maxDistOverall*tuneParameter);
                console.log(ratio);
                //favor the ones closer to the path
                var weight = ratio * ratio * ratio;
                console.log("weight: ", weight);
                if(Math.random() > weight){
                    songListCopy.splice(index, 1);
                    selection.push(song);
                    duration -= 10;
                }
            }
            selection.sort(function(item){ return item.closestIndex;});
            console.log(selection);
            return selection;
        }
    };
    return self;
});
