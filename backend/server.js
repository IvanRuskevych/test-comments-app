const { Server } = require("ws");
const http = require("http");
const app = require("./app");
const sequelize = require("./sequelize");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
const wss = new Server({ server });

wss.on("connection", (ws) => {});
let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
  });
});

sequelize
  .sync()
  .then(() => {
    server.listen(port, () => {
      console.log("Server running on port", port);
    });
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });
