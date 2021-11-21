/*
  Dedicated to my Father. (John 3:16)

  Urim (אוּרִים)
  Thummim (תוּמִים) 

*/

const { kjv } = require('./bible/kjv-1769.json');

function complicatedCoinToss(question = 'Elohim', round, numberOfDraw) {
  const questionKeyNum = questionKeyGen(question);
  let breastPlate = [
    ['Reuben רְאוּבֵן', 'Simeon שִׁמְעוֹן', 'Levi לֵוִי'],
    ['Judah יְהוּדָה', 'Dan דָּן', 'Naphtali נַפְתָּלִי'],
    ['Gad גָּד', 'Asher אָשֵׁר', 'Issachar יִשָּׂשכָר',],
    ['Zebulun זְבוּלֻן', 'Josef יוֹסֵף', 'Benjamin בִּנְיָמִן']
  ]
  let draws = [];
  let totalUrimAndThummim = { 'Urim': 0, 'Thummim': 0 };
  let rounds = [];

  for (let i = 0; i < round; i++) {
    let currentRoundDraw = [];
    currentRoundDraw.push(i + 1);
    let currentRoundUrimTotal = 0;
    let currentRoundThummimTotal = 0;
    let currentRoundWinner;
    let totalRoundsWinner;

    for (let j = 0; j < numberOfDraw; j++) {
      let draw = getUrimOrThummim(questionKeyNum);
      if (draw === 'T') {
        totalUrimAndThummim.Thummim += 1;
        currentRoundThummimTotal += 1;
      } else if (draw === 'U') {
        totalUrimAndThummim.Urim += 1;
        currentRoundUrimTotal += 1;
      }

      currentRoundDraw.push(draw);
    }

    currentRoundWinner = whichIsGreater(currentRoundUrimTotal, currentRoundThummimTotal);

    draws.push(currentRoundDraw);
    rounds.push(['Round ' + (i + 1), currentRoundWinner]);
  }

  totalRoundsWinner = calculateRoundWinner(rounds);
  totalUrimAndThummim['Winner'] = whichIsGreater(totalUrimAndThummim.Urim, totalUrimAndThummim.Thummim)

  console.log('Showing draws: ', draws);
  console.log('Showing total Urim and Thummim : ', totalUrimAndThummim);
  console.log('Showing total Round winner : ', totalRoundsWinner, ' Total Winner: ', totalUrimAndThummim['Winner']);

  return { draws, totalUrimAndThummim, totalRoundsWinner }
}

function calculateRoundWinner(rounds) {
  let roundTotalUrim = 0;
  let roundTotalThummim = 0;
  let totalRoundsWinner = '';

  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i][1] === 'T') {
      roundTotalThummim += 1;
    } else if (rounds[i][1] === 'U') {
      roundTotalUrim += 1;
    }
  }

  totalRoundsWinner = whichIsGreater(roundTotalUrim, roundTotalThummim)

  return totalRoundsWinner;
}

function getUrimOrThummim(questionKeyNum) {
  let arrayRandom = [];
  let pickerRandom = [];
  let returnVal;

  for (let i = 0; i < 7; i++) {
    arrayRandom.push(randomReversal(Math.floor(generatePermutator(questionKeyNum) * 2)));
  }

  for (let i = 0; i < 3; i++) {
    pickerRandom.push(Math.floor(Math.random() * 7));
  }

  let indexPicker = Math.floor(Math.random() * 3);

  if (arrayRandom[pickerRandom[indexPicker]] === 0) {
    returnVal = 'T'
  } else if (arrayRandom[pickerRandom[indexPicker]] === 1) {
    returnVal = 'U'
  }

  return returnVal;
}

function whichIsGreater(urimNum, thumminNum) {
  let greaterIs;

  if (urimNum > thumminNum) {
    greaterIs = 'U';
  } else if (thumminNum > urimNum) {
    greaterIs = 'T';
  } else {
    greaterIs = 'Even';
  }

  return greaterIs;
}

function questionKeyGen(question) {
  const verse = pickBibleVerse();
  console.log('Key Picked: ', verse);

  return question.length + verse.length;
}

function pickBibleVerse() {
  const verseObj = kjv[Math.floor(Math.random() * kjv.length)];
  return verseObj[Object.keys(verseObj)[0]]
}

function generatePermutator(questionKeyNum) {
  const bibleKey = pickBibleVerse().length;
  const permutatedNumber = Math.random() * questionKeyNum * bibleKey;
  return Number(('.' + (String(permutatedNumber).split('.')[1])));
}

function randomReversal(number) {
  const shouldFlipNumber = Boolean(Math.floor(Math.random() * 2))
  let returnVal;
  
  if (shouldFlipNumber) {
    returnVal = Number(!(Boolean(number)));
  } else if (!shouldFlipNumber) {
    returnVal = number;
  }

  return returnVal;
}

const questionString = 'Type your question here.'
complicatedCoinToss(questionString, 7, 777);