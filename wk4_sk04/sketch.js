
let w = 800;
let h = 800;
let x, y, z;
let offset = 100;

function setup (){
	createCanvas(w,h);
	angleMode(DEGREES);

	createP('Amplitude X');
	amplitude_sliderX = createSlider(0, 150, 0);

	createP('Amplitude Y');
	amplitude_sliderY = createSlider(0,150,0);

}

function draw(){
	background(0);
	makeShape(Math.floor(w * 0.4));
}


function rings(radius){

	beginShape();
// 	translate(100,100, 0);
	
	stroke(255);
	noFill();
	strokeWeight(0.5);
	let numPoints = 500;
	
	for (let i = 0; i < numPoints; i++){
		push();
		translate(0, 0, 0);
		x = (w * 0.5) + radius * cos(i * TWO_PI );
		y = (h * 0.5) + radius * sin(i * TWO_PI );
		z =0;
		// vertex(x,y);
		
		shapeNoiseX = noise((x * offset), ((y * offset))) * amplitude_sliderX.value() * cos(i);
		shapeNoiseY = noise((x * offset), ((y * offset))) * amplitude_sliderY.value() * sin(i);

		let new_x = x + shapeNoiseX;
		let new_y = y + shapeNoiseY;

		// vertex(x+shapeNoiseX, y+shapeNoiseY);
		vertex(new_x, new_y);
		offset +=0.002;
			
	}
endShape();
pop();
}

function makeShape(numRings){
	for (let i = 0; i < numRings; i+=6){
		rings(i);
	}
}