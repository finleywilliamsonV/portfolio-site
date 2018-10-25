const express = require('express');
const router = new express.Router();
const request = require('request-promise');

// GET /
router.get('/', function(req, res, next) {
  return res.render('index');
});

// GET /projects
router.get('/projects', function(req, res, next) {
  return res.render('projects');
});

// GET /about-me
router.get('/about-me', function(req, res, next) {
  return res.render('aboutMe');
});

// ------ FOR API ------

const API = {
  latLongApiUrl: 'https://api.opencagedata.com/geocode/v1/json',
  latLongApiKey: '501ef522ca0f4c06ae2b5410168d07eb',
  weatherApiUrl: `https://api.darksky.net/forecast/27fa7afbec463b30b5c6c636974e6ba7/`,
};

// GET latLong api
router.get('/api/lat-long/:address', getLatLong);

async function getLatLong(req, res, next) {
  await res.header('Access-Control-Allow-Origin', '*');
  await res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Conent-Type, Accept'
  );

  const {address} = req.params;

  const options = {
    uri: API.latLongApiUrl,
    qs: {
      q: address,
      key: API.latLongApiKey,
    },
    json: true,
  };

  const latLong = await request(options);

  return res.send(latLong);
}

// GET weather api
router.get('/api/weather/:latLong', getWeather);

async function getWeather(req, res, next) {
  await res.header('Access-Control-Allow-Origin', '*');
  await res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Conent-Type, Accept'
  );

  const {latLong} = req.params;

  const options = {
    uri: API.weatherApiUrl + latLong,
    json: true,
  };

  const weather = await request(options);

  return res.send(weather);
}

module.exports = router;
