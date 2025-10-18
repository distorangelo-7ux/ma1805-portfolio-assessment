
let defaultArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
let emptyArray = [];
let positioningArray = [];

let articleRandom = ["those","these","your","the","my","their","his","her","heaven's","life's","our"];
let nounRandom = ["programs","wires","machines","systems","minds","engines","designs","variables","networks","hearts","creatures","ecosystems", "circuits","words","desires"];
let linkingRandom = ["are","were","fail,","succeed,"];
let adverbRandom = ["still","slowly","rapidly","adamantly","desperately","carefully","calmly","gently","critically","proudly","secretly"];
let verbRandom = ["imagining","sleeping","speaking","sparking","thinking","creating","crying","evolving","climbing", "watching", "connecting","grasping","losing","fading","falling","failing","reading","writing","weaving","running","walking","flying","reading","fighting","saving","laughing","smiling","cheering","beating","winning","existing"];
let emptyRandom = [" ", " ", " "]

let placeholder1;
let placeholder2;
let placeholder3;

let article;
let noun;
let linking;
let adverb;
let verb;

let placeholder4;
let placeholder5;
let placeholder6;

let scrambleValue = 0;

let posX = 0;
let posY = 200;

class Word {
  constructor( randomList, chosenWord, range, display, scramble, position ) {
    this.randomList = randomList;
    this.chosenWord = chosenWord;
    this.range = range;
    this.display = display;
    this.scramble = scramble;
    this.position = position;

    this.refresh();
  }
  
  zeroScramble() {
    for (i = 0; i < this.display.length; i++) {
      if (this.scramble[i] != 0) {
        this.display[i] = int( random(0, 9) ).toString();
      }
    }
  }

  refresh() {
    arrayCopy(defaultArray, this.display);
    arrayCopy(defaultArray, this.scramble);

    wipeAll(this.chosenWord);
    wipeAll(this.range);

    this.scrambleArray(this.scramble);
    this.setWord(this.chosenWord, this.randomList, this.range);
  }

  setWord(chosenWord, randomList, range) {
    let randomWordIndex = int(random(0, randomList.length ))
    let chosenIndividual = randomList[randomWordIndex].toUpperCase().split("");

    arrayCopy(chosenIndividual, chosenWord);

    let wordLength = int(chosenWord.length);
    let startingIndex = int( int(defaultArray.length / 2)  - int(wordLength / 2));

    range[0] = startingIndex;
    range[1] = startingIndex + wordLength - 1;
  }

  scrambleArray(scramble) {
    for (i = 0; i < scramble.length; i++) {
      scramble[i] = int(random(2, 5)).toString();
    }
  }

  updateDisplay(index) {
    if (index >= this.range[0] && index <= this.range[1]) {
      this.display[index] = this.chosenWord[ index - this.range[0] ];
    } else {
      this.display[index] = " ";
    }
  }

}

function setup() {
  createCanvas(400, 400);
  setPositions(60, 30);
  
  placeholder1 = new Word( emptyRandom, [], [], [], [], positioningArray[0]);
  placeholder2 = new Word( emptyRandom, [], [], [], [], positioningArray[1]);
  placeholder3 = new Word( emptyRandom, [], [], [], [], positioningArray[2]);

  article = new Word( articleRandom, [], [], [], [], positioningArray[3]);
  noun = new Word( nounRandom, [], [], [], [], positioningArray[4]);
  linking = new Word( linkingRandom, [], [], [], [], positioningArray[5]);
  adverb = new Word( adverbRandom, [], [], [], [], positioningArray[6]);
  verb = new Word( verbRandom, [], [], [], [], positioningArray[7]);

  placeholder4 = new Word( emptyRandom, [], [], [], [], positioningArray[8]);
  placeholder5 = new Word( emptyRandom, [], [], [], [], positioningArray[9]);
  placeholder6 = new Word( emptyRandom, [], [], [], [], positioningArray[10]);
 
  setInterval(scrambleFunction, 100);
  //initiateAll();
}

function mouseClicked() {
  article.refresh();
  noun.refresh();
  linking.refresh();
  adverb.refresh();
  verb.refresh();

  placeholder1.refresh();
  placeholder2.refresh();
  placeholder3.refresh();
  placeholder4.refresh();
  placeholder5.refresh();
  placeholder6.refresh();
}

function draw() {
  article.zeroScramble();
  noun.zeroScramble();
  linking.zeroScramble();
  adverb.zeroScramble();
  verb.zeroScramble();

  placeholder1.zeroScramble();
  placeholder2.zeroScramble();
  placeholder3.zeroScramble();
  placeholder4.zeroScramble();
  placeholder5.zeroScramble();
  placeholder6.zeroScramble();

  drawLines();
}

function wipeAll(array) {
  for (i = 0; i < array.length + 1; i++) {
    array.pop();
  }
}

function setPositions(starting, spacing) {
  arrayCopy(emptyArray, positioningArray)
  positioningArray.push(starting)
  let startValue = starting;

  for (i = 0; i < 10; i++) {
    positioningArray.push( startValue+=spacing )
  }
}

function scrambleFunction() {
  checkScramble(article);
  checkScramble(noun);
  checkScramble(linking);
  checkScramble(adverb);
  checkScramble(verb);

  checkScramble(placeholder1);
  checkScramble(placeholder2);
  checkScramble(placeholder3);
  checkScramble(placeholder4);
  checkScramble(placeholder5);
  checkScramble(placeholder6);

}

function drawLines() {
  clear();
  background('#19191aff');
  posX = -30;

  for (i = 0; i < defaultArray.length; i++) {
    textFont('Courier New');
    textSize(30);
    fill('#5cdb86ff')

    text(placeholder1.display[i], posX, placeholder1.position);
    text(placeholder2.display[i], posX, placeholder2.position);
    text(placeholder3.display[i], posX, placeholder3.position);

    text(article.display[i], posX, article.position);
    text(noun.display[i], posX, noun.position);
    text(linking.display[i], posX, linking.position);
    text(adverb.display[i], posX, adverb.position);
    text(verb.display[i], posX, verb.position);

    text(placeholder4.display[i], posX, placeholder4.position);
    text(placeholder5.display[i], posX, placeholder5.position);
    text(placeholder6.display[i], posX, placeholder6.position);

    posX += 30;
  }
}

function checkScramble(wordObject) {
  let randomScramble = wordObject.scramble;

  if (!checkIfScrambleFinished(randomScramble)) {
    for (i = 0; i < randomScramble.length; i++) {
      reduceScramble(i, wordObject);
    }
  }
}

function reduceScramble(index, wordObject) {
    let randomLength = wordObject.scramble;

    scrambleValue = int(randomLength[index]);
    if (scrambleValue > 0) {
      scrambleValue--;
      if (scrambleValue == 0) {
        replaceIndex(index, wordObject);
      }
    }

    randomLength[index] = scrambleValue;
}

function replaceIndex(index, wordObject) {
  wordObject.updateDisplay(index);

  drawLines();
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