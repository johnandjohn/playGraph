'use strict';

app.directive('pgLine', function() {
    return {
        restrict: 'A',
        replace: 'false',
        scope: {
            line: '=',
            list: '='
        },
        template: '<canvas width=100%; height: 100%></canvas>',
        link: function(scope, elems, attrs) {
            var canvas = elems[0];
            var mainTool = new paper.Tool();

            mainTool.activate();

            //scope.line = scope.$eval(attrs.pgLine);

            paper.setup(canvas);

            var path;
            var drag = false;


            mainTool.onMouseDown = function(event) {
                paper.project.clear();
                // If we produced a path before, deselect it:
                if (path) {
                    path.selected = false;
                }
                // Create a new path and set its stroke color to black:
                path = new paper.Path({
                    segments: [event.point],
                    strokeColor: 'rgba(7,140,255,.3)',
                    strokeWidth: 100,
                    strokeCap: 'round'
                });

                drag = true;
            };

            mainTool.onMouseMove = function(event) {
                if (drag) {
                    path.add(event.point);
                }
                scope.$apply();
            }

            mainTool.onMouseUp = function(event) {
                drag = false;
                var segmentCount = path.segments.length;

                var points = Array();

                // When the mouse is released, simplify it:
                path.simplify(1);
                path.smooth(1);


                for (var i = 0; i < path._segments.length; i++)
                {
                    points.push({x: path._segments[i]._point.x, y: path._segments[i]._point.y});
                }

                scope.line = points;
                scope.$apply();
            };

            var lines = [];
            scope.$watch('list', function(newPoints) {
                console.log("update");
                angular.forEach(lines, function(line) {
                    line.remove();
                });
                if (newPoints) {

                    for (var i = 0; i < newPoints.length - 1; ++i) {
                        if (newPoints[i].selected) {
                            var line = paper.Path.Line(newPoints[i], newPoints[i + 1]);
                            line.strokeColor = 'rgba(7,140,255,.6)';
                            line.strokeWidth = 2;
                            lines.push(line)
                        }
                    }
                }
            }, true);
        }
    }
});

app.directive('pgSearchArea', function() {
    return {
        restrict: 'A',
        template: '<fieldset id="searchArea"><legend>Music search</legend><input type="text" name="searchValue" id="searchValue" value="{{search.value}}" /><input name="searchButton" type="submit" value="Search" ng-click="searchTriggered()"/><div id="videoResultsDiv"><ul></ul><li data-ng-repeat="result in search.results"><a href="#" data-ng-click="addNewSongToGraph(result)">{{result.label}}</a></li></div> </fieldset>',
        link: function($scope, $elm, $attrs) {
            $scope.search = {
                value: 'init val',
                results: []
            },
            $scope.searchTriggered = function() {
                //document.getElementById("videoResultsDiv").innerHTML =
                //        'Loading YouTube videos ...';

                var script = document.createElement('script');
                script.setAttribute('id', 'jsonScript');
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', 'http://gdata.youtube.com/feeds/' +
                        'videos?vq=' + encodeURIComponent($scope.search.value) + '&max-results=8&' +
                        'alt=json-in-script&callback=youtubeCallback&' +
                        'orderby=relevance&sortorder=descending&format=5&fmt=18');
                document.documentElement.firstChild.appendChild(script);
            };
            $scope.resultsCallback = function(data) {
                var feed = data.feed;
                var entries = feed.entry || [];
                $scope.search.results.splice(0, $scope.search.results.length);
                for (var i = 0; i < entries.length; i++)
                {
                    var id = entries[i].id.$t.substring(entries[i].id.$t.lastIndexOf("/") + 1);
                    $scope.search.results.push({id: id, label: entries[i].title.$t, link: entries[i].link[0].href, duration: entries[i].media$group.yt$duration.seconds});
                }
                $scope.$apply();
            };
            window.youtubeCallback = function(data) {
                angular.element(document.getElementById('searchArea')).scope().resultsCallback(data);
            };
        }
    };
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
          var y = startY + dy;
          var x = startX + dx;
          elm.css({
            top: y + 'px',
            left: x + 'px'
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