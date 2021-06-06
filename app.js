
// Import  require packages.

const express = require("express");

const mongoose = require("mongoose");

//Database URL

const url = "mongodb://localhost:27017/users";

//App Component
const app = express();

//Database connection
mongoose.connect(url, { useNewUrlParser: true });

const connection = mongoose.connection;

//
connection.on("open", () => {
  console.log("DB Connected");
});

//Setting up the res data in json format using "Use"
app.use(express.json());

//importing the routes FileList...
const userRoutes = require("./routes/UserRoutes");

app.use("/users", userRoutes);

// Port Listener
app.listen(5488, () => {
  console.log("node server successfully started on port 5488");
});
