///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();





///////////////////////////////
// MODELS
////////////////////////////////

const {Anime} = require('../models');

///////////////////////////////
// ROUTES
////////////////////////////////

              



//Anime Home route
router.get('/', async (req, res) => {
  try {
      res.status(200).json(await Anime.find({}));
      
  } catch(err) {
      console.log(err);
  }
})



//Anime SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    // send one person
    console.log('helloo' ,Anime.data)
    res.json(await Anime.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});



module.exports = router;
