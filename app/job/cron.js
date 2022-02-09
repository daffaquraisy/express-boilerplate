const cron = require("node-cron");
const { QueryTypes } = require("sequelize");
const db = require("../models");

// example cron function
const exampleCron = (req, res, next) => {
  cron.schedule("* * * * *", () => {
    // do something
  });
};

module.exports = {
  exampleCron,
};
