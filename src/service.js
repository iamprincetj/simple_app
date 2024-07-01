const axios = require("axios");

const key = process.env.IP_API_KEY;
const weatherKey = process.env.WEATHER_KEY;

const baseUrlIP = `https://api.ip2location.io/?key=${key}&ip=174.115.77.166`;
const baseUrlTemp = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;

const getCity = async () => {
  const res = await axios.get(baseUrlIP);
  return res.data;
};

const getWeather = async (city) => {
  const res = await axios.get(baseUrlTemp + city);
  return res.data;
};

module.exports = {
  getCity,
  getWeather,
};
