paper = Snap "#paper"

width = paper.node.clientWidth
height = paper.node.clientHeight

margin = 50

countH = 10
countW = 20

radius = 20

appearAttr =
  r: 1

standartAttr =
  r: 20

disappearAttr =
  r: 40
  "fill-opacity": 0

flyingCircle = 
  r: 20
  stroke: "#bada55"
  strokeWidth: 5

flyingTime = 2000

flyingSpeed = 100

# flyingAnimation = (x, y, end) ->
#   Snap.animate([x, y], end, )

inRange = (value) -> Math.random() * 2 * value - value
randomInRange = (value) -> inRange(value)
randomPositive = (value) -> Math.random() * value

toCoords = do ->
  innerWidth = width - 2 * margin
  innerHeight = height - 2 * margin

  inRow = innerWidth / (countW - 1)
  inColumn = innerHeight / (countH - 1)

  (cellx, celly) ->
    return [margin + cellx * inRow, margin + celly * inColumn]

do ->
  console.log innerWidth, innerHeight

  for i in [0...countW]
    for j in [0...countH]
      endPosition = toCoords i, j
      pp = paper.circle endPosition[0], endPosition[1], 0
      .attr appearAttr
      .animate standartAttr, 400, mina.easeout

      action = (elem) ->
        elem.animate disappearAttr, 500, mina.easeout

      beginPosition = [endPosition[0] + randomInRange(100), -randomPositive(200)]

      

      shard = paper.circle inRange(50) - 50, c[1] + inRange(100), radius
      shard.animate {cx: endPosition[0], cy: endPosition[1]}, flyingTime, mina.easeout, ((elem) -> -> elem.remove()) shard

      setTimeout action, Math.random() * 1000 + 2000, pp

###
rect = paper.rect 100, 200, 300, 400
Snap.animate [50, 100], [150, 200], (v) ->
  console.log v
  rect.attr(x: v[0], y: v[1])
, 1000, mina.easein
###