let select = 0;
let size = 0;
let rgba = [20, 20, 20, 20];

function setup() {
    frameRate(20);
    noStroke();
    createCanvas(800, 800);
}

function draw() {
  //background(245);
  fill(rgba);
  square(mouseX, mouseY, size);

  if (select != 2) {
    //size = random(10, 200);
  }

}

function mouseClicked() {
    console.log('select: ' + select);
    rgba[select] = random(0,255);
    rgba[3] = random(5,50);
    select++;

    if(select >= 3) {
        console.log('reset select');
        select = 0;
    }
    return false;
}

function mouseWheel(event) {
    if (event.delta > 0) {
        size = int(size+=1);
        console.log(size);
        if (size > 200) {
            size = 0;
        }
    } else {
        if (size > 0) {
            size--;
        }
    }
}