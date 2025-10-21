let row = 20;
col = 20;
pad = 5;
let sWidth, sHeight;
let rgba = [87, 163, 221, 255];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sWidth = (width / col) - (pad + (pad / col));
  sHeight = (height / row) - (pad + (pad /row ));
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(200);

  for (let iY = 0; iY < row; iY++) {

    for (let iX = 0; iX < col; iX++) {
        let x = pad + (iX * sWidth) + (pad * iX) + (sWidth / 2)
        let y = pad + (iY * sHeight) + (pad * iY) + (sHeight / 2);

        fill(rgba);
        rect(x, y, sWidth, sHeight);
    }
  }
}
