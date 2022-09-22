///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();
const axios = require('axios')




///////////////////////////////
// MODELS
////////////////////////////////

const db = require('../models/Anime');
//const Review = require('../models/Review_schema')

///////////////////////////////
// ROUTES
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
  try{
  const animeFind = await db.findById(req.params.id)
  
  const review = await animeFind.reviews.create(req.body.reviews)
  console.log(review)
  await db.updateOne(
    {_id: req.params.id},
    {$push :{reviews : review}  }
  )
  // console.log(review)
  res.redirect(`/anime/${req.params.id}`)
  } catch(error) {
    console.log(error)
    res.send(error)
  }
})



module.exports = router;
