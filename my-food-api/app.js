const express = require("express");
const createError = require("http-errors");
const mongoose = require("mongoose");

// routes
const indexRouter = require("./routes/index");
const foodRouter = require("./routes/food");

const app = express();

//General Middleware for Cross Origin Resource Sharing [CORS]
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// request parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/food", foodRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const MONGODB_URI = "mongodb://mongodb:27017/food-db";

mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(80))
  .catch((err) => console.log(err));
