const { Schema, model } = require("mongoose");

const bimSchema = new Schema(
  {
    project: {
      type: String,
      required: [true, "Name of project is required."]
    },
    description: {
      type: String,
    },
    location: {
      type: String,
      required: [true, "location of project is required"],
    },
    projectScope: {
      type: [String],
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const BIM = model("BIM", bimSchema);
module.exports = BIM;
