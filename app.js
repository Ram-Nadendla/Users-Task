const express = require("express");

const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/users";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("open", () => {
  console.log("DB Connected");
});

app.use(express.json());

const userRoutes = require("./routes/UserRoutes");

app.use("/users", userRoutes);

app.listen(5488, () => {
  console.log("node server successfully started on port 5488");
});
