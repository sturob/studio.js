studio.js
=========

browser-based livecoding environment


Objectives
----------

fearless livecoding (versioning built in)

play with code

inputs: live code, libs, data, css, kb, mouse, osc, camera

visualisable dependent/computed properties

primary libs (demos with): d3, paper.js, three.js, two.js, Timbre.js, KineticJS

outputs: canvas, svg, webaudio, data

exports: .png .gif .wav .json .js


inputs
------

livecode: codemirror

libs: require()

css: ?

osc: websockets

camera: getusermedia



???
---

CORE q: how to separate code into different load frequencies

CORE q: how 

embed for computed properties?

require()

modes? paused/step/play
onkeyup, onchange, onreload

current: paper.js canvas initial instant unpause

| loop                   | interrupt                      |
|---------------------------------------------------------|
| onTick onRequestFrame  | onChange onData onPlay onPause |




Tools to use
------------
require.js
bower
grunt
yeoman

Examples
--------

<!-- require('http://somelocalproject.dev', 'onPlay') // can put in onPlay for now -->

### livecode

	stu.onLoad  = function() {
		require('http://github.com.dev/whatever/huh.js');
	}
	stu.onTick  = function() {}
	stu.onPlay  = function() {}
	stu.onPause = function() {}
	stu.onData  = function() {}

	// stu.onCode  = function() {}


Inspired by
-----------

<http://tinker.io>

<http://tributary.io> enjalot/tributary

<http://mistakes.io> tmcw/mistake

<http://livecoding.io> gabrielflorit/livecoding