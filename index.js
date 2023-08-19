// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
