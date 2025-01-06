// REMEMBER TO HANDLE INFORMATION LEAKING!

const express = require("express");
const router = express.Router();
const Construction = require("../models/Construction.model");

router.get("/", async (req, res, next) => {
  try {
    // I dont want to show id in the console (en el futuro, seleccionar solo los datos que quiero mostrar aca)
    let projects = await Construction.find({}).select("-_id");
    console.log("Found Construction projects:", projects);

    if (projects.length === 0) {
      console.log("No construction projects found.");
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while displaying all the construction projects",
    });
  }
});

// Get 1 construction project
router.get("/:constructionId", async (req, res, next) => {
  const { constructionId } = req.params;

  try {
    //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await Construction.findById(constructionId);

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
