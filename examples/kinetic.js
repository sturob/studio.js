var stage, width, height, layer;

// happens on initial page load or when RELOAD is clicked
stu.onLoad = function() {
  require('http://github.com.dev/kinetic/huh.js');

  width = $(window).width();
  height = $(window).height() * 0.99;

  stage = new Kinetic.Stage({
    container:'container', width:width, height:height
  });

  layer = new Kinetic.Layer();

  var i = 0;
  stu.pauseHandler = setInterval(function() {
    stu.onTick(i++);
  }, 100);
};

stu.onTick = function(tick) {
  // clear layer?

  var tension = Math.sin( tick ); // use d3 to properly range this

  var points = [];
  for (var i = 2; i < 534; i++) {
    points.push({
      x: Math.sin(i)   * width/3.4 + width/2,
      y: Math.cos(3*i) * height/3 + height/2
    });
  }

  var spline = new Kinetic.Spline({
    points: points, stroke: '#000', opacity: 0.4,
    strokeWidth: 1, lineCap: 'round', tension: tension
  });

  layer.add(spline);
  stage.add(layer);  
}