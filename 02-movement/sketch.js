let personAge = 55;
let activeCircle = true;

let home = "eeeYIKES i won't be leaving this house SOON!!!";

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus rutrum, efficitur sapien sed, pulvinar mi. Aliquam quis pharetra orci. Integer rutrum, magna sit amet condimentum scelerisque, erat turpis dapibus sem, sed interdum dui diam a arcu. Donec nec gravida sem, vitae dignissim enim. Proin tristique faucibus est, eu fringilla nisl vehicula vitae. Quisque vel elementum nibh. Quisque nec enim non leo condimentum accumsan. Maecenas ac dapibus lectus. Fusce tellus augue, commodo vitae urna non, varius euismod lacus."

const loremIpsumArray = loremIpsum.split(" ")

let randomWord = 0;
let wordRepeats = [];
let wordCount = loremIpsumArray.length
let isRepeated = false;

function setup() {
  createCanvas(400, 400);
  let pet = "Cattttttttt";
  console.log(pet);
  frameRate(10);
}

function draw() {
  background('#a9a19fff');
  randomVariable = int(random(50, 57))

  noStroke();
  fill(138, 245, 39, 128)
  circle(width/2, height/2, personAge)

  textAlign(CENTER);
  textSize(12)

  if (wordCount > 0) {
    randomise();
    text(loremIpsumArray[randomWord], width/2, (height / 2) - randomVariable)
  }

  text(wordCount, width/3, height/3)

}

function randomise() {
  randomWord = int(random(0, loremIpsumArray.length))

  if (!wordRepeats.includes(randomWord)) {
    wordRepeats.push(randomWord);
    wordCount--;
  } else {
    randomise();
  }
}