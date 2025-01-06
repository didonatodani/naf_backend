// REMEMBER TO HANDLE INFORMATION LEAKING!

const express = require("express");
const router = express.Router();
const BIM = require("../models/BIM.model");

router.get("/", async (req, res, next) => {
  try {
    let projects = await BIM.find({}).select({
      project: 1,
      description: 1,
      images: { $slice: 1 }, // only first image
      _id: 0, //no id included
    });

    if (projects.length === 0) {
      console.log("No BIM projects found.");
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while displaying all the BIM projects",
    });
  }
});

// Get 1 BIM project
router.get("/:bimId", async (req, res, next) => {
  const { bimId } = req.params;

  try {
    //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await BIM.findById(bimId);

    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ message: "No project found with this ID" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while searching for the project" });
  }
});

module.exports = router;
