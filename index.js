require("dotenv").config();

const express = require("express");
const covidRouter = require("./src/endpoints/covid");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log("consultando api");

  next();
});

app.use("/covid", covidRouter);

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto: ${PORT}`);
});
