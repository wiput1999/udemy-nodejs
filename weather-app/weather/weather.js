const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/e26341c53ee4591e7eed0d45c957119a/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
