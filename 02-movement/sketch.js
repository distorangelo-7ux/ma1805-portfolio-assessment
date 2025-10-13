let personAge = 55;
let activeCircle = true;

let home = "eeeYIKES i won't be leaving this house SOON!!!";
let randomVariable

function setup() {
  createCanvas(400, 400);
  let pet = "Cattttttttt";
  console.log(pet)
}

function draw() {
  background('#a9a19fff');
  randomVariable = random(20, 26)
  
  noStroke();
  circle(width/2, height/2, personAge)

  textAlign(CENTER);
  textSize(12)
  text(home, width/2, (height / 2) - randomVariable)


  if (activeCircle) {
    personAge = personAge / 0.998
  }
  //console.log(personAge)
}