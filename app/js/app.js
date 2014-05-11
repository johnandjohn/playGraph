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
                        label:"chillout 01"
		},
		{
			x: 30,
			y: 30,
                        label:"chillout 02"
		},
		{
			x: 50,
			y: 25,
                        label:"chillout 03"
		},
		{
			x: 60,
			y: 200,
                        label:"linkin park"
		},
		{
			x: 90,
			y: 230,
                        label:"foo"
		},
		{
			x: 400,
			y: 300,
                        label:"tac tac"
		},
		{
			x: 100,
			y: 220,
                        label:"track x"
		},
		{
			x: 200,
			y: 20,
                        label:"track y"
		},
		{
			x: 150,
			y: 450,
                        label:"track z"
		},
		{
			x: 70,
			y: 80,
                        label:"track a"
		},
		{
			x: 400,
			y: 80,
                        label:"track b"
		},
		{
			x: 430,
			y: 90,
                        label:"track c"
		},
		{
			x: 420,
			y: 65,
                        label:"track d"
		},
		{
			x: 380,
			y: 320,
                        label:"track e"
		},
		{
			x: 490,
			y: 340,
                        label:"track 01"
		},
		{
			x: 400,
			y: 400,
                        label:"track 01"
		},
		{
			x: 480,
			y: 360,
                        label:"track 01"
		},
		{
			x: 420,
			y: 490,
                        label:"track 01"
		},
		{
			x: 700,
			y: 750,
                        label:"just beat it"
		},
		{
			x: 650,
			y: 730,
                        label:"track 01"
		},
		{
			x: 900,
			y: 850,
                        label:"track 01"
		},
		{
			x: 800,
			y: 600,
                        label:"track 01"
		},
		{
			x: 850,
			y: 610,
                        label:"track 01"
		},
		{
			x: 640,
			y: 880,
                        label:"track 01"
		},
		{
			x: 900,
			y: 350,
                        label:"track 01"
		},
		{
			x: 800,
			y: 200,
                        label:"track 01"
		},
		{
			x: 950,
			y: 300,
                        label:"track 01"
		},
		{
			x: 740,
			y: 120,
                        label:"track 01"
		},
		{
			x: 900,
			y: 320,
                        label:"track 01"
		}
	]

var Song = function(point){
    this.point = point;
};

