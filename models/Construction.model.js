const { Schema, model } = require("mongoose");

const constructionSchema = new Schema(
  {
    contractor: {
      type: String,
    },
    project: {
      type: String,
    },
    description: {
      type: [String],
    },
    location: {
      type: String,
    },
    year: {
      type: String,
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Construction = model("Construction", constructionSchema);

module.exports = Construction;
