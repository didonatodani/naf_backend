require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

// ROUTES

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const contactRoutes = require("./routes/contact.routes")
app.use("/contact", contactRoutes)

// Projects Routes
const constructionRoutes = require("./routes/construction.routes");
app.use("/construction", constructionRoutes);

const bimRoutes = require("./routes/bim.routes");
app.use("/bim", bimRoutes);

const woodRoutes = require("./routes/wood.routes");
app.use("/wood", woodRoutes);

// Errors
require("./error-handling")(app);

module.exports = app;
