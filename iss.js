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

module.exports = { fetchMyIP }; // export function
