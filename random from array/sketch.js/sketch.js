function setup() {
    createCanvas(600, 600);
    ellipseMode(CENTER);
    noStroke();
}

let randomValues = [3, 134, 211, 127, 22, 39, 242, 129, 40, 56, 71, 46, 205, 174, 172, 225, 184, 107, 84, 47, 77, 61, 112, 254, 195, 94, 116, 137, 59, 152, 84, 42, 136, 176, 217, 50, 209, 205, 142, 106, 53, 38, 111, 201, 135, 28, 165, 138, 173, 175, 210, 241, 28, 38, 169, 89, 93, 66, 109, 43, 11, 62, 17, 50, 192, 209, 141, 108, 103, 156, 227, 253, 226, 178, 55, 177, 31, 236, 231, 94, 190, 48, 143, 237, 102, 66, 252, 185, 216, 4, 231, 70, 9, 146, 174, 36, 81, 115, 207, 165];
let i = 0;
function draw() {
    background(50);
    fill(randomValues[i], randomValues[i+1], randomValues[i+2]);
    ellipse(300, 300, 400, 400);
    i++;
    
    if (i === 90){
        i = 0;
    }
    // noLoop();
    
}