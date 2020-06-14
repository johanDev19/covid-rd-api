const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const PORT = 3000;
const covid_URL_API = 'https://corona.lmao.ninja/v2/countries/Dominican%20Republic'

const app = express()

app.get('/all', async (req, res) => {
  const covidData = await axios.get(covid_URL_API);

  res.json(covidData.data)
})

app.get('/data/:query', async(req, res) => {
  const data = await axios.get(covid_URL_API).then(axiosRes => axiosRes.data);

  if(data.hasOwnProperty(req.params.query)) {
    return res.json({
      [req.params.query]: data[req.params.query]
    })
  }

  return res.send('property not found')
})

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto: ${PORT}`)
})

