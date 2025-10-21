let rectX = [75, 150, 225, 300];
let rectY = [0, 15, 30, 45];
let speedsX = [1.5, 20, 11, 4];
let speedsY = [3, 10, 5.5, 2];
let rgbValues = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
];

let speed = 3;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(20);
  //fill(255);

  for (let i = 0; i < rectY.length; i++) {
    fill(rgbValues[i])
    // The length of array rectY determines how many rectangles are in the canvas

    //let x = ( i + 1 ) * 100 - 50;
    // i+1 guarantees it does not start at 0
    // '*100' determines the gap between rectangles
    // I've added a '-50' to accomodate for the fourth rectangle

    let x = rectX[i] + speedsX[i];
    // 75 is the starting offset, *5 to change gap inbetween

    let y = rectY[i] + speedsY[i];
    // rectY[i] accesses each rectangle's specific Y value

    rect(x, y, 50, 25);

    //rectY[i] = (y) % height;

    if (y >= height) {
        y = 0;
        rgbValues[i] = [
            int(random(0,255)), 
            int(random(0,255)), 
            int(random(0,255))
        ]
    }

    if (x >= height) {
        x = 0;
    }

    rectY[i] = y;
    rectX[i] = x;

    // Both of these are actually responsible for the "movement" of these rectangles. Keep in mind the position of these rectangles are recorded in the list, so these functions add onto said list
  }
}
