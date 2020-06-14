const app = require("./init/start");
const covidRouter = require("./src/endpoints/covid");

app.use((req, res, next) => {
  console.log("consultando api");

  next();
});

app.use("/covid", covidRouter);
