///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();

///////////////////////////////
// MODELS
////////////////////////////////

const { Anime } = require("../models");

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    // get all people
    const anime = await Anime.find({})
    console.log("testing anime list", anime)
    res.json(anime);
  } catch (error) {
    //send error
    console.log(error)
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new person
    res.json(await Anime.create(req.body));
  } catch (error) {
    //send error

    res.status(400).json(error);
  }
});

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    // send one person
    res.json(await Anime.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // update people by ID
    res.json(
      await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // delete people by ID
    res.json(await Anime.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;
