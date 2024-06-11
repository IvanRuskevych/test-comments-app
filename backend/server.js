const app = require("./app");
const sequelize = require("./sequelize");

const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on port", port);
    });
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });
