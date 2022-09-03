// //require the function from iss_promsed.js

// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation, } = require('./iss_promised');


// //call the function from iss_promised.js
// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));



// OPTIONAL with iss_promised.js, we are calling the oject with all the functions as properties


  // index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');

// Call the function
  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
