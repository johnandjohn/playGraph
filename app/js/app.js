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
                        label:"offspring"
		},
		{
			x: 30,
			y: 30,
                        label:"gunther"
		},
		{
			x: 50,
			y: 25,
                        label:"bloodhoung gang"
		},
		{
			x: 60,
			y: 200,
                        label:"linkin park"
		},
		{
			x: 90,
			y: 230,
                        label:"savant"
		},
		{
			x: 400,
			y: 300,
                        label:"tac tac"
		},
		{
			x: 100,
			y: 220,
                        label:"piste x"
		},
		{
			x: 200,
			y: 20,
                        label:"piste y"
		},
		{
			x: 150,
			y: 450,
                        label:"piste z"
		},
		{
			x: 70,
			y: 80,
                        label:"piste a"
		},
		{
			x: 400,
			y: 80,
                        label:"piste b"
		},
		{
			x: 430,
			y: 90,
                        label:"piste c"
		},
		{
			x: 420,
			y: 65,
                        label:"piste d"
		},
		{
			x: 380,
			y: 320,
                        label:"piste e"
		},
		{
			x: 490,
			y: 340,
                        label:"piste f"
		},
		{
			x: 400,
			y: 400,
                        label:"piste f"
		},
		{
			x: 480,
			y: 360,
                        label:"piste f"
		},
		{
			x: 420,
			y: 490,
                        label:"piste f"
		},
		{
			x: 700,
			y: 750,
                        label:"just beat it"
		},
		{
			x: 650,
			y: 730,
                        label:"piste f"
		},
		{
			x: 900,
			y: 850,
                        label:"piste f"
		},
		{
			x: 800,
			y: 600,
                        label:"piste f"
		},
		{
			x: 850,
			y: 610,
                        label:"piste f"
		},
		{
			x: 640,
			y: 880,
                        label:"piste f"
		},
		{
			x: 900,
			y: 350,
                        label:"piste f"
		},
		{
			x: 800,
			y: 200,
                        label:"piste f"
		},
		{
			x: 950,
			y: 300,
                        label:"piste f"
		},
		{
			x: 740,
			y: 120,
                        label:"piste f"
		},
		{
			x: 900,
			y: 320,
                        label:"piste f"
		}
	]

var Song = function(point){
    this.point = point;
};

