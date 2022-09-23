///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();
const axios = require('axios')




///////////////////////////////
// MODELS
////////////////////////////////

const Anime = require('../models/Anime');
//const Review = require('../models/Review_schema')

///////////////////////////////
// ROUTES
////////////////////////////////

              



//Anime Home route
router.get('/', async (req, res) => {
  try {
      res.status(200).json(await Anime.find({}))
      console.log(Anime)
      
  } catch(err) {
      console.log(err);
  }
})



//Anime SHOW ROUTE

router.get("/:id", async (req, res) => {
  try {
      
      res.json(await Anime.findById(req.params.id));
    } catch (error) {
      
      res.status(400).json(error);
    }
});
// adding a review to an anime 
router.post('/:id', async (req, res) => {
  console.log('post-route')
  try{
  const animeFind = await Anime.findById(req.params.id)
  console.log(animeFind)
  console.log(req.body)
  
  const review = await animeFind.reviews.create(req.body)
  console.log(review)
  await Anime.updateOne(
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
