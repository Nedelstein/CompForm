let radius;
let pos;
let x, y;
let xOffset = 1000;
let yOffset = 1000;
let noiseScale = 340;
let g, b;

function setup(){
	createCanvas(windowWidth, windowHeight);
	smooth();
}

function draw(){
	background(127);
	blob(x,y);
}	

function blob(){
		radius = 40;
		noStroke();

		g = map(mouseY, 0, height, 0, 255);
		b = map(mouseX, 0, width, 0,255);

		push();
		translate(width/2, height/2);

		fill(255,g,b);
		beginShape();
		for(let a = 0; a < TWO_PI; a +=TWO_PI/radius){
			let x = radius * sin(a);
			let y = radius * cos(a);

			let new_x = x + (noise(((x + xOffset)/noiseScale), ((y + yOffset)/noiseScale))) * 100 * sin(a);
			let new_y = y + (noise(((x + xOffset)/noiseScale), ((y + yOffset)/noiseScale))) * 100 * cos(a);


			vertex(new_x,new_y);
			// ellipse(x,y,5,5);

			new_x +=mouseX;
			new_y+=mouseY;
			
		}
		endShape();
		pop();

		
		push();
		translate(width/3, height/3);
		beginShape();
		fill(b,g,255);
		for(let a = 0; a < TWO_PI; a +=TWO_PI/radius){
			let x = radius * sin(a);
			let y = radius * cos(a);

			let new_x = x + (noise(((x + xOffset)/noiseScale) * 10, ((y + yOffset)/noiseScale))) * 100 * sin(a * 5);
			let new_y = y + (noise(((x + xOffset)/noiseScale), ((y + yOffset)/noiseScale))) * 100 * cos(a);


			vertex(new_x,new_y);
			// ellipse(x,y,5,5);

			new_x +=mouseX;
			new_y+=mouseY;
			
		}
		endShape();
		pop();


		push();
		translate(width/1.5, height/1.5);

		fill(g, 255, b);
		beginShape();
		for(let a = 0; a < TWO_PI; a +=TWO_PI/radius){
			let x = radius * sin(a);
			let y = radius * cos(a);

			let new_x = x + (noise(((x + xOffset)/noiseScale), ((y + yOffset)/noiseScale))) * 100 * sin(a * 2);
			let new_y = y + (noise(((x + xOffset)/noiseScale) * 10, ((y + yOffset)/noiseScale))) * 100 * cos(a * 5);


			vertex(new_x,new_y);
			// ellipse(x,y,5,5);

			new_x +=mouseX;
			new_y+=mouseY;
			
		}
		endShape();
		pop();


		xOffset +=3;
		yOffset +=3;
		
}