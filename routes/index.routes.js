const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/contact", async (req, res, next) => {
  
  const { fullName, email, phoneNumber, message } = req.body;

  const newContact = {
    fullName,
    email,
    phoneNumber,
    message,
  };

  try {
    const response = await Contact.create(newContact);
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while sending the message" });
  }
});

module.exports = router;
