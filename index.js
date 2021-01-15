const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP(`204.197.178.71`, (error, data) => {
  if (error) {
    console.log("It didnt work!", error);
    return;
  }
  console.log(`{${data}}`);
});
