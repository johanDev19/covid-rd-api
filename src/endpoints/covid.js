const express = require("express");
const axios = require("axios");

const router = express.Router();

const covid_URL_API =
  "https://corona.lmao.ninja/v2/countries/Dominican%20Republic";

router.get("/", async (req, res) => {
  const covidData = await axios.get(covid_URL_API);

  res.json(covidData.data);
});

router.get("/:query", async (req, res) => {
  const data = await axios.get(covid_URL_API).then((axiosRes) => axiosRes.data);

  if (data.hasOwnProperty(req.params.query)) {
    return res.json({
      [req.params.query]: data[req.params.query],
    });
  }
  return res.send("property not found");
});

module.exports = router;
