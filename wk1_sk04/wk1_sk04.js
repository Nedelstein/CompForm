// learned from Frank Poth youtube tutorial: https://www.youtube.com/watch?v=WMTv6QsAp0I

(function() {
  let buffer, context, map, size;
  let drawMap;
  let tileRed;

  buffer = document.createElement("canvas").getContext("2d");
  context = document.querySelector("canvas").getContext("2d");

  map = [ 1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,
          1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,
          1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,
          1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,
          1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,
          1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1
          ];

  size = 36;

  buffer.canvas.width = 18 * size;
  buffer.canvas.height = 6 * size;

  drawMap = function() {
    for (let index = 0; index < map.length; index++) {
      buffer.fillStyle = (map[index] == 1)?"#ca2c92":"#00ffff";
      buffer.fillRect((index % 18) * size, Math.floor(index / 18) * size, size, size);
    }
    context.drawImage(
      buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height,0, 0, context.canvas.width, context.canvas.height
    );
  };
  resize = function(event) {

    context.canvas.width = Math.floor(document.documentElement.clientWidth - 36);

    if (context.canvas.width > document.documentElement.clientHeight) {

      context.canvas.width = Math.floor(document.documentElement.clientHeight);

    }

    context.canvas.height = Math.floor(context.canvas.width * 0.5625);

    drawMap();

  };

  window.addEventListener("resize", resize, {passive:true});

  resize();

})();
