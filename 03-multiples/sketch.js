let phoneWidth;
let phoneHeight;
let cornerWidth;
let cornerHeight;

let scrollDepth = 255;

let w = 360;
let h = 640;

let arrayOfShapes = [0];

function setup() {
  createCanvas(windowWidth, windowHeight);
   phoneWidth = windowWidth / 2;
   phoneHeight = windowHeight / 2;

   cornerWidth = phoneWidth - (w / 2);
   cornerHeight = phoneHeight - (h / 2);

   drawGrid();

   for (i = 0; i < 200; i++) {
    arrayOfShapes.push(0);
   }
}

let margins = 50;
let squareSize = 5;

let arrayOfArrays = [arrayOfShapes];

function draw() {

}

function drawGrid() {
  clear();
  background(scrollDepth);
  //rect(cornerWidth, cornerHeight, w, h);
  
  for (x = 0.25; x < 2; x += 0.25) {
    let i = 0;
    for (y = 0.25; y < 16; y += 0.25) {
    drawShapes(i);
    i++;
  }
}
}

function drawShapes(i) {
  let squareSize = random(5, 51);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  fill(r, g, b);
  if ( int(arrayOfShapes[i]) % 2 == 0) {
      square((cornerWidth * x) + margins, (cornerHeight + margins) * y, squareSize);
    }
    if ( int(arrayOfShapes[i]) % 2 != 0) {
      circle((cornerWidth * x) + margins, (cornerHeight + margins) * y, squareSize);
    }
}

function randomiseShapes() {
  for (i = 0; i < arrayOfShapes.length - 1; i++) {
    arrayOfShapes[i] = int(random(0, 255));
  }
}

function mouseWheel(event) {
  randomiseShapes();
  drawGrid();

  if (event.delta < 0) {
    if (scrollDepth < 255) {
      scrollDepth++;
    }
  } else {
    if (scrollDepth > 1) {
      scrollDepth--;
    }
  }
}
