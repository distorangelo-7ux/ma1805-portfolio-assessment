function setup() {
  createCanvas(400, 400);
  frameRate(12);
}

let x = 34;
let speed = 0.1;
let startingHeight = 490;
let isHit = false;

function draw() {
  background(56,61,64);

  //circle(25,200,10)
  //circle(375,200,10)

  rect(25,165,8,70);
  rect(367,165,8,70);

  //circle(200,200,10)
  //square(34,198,8)
  //square(358,198,8)

  for (let y = 384; y > 0; y -= 22) {
      noStroke();
      rect(197, y, 6, 10);
  }

  // Calculate difference in position
  let deltaX = speed * deltaTime;
  // Add to X position

  // Reset to 0 if greater than 400
  //if (x > 357) x = 0;

  if (x < 358 && !isHit) {
    x += deltaX;
  } else {
    x -= deltaX;
    isHit = true;
  }

  if (isHit && x < 37) {
    isHit = false;
  }

  square(x, 198, 8);
}
