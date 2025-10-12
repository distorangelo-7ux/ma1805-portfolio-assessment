let refreshButton;
let leftEyeX;
let leftEyeY;

let rightEyeX;
let rightEyeY;

let noseX;
let noseY;

let mouthX;
let mouthY;

function setup() {
  createCanvas(720,720);
  refreshButton = createButton('Retake photo?')
  refreshButton.position(600,600);

  refreshButton.mouseClicked(getRandomTranslate);
}

function draw() {
  background(220);
  drawAll();
}

function drawAll() {
  
  translate(leftEyeX, leftEyeY);
  drawLeftEye();
  translate(rightEyeX, rightEyeY);
  drawRightEye();
  translate(noseX, noseY);
  drawNose();
  translate(mouthX, mouthY)
  drawMouth();

}

function getRandomTranslate() {
  leftEyeX = random(-5, 5);
  leftEyeY = random(-5, 5);

  rightEyeX = random(-7, 7);
  rightEyeY = random(-8, 9);

  noseX = random(-6, 7);
  noseY = random(-3, 4);

  mouthX = random(-7, 10);
  mouthY = random(-2, 3); 
}

function drawNose() {
    // Nose
  strokeWeight(6)
  line(320, 380, 360, 360)
  line(385, 380, 360, 360)
}

function drawLeftEye() {
    // Left Eye
  strokeWeight(0)
  fill(61, 18, 6)
  quad(
     200, 272,
     250, 275,
     250, 250,
     200, 245);
  fill(43, 20, 13)
  quad(
     250, 275,
     300, 275,
     300, 250,
     250, 250);
}

function drawRightEye() {
  // Right Eye
  ellipse(
    480,295,
    92,40)
}

function drawMouth() {
  fill(43, 20, 13)
  ellipse(360,500,78,12)
}