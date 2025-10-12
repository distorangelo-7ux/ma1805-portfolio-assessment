let refreshButton;

let rightEyeWidth = 92;
let rightEyeHeight = 40;

let mouthWidth = 78;
let mouthHeight = 12;

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
  refreshButton.position(310,600);

  refreshButton.mouseClicked(getRandomTranslate);
}

function draw() {
  background(220);
  drawAll();
}

function drawAll() {
  
  // Left eye drawing
  translate(leftEyeX, leftEyeY);
  drawLeftEye();
  
  // Right eye drawing - scale is randomised as well
  translate(rightEyeX, rightEyeY);
  drawRightEye(rightEyeWidth, rightEyeHeight);
  
  // Nose drawing
  translate(noseX, noseY);
  drawNose();

  // Mouth drawing - scale is randomised as well
  translate(mouthX, mouthY)
  drawMouth(mouthWidth, mouthHeight);

}

function getRandomTranslate() {
  leftEyeX = random(-5, 5);
  leftEyeY = random(-5, 5);

  rightEyeX = random(-7, 7);
  rightEyeY = random(-8, 9);

  rightEyeWidth = random(85, 100);
  rightEyeHeight = random(25, 62);

  noseX = random(-6, 7);
  noseY = random(-3, 4);

  mouthX = random(-7, 10);
  mouthY = random(-2, 3); 

  mouthWidth = random(75, 80);
  mouthHeight = random(5, 20);
}

function drawNose() {
    // Nose
  strokeWeight(6)
  line(320, 380, 360, 360)
  line(385, 380, 360, 360)
}

function drawLeftEye() {
    // Left Eye
    // Coloured part first
  strokeWeight(0)
  fill(61, 18, 6)
  quad(
     200, 272,
     250, 275,
     250, 250,
     200, 245);
  // Uncoloured part here
  fill(43, 20, 13)
  quad(
     250, 275,
     300, 275,
     300, 250,
     250, 250);
}

function drawRightEye(width, height) {
  // Right Eye
  ellipse(
    480,295,
    width,height)
}

function drawMouth(width, height) {
  fill(43, 20, 13)
  ellipse(360,500,width,height)
}