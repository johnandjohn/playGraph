'use strict';

/* Controllers */
var p = new Point(1,2);



app.controller('pointCtrl', function($scope, $http, pathService){
	var constList = [
		{x: 10, y:20},
		{x: 20, y:30},
		{x: 40, y:50},
		{x: 60, y:60},
		{x: 100, y:120},
		{x: 150, y:300},
		{x: 150, y:340}
	];

	var playlist = pathService.computePlaylist(dummyPoints,constList, 60);

//	$scope.line=constList;
	$scope.points=dummyPoints;
	$scope.playlist=playlist;

	$scope.getColor = function(point) {
		if (playlist.indexOf(point) == -1) {
			return "white"
		} else {
			return "red"
		}
	}


	// Get a reference to the canvas object
	var canvas = document.getElementById('canvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	// Create a Paper.js Path to draw a line into it:
	var path = new paper.Path();


	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new paper.Point(100, 100);
	var textItem = new paper.PointText({
		content: 'Click and drag to draw a line.',
		point: new Point(20, 30),
		fillColor: 'black',
	});

	// Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([ 200, -50 ]));
	// Draw the view now:
	paper.view.draw();


	$scope.mouseDown = function(event){
		console.log(event);
    	if (path) {
			path.selected = false;
		}

		// Create a new path and set its stroke color to black:
		path = new paper.Path({
			segments: [new paper.Point(event.x, event.y)],
			strokeColor: 'black',
			// Select the path, so we can see its segment points:
			fullySelected: true
		});
    };

 $scope.mouseDrag = function(event){
        path.add(new paper.Point(event.x, event.y));

		// Update the content of the text item to show how many
		// segments it has:
		textItem.content = 'Segment count: ' + path.segments.length;
    };

$scope.mouseUp = function(){
        var segmentCount = path.segments.length;

		var points = Array();

		// When the mouse is released, simplify it:
		path.simplify(10);
	
		for(i=0; i<path._segments.length; i++)
		{
			points.push({'x' : path._segments[i]._point.x, 'y' : path._segments[i]._point.y});	
		}
	
		console.log(points);	
	
		var pointsAsString = points.map(function(o){return o.x+","+o.y});

		// Select the path, so we can see its segments:
		path.fullySelected = true;
		
		textItem.content = pointsAsString.join(' ; ');
	};

/*


	var path;


    

   

    $scope.mouseDown = function(event){
    	if (path) {
			path.selected = false;
		}

		// Create a new path and set its stroke color to black:
		path = new paper.Path({
			segments: [event.point],
			strokeColor: 'black',
			// Select the path, so we can see its segment points:
			fullySelected: true
		});
    };
	paper.install(window);
    var canvas = document.getElementById('myCanvas');
    paper.setup('canvas');          
    */
	
	

	/*$http.get('data.json').then( function (response) {
		console.log(response.data.points);
		$scope.points=JSON.parse(response.data.points);
    });*/
});