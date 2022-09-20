///////////////////////////////
// deps
////////////////////////////////

const express = require("express");
const router = express.Router();
const axios = require('axios')




///////////////////////////////
// models
////////////////////////////////

const db = require('../models/Anime');
//const Review = require('../models/Review_schema')

///////////////////////////////
// routes
////////////////////////////////

              



//Anime Home route
router.get('/', async (req, res) => {
  try {
      res.status(200).json(await db.find({}))
      console.log(db.Anime)
      
  } catch(err) {
      console.log(err);
  }
})



//Anime SHOW ROUTE

router.get("/:id", async (req, res) => {
  try {
      
      res.json(await db.findById(req.params.id));
    } catch (error) {
      
      res.status(400).json(error);
    }
});
// adding a review to an anime 
router.post('/:id', async (req, res) => {
  const animeFind = await db.findById(req.params.id)
  const review = await animeFind.reviews.create(req.body)
  console.log(req.body)
  await db.updateOne(
    {_id: req.params.id},
    {$push :{reviews : review}  }
  )
})


module.exports = router;
