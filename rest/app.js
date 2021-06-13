const express = require("express");
const app = express();
const cors = require("cors");

const rotaProdutos = require("./routes/produtos");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Accept, Authorization"
  );

  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  app.use(cors());
  next();
});

app.use("/produtos", rotaProdutos);

app.use((req, res, next) => {
  const erro = new Error("Not Found");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    message: error.message,
  });
});

module.exports = app;
