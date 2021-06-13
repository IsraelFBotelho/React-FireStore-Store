const express = require("express");
const app = express();


const rotaProdutos = require("./routes/produtos");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, content-type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send();
  }
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
