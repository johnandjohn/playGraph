'use strict';

var app = angular.module('playGraph',[]);

var Point = function(x,y){
    this.x = x;
    this.y = y;
};

var dummyPoints= [
		{
			x: 10,
			y: 20
		},
		{
			x: 30,
			y: 30
		},
		{
			x: 50,
			y: 25
		},
		{
			x: 60,
			y: 200
		},
		{
			x: 90,
			y: 230
		},
		{
			x: 400,
			y: 300
		},
		{
			x: 100,
			y: 220
		},
		{
			x: 200,
			y: 20
		},
		{
			x: 150,
			y: 450
		},
		{
			x: 70,
			y: 80
		},
		{
			x: 400,
			y: 80
		},
		{
			x: 430,
			y: 90
		},
		{
			x: 420,
			y: 65
		},
		{
			x: 380,
			y: 320
		},
		{
			x: 490,
			y: 340
		},
		{
			x: 400,
			y: 400
		},
		{
			x: 480,
			y: 360
		},
		{
			x: 420,
			y: 490
		}

	]


