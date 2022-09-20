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
<<<<<<< HEAD
    res.status(200).json(await db.Anime.find({}))
    console.log(db.Anime)
=======
      res.status(200).json(await db.find({}))
      console.log(db.Anime)
      
>>>>>>> sohaib
  } catch(err) {
      console.log(err);
  }
})



<<<<<<< HEAD
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
=======
//Anime SHOW ROUTE

>>>>>>> sohaib
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
