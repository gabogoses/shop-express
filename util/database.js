const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop-express", "root", "aqwzsxedc", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
