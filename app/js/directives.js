'use strict';

app.directive('pgEpicness', function () {
    return {
      restrict: 'A',
      replace: 'false',
      template: '<canvas resize></canvas>',
      scope: {
        points: '=',
        line: '='
      },
      link: function (scope, elems, attrs) {
      	var canvas = elems[0];
      	var mainTool = new paper.Tool();
      	mainTool.activate();

      	paper.setup(canvas);

      	var paperPoints = [];
      	var paperLine = [];

      	var drawPoints = function(points) {
      		angular.forEach(points, function(point) {
      			var path = new paper.Path.Circle(new Point(point.x, point.y), 5);
            	path.strokeColor = 'gray';
            	path.strokeWidth = 2;
      		});
      	};

      	var selected = null;
      	var drag = false;
      	mainTool.onMouseDown = function(event) {
      		var hit = paper.project.hitTest(event.point)
      		if (hit) {
      			selected = hit.item;
      		} else {
      			var path = new paper.Path.Circle(new Point(event.point.x, event.point.y), 5);
            	path.strokeColor = 'gray';
            	path.strokeWidth = 2;
            	path.fillColor = 'white';
            	/*scope.points.push({
      				x: event.point.x,
	      			y: event.point.y
      			});
      			scope.$apply();*/
            	selected = path;
      		};

      		drag = true;
      	};

      	mainTool.onMouseMove = function(event) {
      		if (drag && selected) {
      			selected.position = event.point;
      			scope.$apply();
      		}
      	}

      	mainTool.onMouseUp = function(event) {
      		drag = false;
      	}

/*
        scope.$watchCollection('points', function(newVal) {
        	console.log("update");
         	if (newVal) {
         		paper.project.clear();
            	drawPoints(scope.points);
          	}
        }, true);
*/

        drawPoints();
      }
    }
});