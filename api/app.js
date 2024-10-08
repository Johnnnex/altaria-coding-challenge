const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config();

require("./model/index");

app.use(express.json());

app.use(cors());

const Auth = require("./routers/auth.routes");
const Event = require("./routers/event.routes");

app.use("/api/v1/auth", Auth);
app.use("/api/v1/event", Event);

app.get("/", (req, res) => {
  res.send("Welcome to John's map API");
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
