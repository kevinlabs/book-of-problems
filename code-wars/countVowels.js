//https://www.codewars.com/kata/counting-vowels/train/javascript
var tempString = 'Count the vowel please.';

function countVowels(str) {
    
    var tempStrArray = [];
    var vowelCounter = 0;

    if (str.length === 0) {
        return 0;
    }

    tempStrArray = str.toLowerCase().split('');

    for(var i = 0; i < tempStrArray.length; i++) {
        if (tempStrArray[i] === 'a' || tempStrArray[i] === 'e' || tempStrArray[i] === 'i' || tempStrArray[i] === 'o' || tempStrArray[i] === 'u' ) {
            vowelCounter++;
        }
    }

    return vowelCounter;
}

var temp = countVowels(tempString);
console.log('Here is number of vowels: ' + temp);