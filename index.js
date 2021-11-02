// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi) {
    return fare => fare * multi;
        //return (fare * multi);
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fn) {
    return fn(array); 
}