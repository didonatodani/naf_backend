const { Schema, model } = require("mongoose");

const woodProjectSchema = new Schema(
  {
    location: {
      type: String,
      required: [true, "Project location is required"],
    },
    surface: {
      firstFloor: {
        type: String,
      },
      secondFloor: {
        type: String,
      },
      thirdFloor: {
        type: String,
      },
    },
    structure: {
      type: String,
    },
    description: {
      type: String,
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

const WoodProject = model("WoodProject", woodProjectSchema);

module.exports = WoodProject;
