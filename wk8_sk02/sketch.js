var rightBorder = 290;
var leftBorder = 10;
var topBorder = 10;
var bottomBorder = 590;
var indent = 20;
indentSmall = 10;

var rectSize = 100;

var bottomRight = new Point(rightBorder, bottomBorder);
var topRight = new Point(rightBorder, topBorder);
var topLeft = new Point(leftBorder, topBorder);
var bottomLeft = new Point(leftBorder, bottomBorder);

var path = new Path();
var diamond = new Rectangle(
  new Point(
    rightBorder / 2 - rectSize / 2 + 5,
    bottomBorder / 2 - rectSize / 2 + 5
  ),
  new Size(rectSize, rectSize)
);

var path2 = new Path.Rectangle(diamond);
// path2.fillColor = "blue";
path2.strokeColor = "blue";
path2.rotate(45);

path.strokeColor = "red";
path.strokeWidth = 2;
path.moveTo(bottomRight);

// path.lineTo(bottomRight + [0, -580]);
path.lineTo(topRight);
path.lineTo(topLeft);
path.lineTo(bottomLeft);
path.lineTo(bottomRight - [indent, 0]);
for (var i = 0; i < 14; i++) {
  path.lineTo(topRight - [indent, -indent]);
  path.lineTo(topLeft - [-indent, -indent]);
  path.lineTo(bottomLeft - [-indent, indent]);
  path.lineTo(bottomRight - [20 + indent, indent]);
  indent += 20;
}

var path3 = new Path();
path3.strokeColor = "red";

path3.moveTo(bottomRight - [indentSmall, 0]);

// path.lineTo(bottomRight + [0, -580]);
path3.lineTo(topRight - [indentSmall, -indentSmall]);
path3.lineTo(topLeft - [-indentSmall, -indentSmall]);
path3.lineTo(bottomLeft - [-indentSmall, indentSmall]);
path3.lineTo(bottomRight - [indentSmall * 3, indentSmall]);

path3.lineTo(topRight - [indentSmall + 20, indentSmall - 40]);
path3.lineTo(topLeft - [-indentSmall - 20, -indentSmall - 20]);
path3.lineTo(bottomLeft - [-indentSmall - 20, indentSmall + 20]);
path3.lineTo(bottomRight - [20 + indentSmall + 20, indentSmall + 20]);

var borderRect = new Rectangle(
  new Point(leftBorder - 10, topBorder - 10),
  new Size(rightBorder + 10, bottomBorder + 10)
);

var border = new Path.Rectangle(borderRect);
border.strokeColor = "blue";
