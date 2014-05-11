'use strict';

app.directive('pgLine', function () {
    return {
      restrict: 'A',
      replace: 'false',
      template: '<canvas width=100%; height: 100%></canvas>',
      link: function (scope, elems, attrs) {
      	var canvas = elems[0];
      	var mainTool = new paper.Tool();
      	
      	mainTool.activate();

      	scope.line = scope.$eval(attrs.pgLine);

      	paper.setup(canvas);

      	var path;
      	var selected = null;
      	var drag = false;


      	mainTool.onMouseDown = function(event) {
      		var hit = paper.project.hitTest(event.point)
      		if (hit) {
      			selected = hit.item;
      		} else {
      			paper.project.clear();
				// If we produced a path before, deselect it:
				if (path) {

					path.selected = false;
				}

				// Create a new path and set its stroke color to black:
				path = new paper.Path({
					segments: [event.point],
					strokeColor: 'black',
					strokeWidth: 2,
					fullySelected: true
				});
            	selected = null;
      		};

      		drag = true;
      	};

      	mainTool.onMouseMove = function(event) {
      		console.log(event.point);
      		if (drag) {
      			if (selected) {
      				selected.position = event.point;
      				scope.$apply();	
      			} else {
      				path.add(event.point);		
      			}
      		}
      	}

      	mainTool.onMouseUp = function(event) {
      		drag = false;
      		var segmentCount = path.segments.length;

			var points = Array();

			// When the mouse is released, simplify it:
			path.smooth();
	
			for(var i=0; i<path._segments.length; i++)
			{
				points.push({x : path._segments[i]._point.x, y : path._segments[i]._point.y});	
			}
	
			scope.line = points;
      		scope.$apply();
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

      }
    }
});

app.directive('pgDraggable', ['$document' , function($document) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        var startX, startY, initialMouseX, initialMouseY;
 		scope.point = scope.$eval(attrs.pgDraggable);
        elm.bind('mousedown', function($event) {
          startX = elm.prop('offsetLeft');
          startY = elm.prop('offsetTop');
          initialMouseX = $event.clientX;
          initialMouseY = $event.clientY;
          $document.bind('mousemove', mousemove);
          $document.bind('mouseup', mouseup);
          return false;
        });
 
        function mousemove($event) {
          var dx = $event.clientX - initialMouseX;
          var dy = $event.clientY - initialMouseY;
          var x = startY + dy;
          var y = startX + dx;
          elm.css({
            top: x + 'px',
            left: y + 'px'
          });
          scope.point.x = x;
          scope.point.y = y;
          scope.$apply();
          return false;
        }
 
        function mouseup() {
          $document.unbind('mousemove', mousemove);
          $document.unbind('mouseup', mouseup);
        }
      }
    };
}]);