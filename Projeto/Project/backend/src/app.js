const mongooseConnection = require("./configs/mongooseConnection.config");
const dotenv = require("dotenv");
dotenv.config();

mongooseConnection.connectToDB();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const personRoutes = require("./routes/person.routes");
const bookRoutes = require("./routes/book.routes");
const cartRoutes = require("./routes/cart.routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.use(index);
app.use("/api/", userRoutes);
app.use("/api/", personRoutes);
app.use("/api/", bookRoutes);
app.use("/api/", cartRoutes);

module.exports = app;