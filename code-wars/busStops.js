function busStops(peopleLeavingBus, totalPeopleOnBus) {
    for(var i = 0; i < peopleLeavingBus.length;i++) {
        console.log('Starting num: ' + totalPeopleOnBus);
        console.log('People getting on: ' + peopleLeavingBus[i][0]);
        totalPeopleOnBus += peopleLeavingBus[i][0];
        console.log('current num: ' + totalPeopleOnBus);

        totalPeopleOnBus -= peopleLeavingBus[i][1];
        console.log('People leaving: ' + peopleLeavingBus[i][1]);
        console.log('current num: ' + totalPeopleOnBus);
    }

    return totalPeopleOnBus;
}

var peepsOnBus = 12;
var getOnegetOff = [ [1,4], [7,3], [6,7], [2,14]];

var tempVal = busStops(getOnegetOff, peepsOnBus);
console.log('Final value: ' + tempVal);