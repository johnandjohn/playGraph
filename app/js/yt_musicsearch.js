		function searchClicked()
        {
            document.getElementById("videoResultsDiv").innerHTML = 
                                    'Loading YouTube videos ...';

            //create a JavaScript element that returns our JSON data.
            var script = document.createElement('script');
            script.setAttribute('id', 'jsonScript');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', 'http://gdata.youtube.com/feeds/' + 
                   'videos?vq='+encodeURIComponent($('#searchValue').val())+'&max-results=8&' + 
                   'alt=json-in-script&callback=getAllMatchingIds&' + 
                   'orderby=relevance&sortorder=descending&format=5&fmt=18');

            //attach script to current page -  this will submit asynchronous
            //search request, and when the results come back callback 
            //function showMyVideos(data) is called and the results passed to it
            document.documentElement.firstChild.appendChild(script);
        }

		
		var musicTimer;
		
		function startSongWithDuration(id, duration)
		{
			$('#ytplayer').attr('src', 'https://www.youtube.com/embed/'+id+'?autoplay=1&modestbranding=1');
			console.log("Starting music "+id+", timer="+duration);
			musicTimer = setInterval(changeSong, duration * 1000);
		}
		
		function changeSong()
		{
			alert("Done");
			clearInterval(musicTimer);
		}
		
		function callAngular(id, titre, link, duration)
		{
			angular.element(document.getElementById('body_spe')).scope().addNewSongToGraph(id, titre, link, duration);
		}
		
        function getAllMatchingIds(data)
        {
            var feed = data.feed;
            var entries = feed.entry || [];
			var results = new Array();
			
			
            for (var i = 0; i < entries.length; i++)
            {
				var id = entries[i].id.$t.substring(entries[i].id.$t.lastIndexOf("/")+1);
                results.push({'id' : id, 'title' : entries[i].title.$t, 'link' : entries[i].link[0].href, 'duration' : entries[i].media$group.yt$duration.seconds});
            }
            var html = ['<ul>'];
			
			
            for (var i = 0; i < results.length; i++)
            {
                //html.push('<li>', '<img src="http://img.youtube.com/vi/', results[i].id, '/2.jpg" /><a href="#" onclick="newMusic(\'', results[i].id ,'\')">', results[i].title, '</a>(', results[i].duration, ')', '</li>');
                html.push('<li>', '<a href="#" onclick="callAngular(\'', results[i].id,'\',\'',results[i].title,'\',\'',results[i].link,'\',\'',results[i].duration, '\')">', results[i].title, '</a>', '</li>');
            }
            html.push('</ul>');
            document.getElementById('videoResultsDiv').innerHTML = html.join('');
        }