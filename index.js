const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const StudentModel = require("./models/Student.js");

mongoose
  .connect("mongodb+srv://tkrec:xLWhVmBfgcsG1GSH@tkrec.o2xyi.mongodb.net/")
  .then(() => console.log(" mongo atlas Connected!"));

app.post("/poststudentdata", async (req, res) => {
  try {
    const newData = new StudentModel(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.error("Error creating new data:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getstudentdata", async (req, res) => {
  try {
    const newData = await StudentModel.find({});
    res.status(200).json(newData);
    console.log(req.body);
  } catch (error) {
    res.send(500);
  }
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/apidata", (req, res) => {
  res.send("api data is empty");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
