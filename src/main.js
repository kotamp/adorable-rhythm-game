// Generated by CoffeeScript 1.12.7
(function() {
  var appearAttr, countH, countW, disappearAttr, flyingCircle, flyingTime, height, inRange, margin, paper, radius, standartAttr, toCoords, width;

  paper = Snap("#paper");

  width = paper.node.clientWidth;

  height = paper.node.clientHeight;

  margin = 50;

  countH = 10;

  countW = 20;

  radius = 20;

  appearAttr = {
    r: 1
  };

  standartAttr = {
    r: 20
  };

  disappearAttr = {
    r: 40,
    "fill-opacity": 0
  };

  flyingCircle = {
    r: 20,
    stroke: "#bada55",
    strokeWidth: 5
  };

  flyingTime = 2000;

  inRange = function(value) {
    return Math.random() * 2 * value - value;
  };

  toCoords = (function() {
    var inColumn, inRow, innerHeight, innerWidth;
    innerWidth = width - 2 * margin;
    innerHeight = height - 2 * margin;
    inRow = innerWidth / (countW - 1);
    inColumn = innerHeight / (countH - 1);
    return function(cellx, celly) {
      return [margin + cellx * inRow, margin + celly * inColumn];
    };
  })();

  (function() {
    var action, c, i, j, k, pp, ref, results;
    console.log(innerWidth, innerHeight);
    results = [];
    for (i = k = 0, ref = countW; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
      results.push((function() {
        var l, ref1, results1;
        results1 = [];
        for (j = l = 0, ref1 = countH; 0 <= ref1 ? l < ref1 : l > ref1; j = 0 <= ref1 ? ++l : --l) {
          c = toCoords(i, j);
          pp = paper.circle(c[0], c[1], 0).attr(appearAttr).animate(standartAttr, 400, mina.easeout);
          action = function(elem) {
            return elem.animate(disappearAttr, 500, mina.easeout);
          };
          console.log(flyingTime);
          console.log(c);
          paper.circle(inRange(50) - 50, c[1] + inRange(100), radius).animate({
            cx: c[0],
            cy: c[1]
          }, flyingTime, mina.easeout);
          results1.push(setTimeout(action, Math.random() * 1000 + 2000, pp));
        }
        return results1;
      })());
    }
    return results;
  })();


  /*
  rect = paper.rect 100, 200, 300, 400
  Snap.animate [50, 100], [150, 200], (v) ->
    console.log v
    rect.attr(x: v[0], y: v[1])
  , 1000, mina.easein
   */

}).call(this);