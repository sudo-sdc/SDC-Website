const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users");

app.post("/register", async (req, res) => {
  const { name } = req.body;

  try {
    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.json({ message: "Email already recorded", exists: true });
    }

    const newUser = await userModel.create({
      name,
    });

    return res.json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/checkUsername", async (req, res) => {
  const { username } = req.query;
  const existUsername = await userModel.findOne({ name: username });

  if (existUsername) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
