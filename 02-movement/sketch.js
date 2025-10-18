
let defaultArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
let emptyArray = [];
let positioningArray = [];

let articleRandom = ["those","these","your","the","my","their","his","her","heaven's","life's","our"];
let nounRandom = ["programs","wires","machines","systems","minds","engines","designs","variables","networks","hearts","creatures","ecosystems", "circuits","words"];
let linkingRandom = ["are","were","fail,","succeed,"];
let adverbRandom = ["still","slowly","rapidly","adamantly","desperately","carefully","calmly","gently","critically","proudly","secretly"];
let verbRandom = ["imagining","sleeping","speaking","sparking","thinking","creating","crying","evolving","climbing", "watching", "connecting","grasping","losing","fading","falling","failing","reading","writing","weaving","running","walking","flying","reading","fighting","saving","laughing","smiling","cheering","beating","winning","existing"];

let chosenArticle = [];
let rangeArticle = [];
let displayArticle = [];
let scrambleArticle = [];
let posArticle;

let chosenNoun = [];
let rangeNoun = [];
let displayNoun = [];
let scrambleNoun = [];
let posNoun;

let chosenLinking = [];
let rangeLinking = [];
let displayLinking = [];
let scrambleLinking = [];
let posLinking;

let chosenAdverb = [];
let rangeAdverb = [];
let displayAdverb = [];
let scrambleAdverb = [];
let posAdverb;

let chosenVerb = [];
let rangeVerb = [];
let displayVerb = [];
let scrambleVerb = [];
let posVerb;

let scrambleValue = 0;

let posX = 0;
let posY = 200;

function setup() {
  createCanvas(400, 400);

    //console.log(randomScramble);
  setInterval(scrambleFunction, 100);
  initiateAll();

  startButton = createButton('refresh');
  startButton.position(100,50);

  startButton.mouseClicked(initiateAll);

}

function draw() {
  scrambleZeros(displayNoun, scrambleNoun, posNoun);
  scrambleZeros(displayArticle, scrambleArticle, posArticle);
  scrambleZeros(displayLinking, scrambleLinking, posLinking);
  scrambleZeros(displayAdverb, scrambleAdverb, posAdverb);
  scrambleZeros(displayVerb, scrambleVerb, posVerb);
}

function initiateAll() {
  initiateVariables( chosenArticle, displayArticle, scrambleArticle, rangeArticle, articleRandom );
  initiateVariables( chosenNoun, displayNoun, scrambleNoun, rangeNoun, nounRandom );
  initiateVariables( chosenLinking, displayLinking, scrambleLinking, rangeLinking, linkingRandom );
  initiateVariables( chosenAdverb, displayAdverb, scrambleAdverb, rangeAdverb, adverbRandom );
  initiateVariables( chosenVerb, displayVerb, scrambleVerb, rangeVerb, verbRandom );
}

function initiateVariables(chosen, display, scramble, range, random) {
  arrayCopy(defaultArray, display);
  arrayCopy(defaultArray, scramble);

  wipeAll(chosen);
  wipeAll(range);

  setPositions(100, 50)

  scrambleArray(scramble);
  setWord(chosen, random, range);
}

function wipeAll(array) {
  for (i = 0; i < array.length - 1; i++) {
    array.pop();
  }
}

function setPositions(starting, spacing) {
  arrayCopy(emptyArray, positioningArray)
  positioningArray.push(starting)
  let startValue = starting;

  for (i = 0; i < 4; i++) {
    positioningArray.push( startValue+=spacing )
  }

  posArticle = positioningArray[0];
  posNoun = positioningArray[1];
  posLinking = positioningArray[2];
  posAdverb = positioningArray[3];
  posVerb = positioningArray[4];
}

function scrambleArray(randomScramble) {
  for (i = 0; i < randomScramble.length; i++) {
    randomScramble[i] = int(random(2, 5)).toString();
  }
}

function scrambleFunction() {
  checkScramble(displayNoun, scrambleNoun, rangeNoun, chosenNoun, posNoun);
  checkScramble(displayArticle, scrambleArticle, rangeArticle, chosenArticle, posArticle);
  checkScramble(displayLinking, scrambleLinking, rangeLinking, chosenLinking, posLinking);
  checkScramble(displayAdverb, scrambleAdverb, rangeAdverb, chosenAdverb, posAdverb);
  checkScramble(displayVerb, scrambleVerb, rangeVerb, chosenVerb, posVerb);
}

function drawLines() {
  clear();
  background('#19191aff');
  posX = -30;

  for (i = 0; i < defaultArray.length; i++) {
    textSize(30);
    fill('#5cdb86ff')

    //if (displayArray[i].match("I")) {
      //posX += 5;
    //}

    text(displayNoun[i], posX, posNoun);
    text(displayArticle[i], posX, posArticle);
    text(displayLinking[i], posX, posLinking);
    text(displayAdverb[i], posX, posAdverb);
    text(displayVerb[i], posX, posVerb);

    //if (displayArray[i].match("I")) {
      //posX -= 15;
    //}

    posX += 30;
  }
}

function scrambleZeros(array, randomLength, posY) {
  for (index = 0; index < array.length; index++) {
    if (randomLength[index] != 0) {
      array[index] = int( random(0, 9) ).toString();
    }
  }

  drawLines(array, posY);
}

function setWord(subject, nounRandom, wordRange) {
  let randomWordIndex = int(random(0, nounRandom.length ))
  let chosenIndividual = nounRandom[randomWordIndex].toUpperCase().split("");

  arrayCopy(chosenIndividual, subject);

  let wordLength = int(subject.length);
  let startingIndex = int( int(defaultArray.length / 2)  - int(wordLength / 2));

  wordRange[0] = startingIndex;
  wordRange[1] = startingIndex + wordLength - 1;

}

function checkScramble(displayArray, randomScramble, wordRange, wordChosen, posY) {

  if (!checkIfScrambleFinished(randomScramble)) {
    for (i = 0; i < randomScramble.length; i++) {
      reduceScramble(i, displayArray, randomScramble, wordRange, wordChosen, posY);
    }
  }
}

function reduceScramble(index, displayArray, randomLength, wordRange, wordChosen) {
    scrambleValue = int(randomLength[index]);
    if (scrambleValue > 0) {
      scrambleValue--;
      if (scrambleValue == 0) {
        replaceIndex(index, wordRange, wordChosen, displayArray, posY);
      }
    }

    randomLength[index] = scrambleValue;
}

function replaceIndex(index, wordRange, wordChosen, displayArray, posY) {
  if (index >= wordRange[0] && index <= wordRange[1]) {
    displayArray[index] = wordChosen[ index - wordRange[0] ];
  } else {
    displayArray[index] = " ";
  }

  drawLines(displayArray, posY);
}

function checkIfScrambleFinished(randomScramble) {
  let sum = 0;
  for (i = 0; i < randomScramble.length; i++) {
    sum += int(randomScramble[i]);
  }

  if (sum == 0) {
    return true;
  }

  return false;
}