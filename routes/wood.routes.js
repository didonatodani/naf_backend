// REMEMBER TO HANDLE INFORMATION LEAKING!

const express = require("express");
const router = express.Router();
const Wood = require("../models/Wood.model");

router.get("/", async (req, res, next) => {
  try {
    // I dont want to show id in the console (en el futuro, seleccionar solo los datos que quiero mostrar aca)
    let projects = await Wood.find({}).select("-_id");
    console.log("Found Wood Frame projects:", projects);

    if (projects.length === 0) {
      console.log("No Wood Frame projects found.");
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while displaying all the Wood Frame projects",
    });
  }
});

// Get 1 Wood Frame project
router.get("/:woodId", async (req, res, next) => {
  const { woodId } = req.params;

  try {
    //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await Wood.findById(woodId);

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
