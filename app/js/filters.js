'use strict';

/* Filters */
app.filter('sliding2', function() {
  return function(input, x) {
    var groups = [];

    for (var i = 0; i < input.length - 1; ++i) {
      	groups.push({
      		x: input[i],
      		y: input[i+1]
      	});
    }
    return groups;
  };
});