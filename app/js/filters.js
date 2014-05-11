'use strict';

/* Filters */
app.filter('sliding2', function() {
  return function(input) {
    var groups = [];

    for (var i = 0; i < input.length - 1; ++i) {
      	groups.push({
      		_1: input[i],
      		_2: input[i+1]
      	});
    }
    return groups;
  };
});