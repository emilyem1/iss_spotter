// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// Test for fetchISSFlyOverTimes
/*
const coords = {
  latitude: 49.2827291,
  longitude: -123.1207375
};

fetchISSFlyOverTimes(coords, (error, flyover) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! This is your risetime + duration:' , flyover);
}); */

// Test for fetchCoordsByIp
/*
const ipAddress = '174.7.121.62';
const ipAddress = '42' to check error message is working

fetchCoordsByIP(ipAddress, (error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Coords here:' , ip);
}); */

// Testing for fetchMyIp
/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */
