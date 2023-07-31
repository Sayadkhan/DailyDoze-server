require("dotenv").config();

const express = require("express");
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

app.listen(port, () => {
  console.log(`lisingt on port ${port}`);
});
