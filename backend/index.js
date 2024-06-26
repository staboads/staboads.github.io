const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./router/routes");

app.use(cors());

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(` Server running, port ${PORT} `);
});
