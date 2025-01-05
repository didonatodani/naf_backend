// modelo para formulario de contacto

const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Your full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phoneNumber: {
      type: String, // Store the phone number with the country code (e.g., '+1 123-456-7890')
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);
module.exports = Contact;
