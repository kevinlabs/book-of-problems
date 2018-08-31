function accum(s) {
    var tempArray = s.toLowerCase().split('');
    var returnArray = [];
    var returnString = '';

    for (var i = 0; i < tempArray.length; i++) {
        var tempStr = '';
        tempStr = tempArray[i];
        tempStr = tempStr.toUpperCase();
        tempStr += mulitplyChar(tempArray[i], (i));
        returnArray[i] = tempStr;
    }

    returnString = returnArray[0];

    for (var i2 = 1; i2 < returnArray.length; i2++) {
            returnString += '-' + returnArray[i2];
    }

    return returnString;
}

function mulitplyChar(char, num) {
    var tempStrVal = '';
    for (var i = 0; i < num; i++) {
        tempStrVal += char;
    }
    return tempStrVal;
}

console.log(accum("ZpglnRxqenU"));
// "A-Bb-Ccc-Dddd"

// always the first letter will be captialized.
// it returns the alpha by number of the index.
// it add the dash in the middle of the sentence.

/*

Test.describe("accum",function() {
Test.it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

*/