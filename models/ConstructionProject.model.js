const { Schema, model } = require("mongoose");

const constructionProjectSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const ConstructionProject = model("ConstructionProject", constructionProjectSchema);

module.exports = ConstructionProject;