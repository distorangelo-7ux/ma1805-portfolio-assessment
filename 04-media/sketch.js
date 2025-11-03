let TimerObject;
let mouseWasPressed = false;
let timerStarted = false;
let currentImage = 0;
let currentArray = [];

let profile = -1;
let appear = false;
let videoPlay = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  TimerObject = new Timer(1000);
  TimerVideo = new Timer(250);
  TimerAppear = new Timer(500);
  TimerOther = new Timer(45);

  SlideShowObject = new Slideshow();
  VideoObject = new Slideshow();

  VideoObject.setArray(vidArray);
}

function draw() {
  background(0);
  if (!appear) image(bg, 0, 0, windowWidth, windowHeight);
  if (mouseWasPressed) {
    playMedia();
  }
}

function playMedia() {
  TimerObject.timerLoop();
  
    // Function to play video
    if (videoPlay) {
      TimerVideo.timerLoop();
      VideoObject.displayVideo(profile);
    }

    // Countdown to making images appear 
    if (!appear) TimerAppear.timerLoop(); 

    // Function to make iamges appear
    if (appear) {
      SlideShowObject.displayImage(currentImage);
      TimerOther.timerLoop();
    }

    // Timed action to stop video
    if (TimerVideo.timerAction(3.75)) {
      VideoObject.stopVideo(profile);
      videoPlay = false;
    }

    // Timed action to start slideshow
    if (TimerAppear.timerAction(1.5)) {
      TimerAppear.timerReset();
      appear = true;
    }

    // Timed action to cycle inbetween images
    if (TimerOther.timerAction(0.045)) {
      TimerOther.timerReset();
      currentImage++;

      if (currentImage > currentArray.length - 2) {
        currentImage = 0;
      }
    }

    // Timed action to stop everything
    if (TimerObject.timerAction(5)) {
      TimerObject.timerReset();
      TimerOther.timerReset();
      TimerVideo.timerReset();

      videoPlay = true;
      mouseWasPressed = false;
      appear = false;
    }
}

function mousePressed() {
  if (!mouseWasPressed) {
    cycle();
    mouseWasPressed = true;
  }
}

function cycle() {
  profile++;
  if (profile > mediaArray.length - 1) {
    profile = 0;
  }

  arrayCopy(mediaArray[profile], currentArray);
  SlideShowObject.setArray(currentArray);
  videoPlay = true;
}