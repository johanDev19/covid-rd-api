require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

mongoose.connect(
  "mongodb://localhost/test1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("erro conectando a mongodb", err);
    }
  }
);

app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto: ${PORT}`);
});

module.exports = app;
