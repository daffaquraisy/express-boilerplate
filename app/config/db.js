module.exports = {
  HOST: "localhost",
  USER: "usernameDB",
  PASSWORD: "passwordDB",
  DB: "nameDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
