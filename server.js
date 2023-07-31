require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const todoRoutes = require("./routes/todu.route");

// express app

const app = express();

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// routes
app.use("/todo", todoRoutes);

// mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`lisingt on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
