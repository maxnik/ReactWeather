import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=1716b6cc1dad98471a12d54cd4b40841';

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.count === 0) {
        throw new Error(res.data.message);
      } else {
        return res.data.list[0].main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}