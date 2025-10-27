let bg;
let img;
let hum;
let capture;
let video;

function preload() {
  bg = loadImage('media/internet.png');
  img = loadImage("media/Antenna.jpg");
  hum = loadSound("media/humm.wav");
  capture = createCapture(VIDEO);
  capture.size(10, 10);
  capture.hide();

  video = createVideo('media/TheSea.mov');
  video.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(bg, 0, 0, windowWidth, windowHeight);
  image(img, windowWidth / 2, windowHeight / 2, img.width, img.height, 0, img.height / 3)
  
  image(capture, 200, 200, capture.width * 10, capture.height * 10);
  image(video, 300, 500, 240, 320);
  filter(BLUR);
}

function mouseClicked() {
  hum.loop();
  hum.amp(0.2);
  video.loop(0.2);

  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
