const request = require('request-promise-native');

//Define the function (the function fetches the ip with the request function, but the return, returns the promise returned by the request function)

//request when called, returns a promise, and we want our function to return this same promise as well, hence why we put return in front of the request function.
const fetchMyIp = function() {
  return request("https://api.ipify.org?format=json");
}

//Parsing when a JSON string is returned
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};
  //what is returned from this body is a json string and unreadble, so we need to parse it with JSON.parse
   //it is the body of ip we are parsing so .ip goes on the end

// fetch the flyover times, parse the latitude and longitude from the body, and return the request promise with them inserted into the url
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};
//OPTIONAL instead of exporting each function, we can export an object with all the functions as properties
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };

//https://web.compass.lighthouselabs.ca/28c032ad-23ef-4f0e-960c-ccf2231b102a for going through the code









module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
};

//exports the function!