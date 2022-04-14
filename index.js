const express = require("express");
const cors = require('cors');
require("dotenv").config({ path: ".env" });

// Initialize the express server
const app = express();
app.use(cors({credentials: true, origin: process.env.UI_HOST}));
app.use(express.json());

// API endpoint for testing
app.get("/", (req, res) => {
  return res.json("success");
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

// Set the port to listen
app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
