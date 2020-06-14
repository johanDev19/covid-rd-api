const app = require("./init/start");
const covidRouter = require("./src/endpoints/covid");
const authRouter = require("./src/endpoints/auth");

app.use((req, res, next) => {
  console.log("consultando api");

  next();
});

app.use("/covid", covidRouter);
app.use("/auth", authRouter);
