// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation  } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP(`204.197.178.71`, (error, coordinates) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });

// fetchISSFlyOverTimes(
//   { latitude: "45.5178", longitude: "-73.6046" },
//   (error, passtimes) => {
//     if (error) {
//       console.log("It didnt work!", error);
//       return;
//     }
//     console.log("It worked! Fly over times are:\n", passtimes);
//   }
// );
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});