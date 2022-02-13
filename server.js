const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const device = require("express-device");
// const fileUpload = require("express-fileupload");
// call cron
// const { cronVar } = require("./app/job/cron");

const app = express();

const corsOptions = {
  origin: ["http://localhost:8080"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");

db.sequelize.sync();

// never enable the code below in production
// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Database with { force: true }");
//   // initial();
// });

//capture device
app.use(device.capture({ parseUserAgent: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// call cron example
// functionCron();

// routes
// require("./app/routes/exaole.routes")(app);

// example upload
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
// require("./app/routes/uploadFile.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 7878;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
