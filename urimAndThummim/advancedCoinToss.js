/*
  Dedicated to my Father. (John 3:16)

  Urim (אוּרִים)
  Thummim (תוּמִים) 

*/

function advancedCoinToss(round, numberOfDraw) {
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
      let draw = getUrimOrThummim();
      if (draw === 'T') {
        totalUrimAndThummim.Thummim += 1;
        currentRoundThummimTotal += 1;
      } else if (draw === 'U') {
        totalUrimAndThummim.Urim += 1;
        currentRoundUrimTotal += 1;
      }

      currentRoundDraw.push(draw);
    }

    if (currentRoundUrimTotal > currentRoundThummimTotal) {
      currentRoundWinner = 'U'
    } else if (currentRoundThummimTotal > currentRoundUrimTotal) {
      currentRoundWinner = 'T'
    } else {
      currentRoundWinner = 'even'
    }

    draws.push(currentRoundDraw);
    rounds.push(['Round ' + (i + 1), currentRoundWinner]);
  }

  totalRoundsWinner = calculateRoundWinner(rounds);

  console.log('Showing draws: ', draws);
  console.log('Showing total Urim and Thummim : ', totalUrimAndThummim);
  console.log('Showing total Round winner : ', totalRoundsWinner);

  return { draws, totalUrimAndThummim, totalRoundsWinner}
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

  if(roundTotalUrim > roundTotalThummim) {
    totalRoundsWinner = 'Urim';
  } else if (roundTotalThummim > roundTotalUrim) {
    totalRoundsWinner = 'Thummim';
  } else {
    totalRoundsWinner = 'Even';
  }

  return totalRoundsWinner;
}

function getUrimOrThummim() {
  let arrayRandom = [];
  let pickerRandom = [];
  let returnVal;

  for (let i = 0; i < 7; i++) {
    arrayRandom.push(Math.floor(Math.random() * 2));
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

advancedCoinToss(3, 3);