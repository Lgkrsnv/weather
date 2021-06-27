const { Router } = require('express');
const fetch = require('node-fetch')
const router = Router();

router.get('/:city', async (req, res) => {
  const {city} = req.params;
  const weather = (await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.API_KEY}`)).json());
  res.json({weather})
})

module.exports = router;
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
