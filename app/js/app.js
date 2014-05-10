'use strict';

var app = angular.module('playGraph',[]);

var Point = function(x,y){
    this.x = x;
    this.y = y;
};

var Song = function(point){
    this.point = point;
};

