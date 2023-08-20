const request = require('request'); // import request module
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
*   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  const url = 'https://api64.ipify.org?format=json';
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null); // null = body
    }
    if (response.statusCode !== 200) { // if website not sending 200
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null); // create error into new object
      return;
    } else {
      const ipAddress = JSON.parse(body).ip; //  extract the IP address
      callback(null, ipAddress); // pass ip into callback
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  const url = `http://ipwho.is/${ip}`;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    const { latitude, longitude } = parsedBody; /* extract lat + lon from parsed, creating a var with them in an object */
    callback(null, {latitude, longitude});
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  const latitude  = coords.latitude;
  const longitude = coords.longitude;
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;

  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      const parsedBody = JSON.parse(body).response;
      callback(null, parsedBody);
    }
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
// export functions
