let x, y;
function setup() {
createCanvas(720, 400);
x = width / 2;
y = height;
}
function draw() {
background(193,50,104);  
strokeWeight(5);
fill(50,193,139);
ellipse(x,y,250,175);  
x = x + random(-1, 1);
y = y - 1;  
if (y < 0) {
    y = height;
  }
}