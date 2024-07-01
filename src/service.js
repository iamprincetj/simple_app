const axios = require("axios");

const key = process.env.IP_API_KEY;
const weatherKey = process.env.WEATHER_KEY;

const baseUrlIP = `https://api.ip2location.io/?key=${key}&ip=`;
const baseUrlTemp = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;

// API Request for getting requester's City
const getCity = async (ip) => {
  const res = await axios.get(baseUrlIP + ip);
  return res.data;
};

// API Request for getting requester city's weather
const getWeather = async (city) => {
  const res = await axios.get(baseUrlTemp + city);
  return res.data;
};

module.exports = {
  getCity,
  getWeather,
};
