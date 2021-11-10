const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config()
const app = express();


mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB Connected successfully"))
.catch((err) => {
  console.log(err)
})

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send("Hi my people in Igarra");
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


