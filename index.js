const express = require("express");
const axios = require("axios");
require("dotenv").config();
const { getCity, getWeather } = require("./src/service");

const app = express();

app.set("trust proxy", true);
app.get("/api/hello", async (req, res) => {
  const { visitor_name } = req.query;
  let userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (userIP.includes(",")) {
    userIP = userIP.split(",")[0];
  }
  console.log(userIP);
  const country = await getCity(userIP);
  const city = country.region_name;

  const weather = await getWeather(city);

  const temp = weather.current.temp_c;
  res.send({
    client_ip: userIP, // The IP address of the requester
    location: city, // The city of the requester
    greeting: `Hello, ${visitor_name}!, the temperature is ${temp} degrees Celcius in ${city}`,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
