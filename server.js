require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const todoRoutes = require("./routes/todu.route");
const userRouters = require("./routes/user.route");
// express app

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// routes
app.use("/api/todo", todoRoutes);
app.use("/api/user", userRouters);

// mongoDB
mongoose.set("strictQuery", false);
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
