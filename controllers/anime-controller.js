///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();
const axios = require('axios')




///////////////////////////////
// MODELS
////////////////////////////////

const db = require('../models');

///////////////////////////////
// ROUTES
////////////////////////////////

              



//Anime Home route
router.get('/', async (req, res) => {
  try {
    res.status(200).json(await db.Anime.find({}))
    console.log(db.Anime)
  } catch(err) {
      console.log(err);
  }
})



//Anime SHOW ROUTE// router.get("/:mal_id", async (req, res) => {
//   try {
//    
//     console.log('helloo' ,db.Anime)
//     res.json(await db.Anime.find(req.params.mal_id))
//     console.log(db.Anime)
//   } catch (error) {
//   
//     res.status(400).json(error);
//   }
// });
router.get("/:id", async (req, res) => {
  try {
      
      res.json(await db.Anime.findById(req.params.id));
    } catch (error) {
      
      res.status(400).json(error);
    }
});



module.exports = router;
