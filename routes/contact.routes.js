const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
require("dotenv").config();

const Contact = require("../models/Contact.model");

// NODEMAILER: ACTIVATE LATER

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587,                 // Secure SMTP port
    secure: false,             // Use TLS
    auth: {
      user: process.env.EMAIL_ADDRESS, // Your Outlook email address
      pass: process.env.EMAIL_PASSWORD, // Your Outlook email password
    },
  });

async function sendEmail(contactData) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `New contact form message from ${contactData.fullName}`,
    text: `Message: ${contactData.message}. Sender's email: ${contactData.email} . Sender's phone: ${contactData.phoneNumber}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully to email", mailOptions);
  } catch (error) {
    console.error("Error sending message to email", error.message);
    throw new Error("Failed to send email");
  }
}

// CONTACT FORM ROUTE:

router.post("/", async (req, res, next) => {
  const { fullName, email, phoneNumber, message } = req.body;

  const newContact = {
    fullName,
    email,
    phoneNumber,
    message,
  };

  try {
    const response = await Contact.create(newContact);
    await sendEmail(newContact); // activate when Nodemailer is functional

    res.status(201).json({
      message: "Message received and email sent successfully",
      data: response,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while sending the message" });
  }
});

module.exports = router;
