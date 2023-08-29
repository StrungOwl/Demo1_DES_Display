//Demo 1: Shape and Color

//Put global variables here
let c; //color

function setup() {
  createCanvas(600, 600); //w, h
  
  colorMode(HSB); //Hue, saturation, brightness 
  rectMode(CENTER);
  
  c = 0; 
  
}

function draw() {
  background(c, 53, 79); //r, g, b
  
  //SHAPES ----------------------------------------
  
  noStroke(); 
  
  fill(272, 53, 79);
  square(width/2, height*0.8, 100); //x, y, s
  
  fill(57, 53, 79); //mustard yellow
  ellipse(width*0.8, height/2, 100, 200); //X, Y, W, H
  
  fill(169, 53, 79);
  rect(width*0.2, height/2, 100, 200); //x, y, w, h 
  
  strokeWeight(10);
  stroke(0);
  fill(57, 53, 79, 0.5); //h s b a
  triangle(300, 0, 600, 300, 0, 300); 
  
  //CIRCLE ------------------------
  noStroke(); 
  fill(c+50, 53, 79);
  circle(width/2, height/2, 100); //x, y, d
  
  fill(0); 
  arc(50, 50, 80, 80, 0, HALF_PI);
  
  fill(255);
  
  beginShape();
  curveVertex(38, 483);
  curveVertex(69, 556);
  curveVertex(182, 556);
  curveVertex(38, 483);
  curveVertex(185, 502);
  endShape(); 

  c += 1;
  c = c%360; 
}

function mousePressed(){
  console.log(mouseX, mouseY);
}