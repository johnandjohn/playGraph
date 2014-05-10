'use strict';

/* Filters */
app.filter('sliding2', function() {
  return function(input) {
    var groups = [];

    for (var i = 0; i < input.length - 1; ++i) {
      groups.push([input[i], input[i+1]]);
    }
    return groups;
  };
});