'use strict';

var app = angular.module('playGraph',[]);

var Point = function(x,y){
    this.x = x;
    this.y = y;
};

var dummyPoints= [
		{
			x: 10,
			y: 20,
                        duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 30,
			y: 30,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 50,
			y: 25,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 60,
			y: 200,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 90,
			y: 230,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 400,
			y: 300,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 100,
			y: 220,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 200,
			y: 20,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 150,
			y: 450,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 70,
			y: 80,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 400,
			y: 80,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 430,
			y: 90,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 420,
			y: 65,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 380,
			y: 320,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 490,
			y: 340,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 400,
			y: 400,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 480,
			y: 360,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 420,
			y: 490,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 700,
			y: 750,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 650,
			y: 730,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 900,
			y: 850,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 800,
			y: 600,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 850,
			y: 610,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 640,
			y: 880,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 900,
			y: 350,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 800,
			y: 200,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 950,
			y: 300,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
			x: 740,
			y: 120,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		},
		{
                    
			x: 900,
			y: 320,
                                                duration: "406",
id: "TAgJFGmgGJ0",
label: "Feed Me - Trichitillomania",
link: "http://www.youtube.com/watch?v=TAgJFGmgGJ0&feature=youtube_gdata"
		}
	]

var Song = function(point){
    this.point = point;
};

