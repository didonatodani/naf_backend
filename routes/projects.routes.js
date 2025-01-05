// QUESTION FOR MYSELF:: DO I WANT TO USE PROJECTS' IDS FOR ROUTES? IS IT SECURE?

const express = require("express");
const router = express.Router();

const ConstructionProject = require("../models/ConstructionProject.model");
const BIMProject = require("../models/BIMProject.model");
const WoodProject = require("../models/WoodProject.model");

// CONSTRUCTION ROUTES

router.get("/construction", async (req, res, next) => {
  try {
    // I dont want to show id in the console (en el futuro, seleccionar solo los datos que quiero mostrar aca)
    let projects = await ConstructionProject.find({}).select("-_id");
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
router.get("/construction/:constructionId", async (req, res, next) => {
  const { constructionId } = req.params;

  try {
     //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await ConstructionProject.findById(constructionId)

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

// End of construction routes

// BIM ROUTES:

router.get("/bim", async (req, res, next) => {
  try {
    // I dont want to show id in the console (en el futuro, seleccionar solo los datos que quiero mostrar aca)
    let projects = await BIMProject.find({}).select("-_id");
    console.log("Found BIM projects:", projects);

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
router.get("/bim/:bimId", async (req, res, next) => {
  const { bimId } = req.params;

  try {
    //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await BIMProject.findById(bimId)

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

// End of BIM routes

// WOOD ROUTES:

router.get("/woodframe", async (req, res, next) => {
  try {
    // I dont want to show id in the console (en el futuro, seleccionar solo los datos que quiero mostrar aca)
    let projects = await WoodProject.find({}).select("-_id");
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
router.get("/woodframe/:woodId", async (req, res, next) => {
  const { woodId } = req.params;

  try {
     //(en el futuro, seleccionar solo los datos que quiero mostrar aca)
    const response = await WoodProject.findById(woodId)

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

// End of wood routes

module.exports = router;
