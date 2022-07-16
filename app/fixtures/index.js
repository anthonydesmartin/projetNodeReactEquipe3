const sequelize_fixtures = require("sequelize-fixtures");
const db = require("../models/Db.class.js");

db.message += " + require on index fixtures ";
console.log("db.message", db.message);

(async () => {
  try {
    // Import user fixtures into db
    await sequelize_fixtures
      .loadFile("./app/fixtures/user.fixtures.js", db.models)
      .then(async () => {
        console.log("Db: User fixtures loaded");
        // Import customer fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/customer.fixtures.js",
          db.models
        );
      })
      .then(async () => {
        console.log("Db: customer fixtures loaded");
        // Import vehicle fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/vehicle.fixtures.js",
          db.models
        );
      })
      .then(async () => {
        console.log("Db: vehicle fixtures loaded");
        // Import quote fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/quote.fixtures.js",
          db.models
        );
      })
      .then(async () => {
        console.log("Db: quote fixtures loaded");
        // Import order fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/order.fixtures.js",
          db.models
        );
      })
      .then(async () => {
        console.log("Db: order fixtures loaded");
        // Import order fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/invoice.fixtures.js",
          db.models
        );
      })
      .then(() => console.log("Db: invoice fixtures loaded"));
  } catch (err) {
    console.log("Err: fucking fixtures error", err);
  }
})();
