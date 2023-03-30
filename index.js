const returnFirstTwoDrivers = function (driver) { return [driver[0], driver[1] ] };

const returnLastTwoDrivers = function (driver) { return [driver[driver.length-2], driver[driver.length-1] ] };


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(){
 return function (x) {return (x * x)}

}

const myDoubles = createFareMultiplier()

function fareDoubler(y) {
return (myDoubles(y)/y)*2
}

const myTripple = createFareMultiplier()

function fareTripler(y) {
return (myTripple(y)/y)*3
}

function selectDifferentDrivers(myDrivers, driverSelector){
return driverSelector(myDrivers)
}
