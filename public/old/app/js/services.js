'use strict';

/* Services */

app.service('pathService', function() {
    var self = {
        dist: function(point1, point2) {
            var dx = point1.x - point2.x;
            var dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        computePlaylistOld: function(songList, line, duration) {
            //compute distances from the constrain path
            console.log('length', line.length);

            var threshold = 60;
            angular.forEach(songList, function(song) {
                song.selected = false;
            });

            var selection = [];
            angular.forEach(line, function(point) {
                angular.forEach(songList, function(song) {
                    var d = self.dist(song, point);
                    if (d < threshold && song.selected !== true) {
                        selection.push(song);
                        song.selected = true;
                    }
                });
            });
            return selection;
        },
        computePlaylist:function(songList, line, duration) {
                //compute distances from the constrain path

                var threshold = 60;
                for(var i=songList.length-1; i>0; i--){
                    songList[i].selected = false;
                };
                var songCopy = songList.slice(0);
                songCopy.sort(function(a,b){return a.x-b.x;});

                var selection = [];
                for(var i=line.length-1; i>0; i--) {
                    var point = line[i];
                    var min = line[i].x-threshold;
                    var max = line[i].x+threshold;
                    var j=songCopy.length-1;
                    while(songCopy[j].x > max && j > 0){
                        j--;
                    }
                    while(songCopy[j].x > min && j > 0){
                        var song = songCopy[j];
                        var d = self.dist(song, point);
                        if (d < threshold) {
                                songCopy.splice(j,1);
                                selection.push(song);
                                song.selected = true;
                        }
                        j--;
                    };
                };
                return selection;
            }
    };
    return self;
});
app.service('musicPlayer', function() {
    var self = {
        musicTimer: null,
        startSongWithDuration: function(id, duration)
        {
            $('#ytplayer').attr('src', 'https://www.youtube.com/embed/' + id + '?autoplay=1&modestbranding=1');
            self.musicTimer = setInterval(self.changeSong, duration * 1000);
        },
        changeSong: function()
        {
            clearInterval(self.musicTimer);
        }
    };

    return self;
});
