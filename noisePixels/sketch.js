// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js


var noiseR;
var noiseG;
var noiseB;


function setup() {
  createCanvas(600, 600); 
//noprotect	

}  
  function draw(){
    var time = millis();
        for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var r = map(i, 0, width, 0, 255);
      var g = map(j, 0, height, 0, 255);
      var b = map(i, 0, width, 0 ,255);
      
      noiseR = noise((r * 0.01) + time) * 255;
      noiseG = noise((g * 0.01) + (time + 10)) * 255;
      noiseB = noise((b * 0.01) + (time + 20)) * 255;
      
      
      stroke(noiseR, noiseG, noiseB);
      point(i, j);  
    }
  }
  }