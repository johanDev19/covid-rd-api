require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto: ${PORT}`);
});

module.exports = app;
