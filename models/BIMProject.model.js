const { Schema, model } = require("mongoose");

const bimProjectSchema = new Schema(
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
      // change for cloudinary settings
    },
  },
  {
    timestamps: true,
  }
);

const BIMProject = model("BIMProject", bimProjectSchema);
module.exports = BIMProject;
