studio.js
=========

browser-based livecoding environment


Objectives
----------

fearless livecoding (versioning built in)

play with code

inputs: live code, libs, data, css, kb, mouse, osc, camera

visualisable dependent/computed properties

primary libs (demos with): d3, paper.js, three.js, two.js, Timbre.js

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

tabs vs sections

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


Inspired by
-----------

<http://tinker.io>

<http://tributary.io> enjalot/tributary

<http://mistakes.io> tmcw/mistake

<http://livecoding.io> gabrielflorit/livecoding