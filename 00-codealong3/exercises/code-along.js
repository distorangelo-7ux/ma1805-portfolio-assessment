let whileLoop = true;
let forLoop = true;
let stringArrays = true;

let rgb = [255, 0, 0];
let select = 0;
let words = ["a", "list", "of", "wordss"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#403c3cff');
  let i = 0;
  if(select == 1) {
    rgb = [random(0,255), random(0,255), random(0,255)]
  } else {
    rgb = [255, 0, 0]
  }

  while (i < 100 && whileLoop) {
    r = random(-100,100)
    circle(r+(i*4),25+r+(i*5),2+r+i*3);
    i++;
  }

  for (let i = 0; i <= 100 && forLoop; i++) {
    r = random(-2,2)
    fill(rgb);
    square(r+i*4 + mouseX , r+i*2 + mouseY, 20*r)
  }

  if (stringArrays) {
    fill('#d1eadeff')
    textSize(30);

    for (i = 0; i < words.length ; i++) {
        text(words[i], 100 + i*50, 100)
    }
  }
}

function mouseClicked() {
    if (select == 0) {
        select = 1;
    } else {
        select = 0;
    }
}
