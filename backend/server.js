const jsonServer = require("json-server");
const express = require("express");
const app = express();
const path = require("path");

const router = jsonServer.router(path.join(__dirname, "ddd.json"));
const middlewares = jsonServer.defaults();

app.use(express.json());
app.use(middlewares);
app.use("/api", router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});