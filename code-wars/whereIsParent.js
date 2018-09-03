function findChildren(dancingBrigade) {
    var tempStringArray = dancingBrigade.split('');
    tempStringArray = tempStringArray.sort();
    console.log('show me the result: ', tempStringArray);

    var upper = {};
    var lower = {};

    var upRe = /[A-Z]/;
    var lowRe = /[a-z]/;

    for (var index = 0; index < tempStringArray.length; index++) {
        console.log('Showing forloop val:', tempStringArray[index]);
        if (upRe.test(tempStringArray[index])) {
            testArray.push(tempStringArray[index]);
        } else if (lowRe.test(tempStringArray[index])) {
            
        }
    }

    console.log('showing upper object: ', testArray);
}

findChildren("beeeEBb");

//Test.expect("BbbEeee" == findChildren("beeeEBb"));
//Test.expect("EeeUuuWww" == findChildren("uwwWUueEe"));

//Make object of capital and remove them.
//Make object of lower case and remove them ad order.