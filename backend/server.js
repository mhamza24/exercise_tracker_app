const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); | not working

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection establish successfully,MongoDB");
});

const exercisesRouter = require("./routes/exerceises");
const userRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log(`Server is running on port :${port}`));

