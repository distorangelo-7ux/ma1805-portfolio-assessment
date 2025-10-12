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

let isHovering = false;
let isActive = false;

let bgHex = '#e3ded7'

function setup() {
  createCanvas(720,720);
  startButton = createButton('Take photo?');
  startButton.position(100,50);

  startButton.mouseClicked(activateCanvas);
}

function draw() {
  background(bgHex);

  textAlign(CENTER);
  translate(0,0);

  if (isActive) {
    drawAll();
  }

  checkIfHovering();

  if (isHovering) {
    getRandomTranslate();
    textSize(100)
    fill(55, 53, 61)
    text(`${mouseX} , ${mouseY}`, 360, 360);
    textSize(25)
    fill(235, 227, 226)
    text(`imperfect`, 360, 420);
    bgHex = '#d98d86'
  } else {
    bgHex = '#e3ded7'
  }
}

function activateCanvas() {
  getRandomTranslate();
  startButton.remove();
  refreshButton = createButton('Retake photo?');
  refreshButton.position(310,600);

  refreshButton.mouseClicked(getRandomTranslate);
  isActive = true;
}

function checkIfHovering() {
  if ( 
    // Left Eye detection
    (mouseX >= 200 + leftEyeX && mouseX <= 300 + leftEyeX &&
      mouseY >= 245 + leftEyeY && mouseY <= 280 + leftEyeY) ||
    // Right Eye detection
    (mouseX >= 432 + rightEyeX && mouseX <= 532 + rightEyeX &&
      mouseY >= 270 + rightEyeY && mouseY <= 320 + rightEyeY) ||
    // Nose detection
    (mouseX >= 310 + noseX && mouseX <= 395 + noseX &&
      mouseY >= 355 + noseY && mouseY <= 390 + noseY) ||
    // Mouth detection
    (mouseX >= 310 + mouthX && mouseX <= 410 + mouthX &&
      mouseY >= 485 + mouthY && mouseY <= 515 + mouthY)
  ) {
    isHovering = true;
  } else {
    isHovering = false;
  }


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
  //fill(255,255,255)
  //rect(310,355, 85, 35)

    // Nose
  strokeWeight(6)
  line(320, 380, 360, 360)
  line(385, 380, 360, 360)
}

function drawLeftEye() {
  //fill(255,255,255)
  //rect(200,245, 100, 35)


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

  //fill(255,255,255)
  //rect(432,270, 100, 50)

  fill(43, 20, 13)
  // Right Eye
  ellipse(
    480,295,
    width,height)
}

function drawMouth(width, height) {
  //fill(255,255,255)
  //rect(310,485, 100, 30)


  fill(43, 20, 13)
  ellipse(360,500,width,height)
}