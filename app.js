const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {});
    app.listen(PORT, () =>
      console.log(`App has been started on PORT ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.massage);
    process.exit((code: 1));
  }
}

start();
